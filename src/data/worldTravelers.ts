import { Location } from '@/lib/supabase'

export interface Traveler {
  id: string
  name: string
  color: string
  avatar: string
  description: string
}

export const travelers: Traveler[] = [
  { id: 'traveler-1', name: '김모험', color: '#00ffff', avatar: '🧑‍✈️', description: '아시아 종단 여행자' },
  { id: 'traveler-2', name: '박탐험', color: '#ff00ff', avatar: '👨‍🎤', description: '유럽 일주 여행자' },
  { id: 'traveler-3', name: '김한량', color: '#ff6b6b', avatar: '🚴‍♂️', description: '카자흐스탄-러시아 자전거 여행' },
]

// 김모험 - 아시아 종단 (한국 → 중국 → 인도 → 터키)
const traveler1Locations: Location[] = [
  { id: '1-1', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [126.9780, 37.5665] }, altitude: 50, speed: 0, created_at: '2026-01-20T09:00:00Z', location_name: '서울' },
  { id: '1-2', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [127.0016, 37.2636] }, altitude: 45, speed: 85, created_at: '2026-01-20T11:00:00Z', location_name: '수원' },
  { id: '1-3', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [128.6014, 35.8714] }, altitude: 70, speed: 95, created_at: '2026-01-20T14:00:00Z', location_name: '대구' },
  { id: '1-4', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [129.0756, 35.1796] }, altitude: 30, speed: 80, created_at: '2026-01-20T16:00:00Z', location_name: '부산' },
  { id: '1-5', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [116.4074, 39.9042] }, altitude: 100, speed: 450, created_at: '2026-01-21T10:00:00Z', location_name: '베이징' },
  { id: '1-6', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [121.4737, 31.2304] }, altitude: 20, speed: 250, created_at: '2026-01-22T14:00:00Z', location_name: '상하이' },
  { id: '1-7', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [100.5018, 13.7563] }, altitude: 15, speed: 380, created_at: '2026-01-23T18:00:00Z', location_name: '방콕' },
  { id: '1-8', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [77.2090, 28.6139] }, altitude: 250, speed: 420, created_at: '2026-01-24T22:00:00Z', location_name: '뉴델리' },
  { id: '1-9', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [72.8777, 19.0760] }, altitude: 15, speed: 180, created_at: '2026-01-25T12:00:00Z', location_name: '뭄바이' },
  { id: '1-10', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [51.4215, 35.6892] }, altitude: 1200, speed: 350, created_at: '2026-01-26T20:00:00Z', location_name: '테헤란' },
  { id: '1-11', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [28.9784, 41.0082] }, altitude: 100, speed: 290, created_at: '2026-01-27T16:00:00Z', location_name: '이스탄불' },
]

// 박탐험 - 유럽 일주 (영국 → 프랑스 → 이탈리아 → 독일)
const traveler2Locations: Location[] = [
  { id: '2-1', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [-0.1276, 51.5074] }, altitude: 30, speed: 0, created_at: '2026-01-20T08:00:00Z', location_name: '런던' },
  { id: '2-2', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [-1.2577, 51.7520] }, altitude: 80, speed: 120, created_at: '2026-01-20T10:00:00Z', location_name: '옥스퍼드' },
  { id: '2-3', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [2.3522, 48.8566] }, altitude: 50, speed: 300, created_at: '2026-01-20T15:00:00Z', location_name: '파리' },
  { id: '2-4', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [4.8357, 45.7640] }, altitude: 200, speed: 250, created_at: '2026-01-21T09:00:00Z', location_name: '리옹' },
  { id: '2-5', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [7.2619, 43.7102] }, altitude: 10, speed: 180, created_at: '2026-01-21T14:00:00Z', location_name: '니스' },
  { id: '2-6', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [9.1900, 45.4642] }, altitude: 120, speed: 220, created_at: '2026-01-22T10:00:00Z', location_name: '밀라노' },
  { id: '2-7', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [11.2558, 43.7696] }, altitude: 90, speed: 150, created_at: '2026-01-22T16:00:00Z', location_name: '피렌체' },
  { id: '2-8', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [12.4964, 41.9028] }, altitude: 50, speed: 180, created_at: '2026-01-23T08:00:00Z', location_name: '로마' },
  { id: '2-9', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [11.3426, 46.4983] }, altitude: 600, speed: 200, created_at: '2026-01-24T12:00:00Z', location_name: '볼차노' },
  { id: '2-10', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [11.5820, 48.1351] }, altitude: 520, speed: 240, created_at: '2026-01-25T10:00:00Z', location_name: '뮌헨' },
  { id: '2-11', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [13.4050, 52.5200] }, altitude: 40, speed: 210, created_at: '2026-01-26T14:00:00Z', location_name: '베를린' },
]

