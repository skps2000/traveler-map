import { Location } from '@/lib/supabase'

export interface Traveler {
  id: string
  name: string
  color: string
  avatar: string
  description: string
}

export const travelers: Traveler[] = [
  { id: 'traveler-1', name: '김한량-동남아', color: '#00d4ff', avatar: '🌴', description: '동남아시아 배낭여행' },
  { id: 'traveler-2', name: '김한량-아프리카', color: '#ff6b35', avatar: '🦁', description: '아프리카 종단 여행' },
  { id: 'traveler-3', name: '김한량-실크로드', color: '#4ecdc4', avatar: '🚴‍♂️', description: '실크로드 자전거 횡단' },
]

// 김한량-동남아 (태국 → 미얀마 → 필리핀)
const traveler1Locations: Location[] = [
  {
    id: '1-1',
    trip_id: 'traveler-1',
    geom: { type: 'Point', coordinates: [98.4397, 19.3582] },
    altitude: 700,
    speed: 0,
    created_at: '2023-09-10T14:00:00Z',
    location_name: '1. 태국 빠이 (100도씨 온천 계란 삶기)'
  },
  {
    id: '1-2',
    trip_id: 'traveler-1',
    geom: { type: 'Point', coordinates: [96.1735, 16.8409] },
    altitude: 15,
    speed: 0,
    created_at: '2023-09-20T10:00:00Z',
    location_name: '2. 미얀마 양곤 (내전 중 입국)'
  },
  {
    id: '1-3',
    trip_id: 'traveler-1',
    geom: { type: 'Point', coordinates: [94.8585, 21.1717] },
    altitude: 60,
    speed: 0,
    created_at: '2023-09-25T16:00:00Z',
    location_name: '3. 미얀마 바간 (고대 불교 유적지)'
  },
  {
    id: '1-4',
    trip_id: 'traveler-1',
    geom: { type: 'Point', coordinates: [96.9039, 20.5739] },
    altitude: 880,
    speed: 5,
    created_at: '2023-09-28T11:00:00Z',
    location_name: '4. 미얀마 인레 호수 (수상 가옥)'
  },
  {
    id: '1-5',
    trip_id: 'traveler-1',
    geom: { type: 'Point', coordinates: [120.9842, 14.5995] },
    altitude: 10,
    speed: 0,
    created_at: '2023-10-15T20:00:00Z',
    location_name: '5. 필리핀 마닐라 (세계여행 1부 마무리 및 귀국)'
  },
]

