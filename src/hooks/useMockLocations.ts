import { useState, useEffect } from 'react'
import { Location } from '@/lib/supabase'
import { mockLocations, simulateRealtimeUpdate } from '@/data/mockLocations'

interface UseMockLocationsOptions {
  enableRealtime?: boolean
  realtimeInterval?: number
}

export function useMockLocations({
  enableRealtime = false,
  realtimeInterval = 3000
}: UseMockLocationsOptions = {}) {
  const [locations, setLocations] = useState<Location[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 초기 로딩 시뮬레이션
    const loadTimeout = setTimeout(() => {
      if (enableRealtime) {
        // 실시간 모드: 빈 배열로 시작
        setLocations([])
      } else {
        // 정적 모드: 모든 데이터 로드
        setLocations(mockLocations)
      }
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(loadTimeout)
  }, [enableRealtime])

  useEffect(() => {
    if (!enableRealtime || isLoading) return

    // 실시간 업데이트 시뮬레이션
    const cleanup = simulateRealtimeUpdate((newLocation) => {
      setLocations((prev) => {
        // 중복 방지: 같은 ID가 있으면 교체, 없으면 추가
        const existingIndex = prev.findIndex(loc => loc.id === newLocation.id)
        if (existingIndex >= 0) {
          const updated = [...prev]
          updated[existingIndex] = newLocation
          return updated
        }
        return [...prev, newLocation]
      })
    }, realtimeInterval)

    return cleanup
  }, [enableRealtime, isLoading, realtimeInterval])

  return { locations, isLoading, error: null }
}