// 김한량 - 중국 시안 출발 → 중앙아시아 → 러시아 아스트라한 자전거 여행
const traveler3Locations: Location[] = [
  // 1. 중국 구간 (출발 ~ 서쪽 횡단)
  {
    id: '3-1',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [108.7516, 34.4471] },
    altitude: 479,
    speed: 0,
    created_at: '2025-02-10T09:00:00Z',
    location_name: '중국 시안 셴양 국제공항 (출발지)'
  },
  {
    id: '3-2',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [106.6828, 35.5426] },
    altitude: 1350,
    speed: 15,
    created_at: '2025-02-20T18:30:00Z',
    location_name: '중국 간쑤성 핑량시 (다리 밑 노숙)'
  },
  {
    id: '3-3',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [100.4533, 38.9322] },
    altitude: 1480,
    speed: 0,
    created_at: '2025-03-15T14:00:00Z',
    location_name: '중국 장예시 칠채산 (장예 단샤 지질공원)'
  },
  {
    id: '3-4',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [98.2136, 39.8006] },
    altitude: 1600,
    speed: 0,
    created_at: '2025-03-22T16:45:00Z',
    location_name: '중국 자위관 (만리장성 서쪽 끝)'
  },
  {
    id: '3-5',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [94.6723, 40.0863] },
    altitude: 1150,
    speed: 0,
    created_at: '2025-03-28T11:00:00Z',
    location_name: '중국 둔황 명사산 & 월아천 (오아시스)'
  },
  {
    id: '3-6',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [93.5153, 42.8185] },
    altitude: 759,
    speed: 20,
    created_at: '2025-04-05T20:00:00Z',
    location_name: '중국 하미 (400km 무인지대 횡단 후 도착)'
  },
  {
    id: '3-7',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [89.5247, 42.9463] },
    altitude: 30,
    speed: 0,
    created_at: '2025-04-15T13:30:00Z',
    location_name: '중국 투루판 화염산 (서유기 촬영지)'
  },
  {
    id: '3-8',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [81.1614, 44.6133] },
    altitude: 2073,
    speed: 0,
    created_at: '2025-05-10T10:00:00Z',
    location_name: '중국 신장 사이리무 호수 (Sayram Lake)'
  },

  // 2. 중앙아시아 구간 (카자흐 -> 키르기스 -> 타지크 -> 우즈벡)
  {
    id: '3-9',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [79.9972, 44.1628] },
    altitude: 600,
    speed: 0,
    created_at: '2025-05-20T12:00:00Z',
    location_name: '카자흐스탄 자르켄트 (국경 통과 후 첫 도시)'
  },
  {
    id: '3-10',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [76.8829, 43.2383] },
    altitude: 800,
    speed: 0,
    created_at: '2025-06-01T15:00:00Z',
    location_name: '카자흐스탄 알마티 (콕토베 케이블카)'
  },
  {
    id: '3-11',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [74.5698, 42.8746] },
    altitude: 800,
    speed: 0,
    created_at: '2025-06-15T14:00:00Z',
    location_name: '키르기스스탄 비슈케크 (친구 공개모집 광장)'
  },
  {
    id: '3-12',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [71.5557, 37.4912] },
    altitude: 2100,
    speed: 5,
    created_at: '2025-09-10T17:00:00Z',
    location_name: '타지키스탄 호로그 (파미르 고원 입구)'
  },
  {
    id: '3-13',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [71.6133, 36.7247] },
    altitude: 2600,
    speed: 0,
    created_at: '2025-09-15T19:00:00Z',
    location_name: '타지키스탄 이슈카심 (아프가니스탄 접경 마을)'
  },
  {
    id: '3-14',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [72.2536, 36.9639] },
    altitude: 3200,
    speed: 0,
    created_at: '2025-09-17T08:00:00Z',
    location_name: '타지키스탄 얌춘 요새 & 비비 파티마 온천'
  },
  {
    id: '3-15',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [69.2401, 41.2995] },
    altitude: 450,
    speed: 0,
    created_at: '2025-10-05T13:00:00Z',
    location_name: '우즈베키스탄 타슈켄트 (매직 시티 파크)'
  },
  {
    id: '3-16',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [66.9750, 39.6270] },
    altitude: 702,
    speed: 0,
    created_at: '2025-10-20T18:00:00Z',
    location_name: '우즈베키스탄 사마르칸트'
  },
  {
    id: '3-17',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [64.4556, 39.7681] },
    altitude: 225,
    speed: 0,
    created_at: '2025-11-01T12:00:00Z',
    location_name: '우즈베키스탄 부하라 (사막 진입 전)'
  },
  {
    id: '3-18',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [60.3658, 41.3775] },
    altitude: 98,
    speed: 0,
    created_at: '2025-11-10T15:30:00Z',
    location_name: '우즈베키스탄 히바 (이찬 칼라 성벽)'
  },
  {
    id: '3-19',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [59.6166, 42.4619] },
    altitude: 76,
    speed: 0,
    created_at: '2025-11-20T10:00:00Z',
    location_name: '우즈베키스탄 누쿠스 (아무다리아 강 낚시)'
  },
  {
    id: '3-20',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [59.0278, 43.7684] },
    altitude: 50,
    speed: 0,
    created_at: '2025-11-25T14:00:00Z',
    location_name: '우즈베키스탄 무이나크 (아랄해 선박 무덤)'
  },

  // 3. 카자흐스탄 서부 ~ 러시아 입국 (최근 겨울 여정)
  {
    id: '3-21',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [55.1979, 45.3235] },
    altitude: 10,
    speed: 60,
    created_at: '2025-12-15T09:00:00Z',
    location_name: '카자흐스탄 베이네우 (기차 이동 후 도착)'
  },
  {
    id: '3-22',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [51.9214, 47.1150] },
    altitude: -20,
    speed: 0,
    created_at: '2025-12-24T18:00:00Z',
    location_name: '카자흐스탄 아티라우 (크리스마스 휴식 및 보급)'
  },
  {
    id: '3-23',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [48.6217, 46.4233] },
    altitude: -25,
    speed: 0,
    created_at: '2026-01-24T08:00:00Z',
    location_name: '카자흐스탄-러시아 국경 Karaozek (입국 심사)'
  },
  {
    id: '3-24',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [48.0520, 46.4850] },
    altitude: -22,
    speed: 0,
    created_at: '2026-01-24T20:00:00Z',
    location_name: '러시아 부잔 강변 숲 (쌍둥이 나무 캠핑장)'
  },
  {
    id: '3-25',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [48.0326, 46.3497] },
    altitude: -28,
    speed: 0,
    created_at: '2026-01-25T17:00:00Z',
    location_name: '러시아 아스트라한 (쿠툼 강 인근 호스텔 도착)'
  }
];

export const allTravelerLocations = new Map<string, Location[]>([
  ['traveler-1', traveler1Locations],
  ['traveler-2', traveler2Locations],
  ['traveler-3', traveler3Locations],
])

// Haversine formula로 두 지점 간 거리 계산 (km)
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // 지구 반지름 (km)
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c
  return d
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180)
}