// 김한량-아프리카 (남아공 → 나미비아 → 짐바브웨 → 잠비아 → 말라위 → 탄자니아 → 우간다 → 르완다 → 부룬디 → 콩고 → 가봉 → 카메룬 → 앙골라)
const traveler2Locations: Location[] = [
  {
    id: '2-1',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [28.2411, -26.1367] },
    altitude: 1694,
    speed: 4,
    created_at: '2024-01-10T09:00:00Z',
    location_name: '1. 남아공 요하네스버그 (공항에서 시내까지 30km 도보)'
  },
  {
    id: '2-2',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [27.9000, -26.2333] },
    altitude: 1600,
    speed: 0,
    created_at: '2024-01-12T13:00:00Z',
    location_name: '2. 남아공 소웨토 (흑인 밀집 지역)'
  },
  {
    id: '2-3',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [17.0658, -22.5609] },
    altitude: 1655,
    speed: 0,
    created_at: '2024-01-20T10:00:00Z',
    location_name: '3. 나미비아 윈트후크 (히치하이킹으로 도착)'
  },
  {
    id: '2-4',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [13.9782, -21.7561] },
    altitude: 10,
    speed: 15,
    created_at: '2024-01-25T15:00:00Z',
    location_name: '4. 나미비아 케이프 크로스 (사막 자전거 여행 & 물개 서식지)'
  },
  {
    id: '2-5',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [25.8572, -17.9244] },
    altitude: 915,
    speed: 0,
    created_at: '2024-02-05T12:00:00Z',
    location_name: '5. 짐바브웨 빅토리아 폭포 (100조 달러 구매)'
  },
  {
    id: '2-6',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [25.8623, -17.9172] },
    altitude: 900,
    speed: 0,
    created_at: '2024-02-07T10:00:00Z',
    location_name: '6. 잠비아 빅토리아 폭포 다리 (111m 번지점프)'
  },
  {
    id: '2-7',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [34.8475, -14.0728] },
    altitude: 474,
    speed: 10,
    created_at: '2024-02-15T08:00:00Z',
    location_name: '7. 말라위 호수 (화물선 위에서 3일간 생존)'
  },
  {
    id: '2-8',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [39.2026, -6.1659] },
    altitude: 0,
    speed: 0,
    created_at: '2024-03-01T18:00:00Z',
    location_name: '8. 탄자니아 잔지바르 (야시장 및 감옥섬)'
  },
  {
    id: '2-9',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [32.4497, 0.0000] },
    altitude: 1100,
    speed: 0,
    created_at: '2024-03-10T11:00:00Z',
    location_name: '9. 우간다 적도 (계란 세우기 실험)'
  },
  {
    id: '2-10',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [33.2043, 0.4244] },
    altitude: 1130,
    speed: 0,
    created_at: '2024-03-12T17:00:00Z',
    location_name: '10. 우간다 진자 (나일강 발원지 캠핑)'
  },
  {
    id: '2-11',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [30.0619, -1.9441] },
    altitude: 1567,
    speed: 0,
    created_at: '2024-03-20T19:00:00Z',
    location_name: '11. 르완다 키갈리 (모모코와 재회)'
  },
  {
    id: '2-12',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [29.3644, -3.3822] },
    altitude: 774,
    speed: 0,
    created_at: '2024-04-01T12:00:00Z',
    location_name: '12. 부룬디 부줌부라 (탕가니카 호수)'
  },
  {
    id: '2-13',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [15.2663, -4.4419] },
    altitude: 280,
    speed: 0,
    created_at: '2024-04-15T14:00:00Z',
    location_name: '13. 콩고민주공화국 킨샤사 (최악의 야간 버스 이동)'
  },
  {
    id: '2-14',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [15.2429, -4.2634] },
    altitude: 320,
    speed: 0,
    created_at: '2024-04-20T10:00:00Z',
    location_name: '14. 콩고공화국 브라자빌 (콩고강 정글 탐험)'
  },
  {
    id: '2-15',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [9.4673, 0.4162] },
    altitude: 10,
    speed: 0,
    created_at: '2024-05-05T13:00:00Z',
    location_name: '15. 가봉 리브르빌 (대머리 형님과 만남)'
  },
  {
    id: '2-16',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [11.5021, 3.8480] },
    altitude: 726,
    speed: 0,
    created_at: '2024-05-15T15:00:00Z',
    location_name: '16. 카메룬 야운데 (현지 시장)'
  },
  {
    id: '2-17',
    trip_id: 'traveler-2',
    geom: { type: 'Point', coordinates: [13.2894, -8.8390] },
    altitude: 6,
    speed: 0,
    created_at: '2024-06-01T16:00:00Z',
    location_name: '17. 앙골라 루안다 (세계에서 가장 물가 비싼 도시)'
  },
]

