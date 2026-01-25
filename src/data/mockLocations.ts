import { Location } from '@/lib/supabase'

// 서울에서 부산까지 실제 여행 경로를 시뮬레이션하는 mock 데이터
export const mockLocations: Location[] = [
  {
    id: '1',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [126.9780, 37.5665] }, // 서울
    altitude: 50,
    speed: 0,
    created_at: '2026-01-20T09:00:00Z'
  },
  {
    id: '2',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [127.0845, 37.5219] }, // 강남
    altitude: 45,
    speed: 35,
    created_at: '2026-01-20T09:30:00Z'
  },
  {
    id: '3',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [127.1058, 37.3595] }, // 성남
    altitude: 60,
    speed: 80,
    created_at: '2026-01-20T10:00:00Z'
  },
  {
    id: '4',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [127.3845, 36.3504] }, // 대전
    altitude: 80,
    speed: 100,
    created_at: '2026-01-20T12:00:00Z'
  },
  {
    id: '5',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [127.4903, 36.3211] }, // 대전 외곽
    altitude: 75,
    speed: 90,
    created_at: '2026-01-20T12:30:00Z'
  },
  {
    id: '6',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [127.8900, 35.8562] }, // 김천
    altitude: 120,
    speed: 95,
    created_at: '2026-01-20T14:00:00Z'
  },
  {
    id: '7',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [128.2650, 35.8714] }, // 구미
    altitude: 90,
    speed: 85,
    created_at: '2026-01-20T15:00:00Z'
  },
  {
    id: '8',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [128.6014, 35.8714] }, // 대구
    altitude: 70,
    speed: 60,
    created_at: '2026-01-20T16:00:00Z'
  },
  {
    id: '9',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [128.7319, 35.6581] }, // 경산
    altitude: 85,
    speed: 75,
    created_at: '2026-01-20T17:00:00Z'
  },
  {
    id: '10',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [129.0756, 35.5384] }, // 경주
    altitude: 95,
    speed: 70,
    created_at: '2026-01-20T18:00:00Z'
  },
  {
    id: '11',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [129.3114, 35.5372] }, // 울산
    altitude: 40,
    speed: 65,
    created_at: '2026-01-20T19:00:00Z'
  },
  {
    id: '12',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [129.1756, 35.2456] }, // 부산 외곽
    altitude: 50,
    speed: 55,
    created_at: '2026-01-20T20:00:00Z'
  },
  {
    id: '13',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [129.0756, 35.1796] }, // 부산
    altitude: 30,
    speed: 40,
    created_at: '2026-01-20T20:30:00Z'
  },
  {
    id: '14',
    trip_id: 'default-trip',
    geom: { type: 'Point', coordinates: [129.0403, 35.1028] }, // 해운대
    altitude: 10,
    speed: 0,
    created_at: '2026-01-20T21:00:00Z'
  }
]

// 실시간 업데이트를 시뮬레이션하는 함수
export function simulateRealtimeUpdate(
  onNewLocation: (location: Location) => void,
  interval: number = 3000
): () => void {
  let index = 0
  
  const intervalId = setInterval(() => {
    if (index < mockLocations.length) {
      onNewLocation(mockLocations[index])
      index++
    } else {
      // 모든 위치를 보여준 후 랜덤하게 마지막 위치 근처를 업데이트
      const lastLocation = mockLocations[mockLocations.length - 1]
      const randomOffset = () => (Math.random() - 0.5) * 0.01
      
      const newLocation: Location = {
        ...lastLocation,
        id: `${Date.now()}`,
        geom: {
          type: 'Point',
          coordinates: [
            lastLocation.geom.coordinates[0] + randomOffset(),
            lastLocation.geom.coordinates[1] + randomOffset()
          ]
        },
        created_at: new Date().toISOString()
      }
      
      onNewLocation(newLocation)
    }
  }, interval)
  
  return () => clearInterval(intervalId)
}

// 총 이동 거리 계산 (Haversine formula)
export function calculateTotalDistance(locations: Location[]): number {
  if (locations.length < 2) return 0
  
  let totalDistance = 0
  
  for (let i = 1; i < locations.length; i++) {
    const [lon1, lat1] = locations[i - 1].geom.coordinates
    const [lon2, lat2] = locations[i].geom.coordinates
    
    totalDistance += getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)
  }
  
  return totalDistance
}

function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371 // 지구의 반지름 (km)
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c
  return d
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180)
}

// 현재 위치 이름 가져오기
export function getLocationName(index: number): string {
  const locations = [
    '서울, 대한민국',
    '강남구, 서울',
    '성남시, 경기도',
    '대전광역시',
    '대전 외곽',
    '김천시, 경북',
    '구미시, 경북',
    '대구광역시',
    '경산시, 경북',
    '경주시, 경북',
    '울산광역시',
    '부산 외곽',
    '부산광역시',
    '해운대구, 부산'
  ]
  
  return locations[Math.min(index, locations.length - 1)] || '여행 중...'
}
