import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Location {
  id: string
  trip_id: string
  geom: {
    type: 'Point'
    coordinates: [number, number] // [lng, lat]
  }
  altitude?: number
  speed?: number
  created_at: string
  location_name?: string
}

export interface Marker {
  id: string
  geom: {
    type: 'Point'
    coordinates: [number, number]
  }
  type: 'video' | 'photo' | 'memo'
  url?: string
  title: string
}