// 김한량-실크로드 (중국 → 카자흐스탄 → 키르기스스탄 → 타지키스탄 → 우즈베키스탄 → 러시아)
const traveler3Locations: Location[] = [
  {
    id: '3-1',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [108.9398, 34.3416] },
    altitude: 400,
    speed: 0,
    created_at: '2025-02-10T09:00:00Z',
    location_name: '1. 중국 시안 (실크로드 자전거 출발지)'
  },
  {
    id: '3-2',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [106.6828, 35.5426] },
    altitude: 1350,
    speed: 0,
    created_at: '2025-02-20T18:00:00Z',
    location_name: '2. 중국 핑량 (다리 밑 노숙)'
  },
  {
    id: '3-3',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [100.4498, 38.9257] },
    altitude: 1480,
    speed: 0,
    created_at: '2025-03-10T14:00:00Z',
    location_name: '3. 중국 장예 칠채산 (단샤 지질공원)'
  },
  {
    id: '3-4',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [98.2483, 39.8166] },
    altitude: 1600,
    speed: 0,
    created_at: '2025-03-15T15:00:00Z',
    location_name: '4. 중국 자위관 (만리장성 서쪽 끝)'
  },
  {
    id: '3-5',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [94.6620, 40.1421] },
    altitude: 1130,
    speed: 0,
    created_at: '2025-03-25T11:00:00Z',
    location_name: '5. 중국 둔황 (명사산과 월아천)'
  },
  {
    id: '3-6',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [93.5153, 42.8185] },
    altitude: 759,
    speed: 15,
    created_at: '2025-04-05T20:00:00Z',
    location_name: '6. 중국 하미 (400km 무인지대 횡단 후 도착)'
  },
  {
    id: '3-7',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [89.1895, 42.9513] },
    altitude: 0,
    speed: 0,
    created_at: '2025-04-15T13:00:00Z',
    location_name: '7. 중국 투루판 화염산 (서유기 촬영지)'
  },
  {
    id: '3-8',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [87.6168, 43.8256] },
    altitude: 800,
    speed: 0,
    created_at: '2025-04-20T10:00:00Z',
    location_name: '8. 중국 우루무치 (강풍 속 고립)'
  },
  {
    id: '3-9',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [81.1614, 44.6133] },
    altitude: 2073,
    speed: 0,
    created_at: '2025-05-05T12:00:00Z',
    location_name: '9. 중국 사이리무 호수 (푸른 보석)'
  },
  {
    id: '3-10',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [79.9972, 44.1628] },
    altitude: 600,
    speed: 0,
    created_at: '2025-05-15T14:00:00Z',
    location_name: '10. 카자흐스탄 자르켄트 (중국 국경 통과)'
  },
  {
    id: '3-11',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [76.8829, 43.2383] },
    altitude: 800,
    speed: 0,
    created_at: '2025-06-01T15:00:00Z',
    location_name: '11. 카자흐스탄 알마티 (한국인 친구 만들기)'
  },
  {
    id: '3-12',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [74.5698, 42.8746] },
    altitude: 800,
    speed: 0,
    created_at: '2025-06-15T14:00:00Z',
    location_name: '12. 키르기스스탄 비슈케크 (친구 공개모집)'
  },
  {
    id: '3-13',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [71.5557, 37.4912] },
    altitude: 2100,
    speed: 0,
    created_at: '2025-08-10T10:00:00Z',
    location_name: '13. 타지키스탄 호로그 (파미르 고원 입구)'
  },
  {
    id: '3-14',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [71.6133, 36.7247] },
    altitude: 2600,
    speed: 0,
    created_at: '2025-08-15T12:00:00Z',
    location_name: '14. 타지키스탄 이슈카심 (아프가니스탄 접경)'
  },
  {
    id: '3-15',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [69.2401, 41.2995] },
    altitude: 450,
    speed: 0,
    created_at: '2025-10-01T13:00:00Z',
    location_name: '15. 우즈베키스탄 타슈켄트 (매직 시티 파크 & 펩시)'
  },
  {
    id: '3-16',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [64.4556, 39.7681] },
    altitude: 225,
    speed: 0,
    created_at: '2025-10-20T17:00:00Z',
    location_name: '16. 우즈베키스탄 부하라 (사막 진입 전)'
  },
  {
    id: '3-17',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [60.3658, 41.3775] },
    altitude: 98,
    speed: 0,
    created_at: '2025-11-01T15:00:00Z',
    location_name: '17. 우즈베키스탄 히바 (이찬 칼라 성벽)'
  },
  {
    id: '3-18',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [59.6166, 42.4619] },
    altitude: 76,
    speed: 0,
    created_at: '2025-11-10T12:00:00Z',
    location_name: '18. 우즈베키스탄 누쿠스 (카라칼파크스탄 수도, 낚시)'
  },
  {
    id: '3-19',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [59.0278, 43.7684] },
    altitude: 50,
    speed: 0,
    created_at: '2025-11-15T14:00:00Z',
    location_name: '19. 우즈베키스탄 무이나크 (아랄해 선박 무덤)'
  },
  {
    id: '3-20',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [51.9214, 47.1150] },
    altitude: -20,
    speed: 0,
    created_at: '2025-12-24T18:00:00Z',
    location_name: '20. 카자흐스탄 아티라우 (겨울 사막 횡단 후 휴식)'
  },
  {
    id: '3-21',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [48.6217, 46.4233] },
    altitude: -25,
    speed: 0,
    created_at: '2026-01-24T08:00:00Z',
    location_name: '21. 러시아 국경 Karaozek (입국, GPS 먹통)'
  },
  {
    id: '3-22',
    trip_id: 'traveler-3',
    geom: { type: 'Point', coordinates: [48.0326, 46.3497] },
    altitude: -28,
    speed: 0,
    created_at: '2026-01-25T17:00:00Z',
    location_name: '22. 러시아 아스트라한 (쌍둥이 나무 캠핑 후 도착)'
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
