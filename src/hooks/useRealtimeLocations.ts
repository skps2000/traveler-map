import { useEffect, useState, useCallback } from 'react'
import { supabase, Location } from '@/lib/supabase'
import { RealtimeChannel } from '@supabase/supabase-js'

export function useRealtimeLocations(tripId: string) {
  const [locations, setLocations] = useState<Location[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  // Fetch initial locations
  const fetchLocations = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase
        .from('locations')
        .select('*')
        .eq('trip_id', tripId)
        .order('created_at', { ascending: true })

      if (error) throw error
      setLocations(data || [])
      setError(null)
    } catch (err) {
      setError(err as Error)
      console.error('Error fetching locations:', err)
    } finally {
      setIsLoading(false)
    }
  }, [tripId])

  useEffect(() => {
    fetchLocations()

    // Subscribe to realtime updates
    let channel: RealtimeChannel | null = null

    const setupRealtimeSubscription = async () => {
      channel = supabase
        .channel(`locations:trip_id=eq.${tripId}`)
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'locations',
            filter: `trip_id=eq.${tripId}`
          },
          (payload) => {
            console.log('New location received:', payload.new)
            setLocations((prev) => [...prev, payload.new as Location])
          }
        )
        .subscribe()
    }

    setupRealtimeSubscription()

    return () => {
      if (channel) {
        supabase.removeChannel(channel)
      }
    }
  }, [tripId, fetchLocations])

  return { locations, isLoading, error, refetch: fetchLocations }
}
