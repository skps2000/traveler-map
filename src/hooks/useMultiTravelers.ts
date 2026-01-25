import { useState, useEffect } from 'react'
import { Location } from '@/lib/supabase'
import { allTravelerLocations, travelers } from '@/data/worldTravelers'

interface UseMultiTravelersOptions {
  enableRealtime?: boolean
  realtimeInterval?: number
}

export function useMultiTravelers({
  enableRealtime = false,
  realtimeInterval = 2000
}: UseMultiTravelersOptions = {}) {
  const [travelerLocations, setTravelerLocations] = useState<Map<string, Location[]>>(new Map())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      if (enableRealtime) {
        // 실시간 모드: 각 여행자 빈 배열로 시작
        const initialMap = new Map<string, Location[]>()
        travelers.forEach(traveler => {
          initialMap.set(traveler.id, [])
        })
        setTravelerLocations(initialMap)
      } else {
        // 정적 모드: 모든 데이터 로드
        setTravelerLocations(new Map(allTravelerLocations))
      }
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(loadTimeout)
  }, [enableRealtime])

  useEffect(() => {
    if (!enableRealtime || isLoading) return

    const indices = new Map<string, number>()
    travelers.forEach(traveler => indices.set(traveler.id, 0))

    const intervalId = setInterval(() => {
      setTravelerLocations(prev => {
        const updated = new Map(prev)
        let hasUpdate = false

        travelers.forEach(traveler => {
          const currentIndex = indices.get(traveler.id) || 0
          const allLocations = allTravelerLocations.get(traveler.id) || []
          
          if (currentIndex < allLocations.length) {
            const currentLocations = prev.get(traveler.id) || []
            const newLocation = allLocations[currentIndex]
            updated.set(traveler.id, [...currentLocations, newLocation])
            indices.set(traveler.id, currentIndex + 1)
            hasUpdate = true
          }
        })

        return hasUpdate ? updated : prev
      })
    }, realtimeInterval)

    return () => clearInterval(intervalId)
  }, [enableRealtime, isLoading, realtimeInterval])

  return { travelerLocations, isLoading, error: null }
}
