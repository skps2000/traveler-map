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
  { id: 'traveler-3', name: '이세계', color: '#00ff00', avatar: '👩‍🚀', description: '아메리카 대륙 횡단' },
  { id: 'traveler-4', name: '최지구', color: '#ffff00', avatar: '🧑‍🦰', description: '오세아니아 탐험가' },
  { id: 'traveler-5', name: '정여행', color: '#ff6b6b', avatar: '🧑‍🎨', description: '북유럽 순례자' },
  { id: 'traveler-6', name: '강바람', color: '#4ecdc4', avatar: '👨‍🔬', description: '남미 탐험가' },
  { id: 'traveler-7', name: '윤하늘', color: '#95e1d3', avatar: '👩‍💼', description: '아프리카 종단' },
  { id: 'traveler-8', name: '송구름', color: '#f38181', avatar: '🧑‍🌾', description: '중동 순회' },
  { id: 'traveler-9', name: '한별빛', color: '#aa96da', avatar: '👨‍🍳', description: '동남아 일주' },
  { id: 'traveler-10', name: '조달빛', color: '#fcbad3', avatar: '👩‍🏫', description: '북미 횡단' },
  { id: 'traveler-11', name: '임바다', color: '#a8d8ea', avatar: '🧑‍⚕️', description: '중앙아시아' },
  { id: 'traveler-12', name: '오산들', color: '#ffcccc', avatar: '👨‍💻', description: '발칸 반도' },
  { id: 'traveler-13', name: '신푸른', color: '#c1e1c1', avatar: '👩‍🔧', description: '카리브해' },
  { id: 'traveler-14', name: '문노을', color: '#ffd5cd', avatar: '🧑‍🚒', description: '스칸디나비아' },
  { id: 'traveler-15', name: '유은하', color: '#bedcfa', avatar: '👨‍✈️', description: '동유럽 탐험' },
  { id: 'traveler-16', name: '배초록', color: '#b4f8c8', avatar: '👩‍🎓', description: '서아프리카' },
  { id: 'traveler-17', name: '서하얀', color: '#fbe7c6', avatar: '🧑‍🎤', description: '인도양 섬나라' },
  { id: 'traveler-18', name: '남파란', color: '#a0e7e5', avatar: '👨‍🎨', description: '남태평양' },
  { id: 'traveler-19', name: '권햇살', color: '#ffaebc', avatar: '👩‍🦰', description: '중남미' },
  { id: 'traveler-20', name: '홍달빛', color: '#b4a7d6', avatar: '🧑‍🦱', description: '북아프리카' },
  { id: 'traveler-21', name: '차은별', color: '#d4a5a5', avatar: '👨‍🦳', description: '동아프리카' },
  { id: 'traveler-22', name: '표구름', color: '#ffcfd2', avatar: '👩‍🦲', description: '중부유럽' },
  { id: 'traveler-23', name: '노초원', color: '#c9f0ff', avatar: '🧑‍🦲', description: '서유럽 일주' },
  { id: 'traveler-24', name: '안푸름', color: '#f1c0e8', avatar: '👨‍🦲', description: '남아시아' },
  { id: 'traveler-25', name: '진하늘', color: '#cfbaf0', avatar: '👩‍🦳', description: '동북아시아' },
  { id: 'traveler-26', name: '황세찬', color: '#a3c4f3', avatar: '🧑', description: '이베리아 반도' },
  { id: 'traveler-27', name: '마은빛', color: '#90dbf4', avatar: '👨', description: '발트 3국' },
  { id: 'traveler-28', name: '채별하', color: '#8eecf5', avatar: '👩', description: '알프스 종주' },
  { id: 'traveler-29', name: '태구름', color: '#98f5e1', avatar: '🧑‍🦱', description: '지중해 연안' },
  { id: 'traveler-30', name: '도햇빛', color: '#b9fbc0', avatar: '👨‍🦰', description: '아드리아해' },
  { id: 'traveler-31', name: '손은하', color: '#fbf8cc', avatar: '👩‍🦱', description: '흑해 주변' },
  { id: 'traveler-32', name: '양바람', color: '#fde4cf', avatar: '🧑‍✈️', description: '코카서스' },
  { id: 'traveler-33', name: '복달님', color: '#ffcfd2', avatar: '👨‍🚀', description: '페르시아' },
  { id: 'traveler-34', name: '곽별빛', color: '#f1c0e8', avatar: '👩‍✈️', description: '실크로드' },
  { id: 'traveler-35', name: '주노을', color: '#cfbaf0', avatar: '🧑‍🎓', description: '몽골 초원' },
  { id: 'traveler-36', name: '석하늘', color: '#a3c4f3', avatar: '👨‍🔧', description: '히말라야' },
  { id: 'traveler-37', name: '반구름', color: '#90dbf4', avatar: '👩‍💼', description: '메콩강' },
  { id: 'traveler-38', name: '예푸른', color: '#8eecf5', avatar: '🧑‍🏫', description: '인도차이나' },
  { id: 'traveler-39', name: '탁은빛', color: '#98f5e1', avatar: '👨‍⚕️', description: '말레이 제도' },
  { id: 'traveler-40', name: '소초록', color: '#b9fbc0', avatar: '👩‍🌾', description: '필리핀 제도' },
  { id: 'traveler-41', name: '지달빛', color: '#fbf8cc', avatar: '🧑‍💻', description: '뉴질랜드' },
  { id: 'traveler-42', name: '추하얀', color: '#fde4cf', avatar: '👨‍🍳', description: '파타고니아' },
  { id: 'traveler-43', name: '변은하', color: '#ffd6a5', avatar: '👩‍🎨', description: '안데스 산맥' },
  { id: 'traveler-44', name: '모별님', color: '#caffbf', avatar: '🧑‍🚒', description: '아마존' },
  { id: 'traveler-45', name: '여구름', color: '#9bf6ff', avatar: '👨‍🎤', description: '캐나다 록키' },
  { id: 'traveler-46', name: '엄하늘', color: '#a0c4ff', avatar: '👩‍🔬', description: '알래스카' },
  { id: 'traveler-47', name: '금바람', color: '#bdb2ff', avatar: '🧑‍🦳', description: '그린란드' },
  { id: 'traveler-48', name: '방별빛', color: '#ffc6ff', avatar: '👨‍🦱', description: '아이슬란드' },
  { id: 'traveler-49', name: '류은빛', color: '#fffffc', avatar: '👩‍🦲', description: '사하라' },
  { id: 'traveler-50', name: '편구름', color: '#fdffb6', avatar: '🧑‍🦰', description: '칼라하리' }
]

// 김모험 - 아시아 종단 (한국 → 중국 → 인도 → 터키)
const traveler1Locations: Location[] = [
  { id: '1-1', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [126.9780, 37.5665] }, altitude: 50, speed: 0, created_at: '2026-01-20T09:00:00Z' }, // 서울
  { id: '1-2', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [127.0016, 37.2636] }, altitude: 45, speed: 85, created_at: '2026-01-20T11:00:00Z' }, // 수원
  { id: '1-3', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [128.6014, 35.8714] }, altitude: 70, speed: 95, created_at: '2026-01-20T14:00:00Z' }, // 대구
  { id: '1-4', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [129.0756, 35.1796] }, altitude: 30, speed: 80, created_at: '2026-01-20T16:00:00Z' }, // 부산
  { id: '1-5', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [116.4074, 39.9042] }, altitude: 100, speed: 450, created_at: '2026-01-21T10:00:00Z' }, // 베이징
  { id: '1-6', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [121.4737, 31.2304] }, altitude: 20, speed: 250, created_at: '2026-01-22T14:00:00Z' }, // 상하이
  { id: '1-7', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [100.5018, 13.7563] }, altitude: 15, speed: 380, created_at: '2026-01-23T18:00:00Z' }, // 방콕
  { id: '1-8', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [77.2090, 28.6139] }, altitude: 250, speed: 420, created_at: '2026-01-24T22:00:00Z' }, // 뉴델리
  { id: '1-9', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [72.8777, 19.0760] }, altitude: 15, speed: 180, created_at: '2026-01-25T12:00:00Z' }, // 뭄바이
  { id: '1-10', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [51.4215, 35.6892] }, altitude: 1200, speed: 350, created_at: '2026-01-26T20:00:00Z' }, // 테헤란
  { id: '1-11', trip_id: 'traveler-1', geom: { type: 'Point', coordinates: [28.9784, 41.0082] }, altitude: 100, speed: 290, created_at: '2026-01-27T16:00:00Z' }, // 이스탄불
]

// 박탐험 - 유럽 일주 (영국 → 프랑스 → 이탈리아 → 독일)
const traveler2Locations: Location[] = [
  { id: '2-1', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [-0.1276, 51.5074] }, altitude: 30, speed: 0, created_at: '2026-01-20T08:00:00Z' }, // 런던
  { id: '2-2', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [-1.2577, 51.7520] }, altitude: 80, speed: 120, created_at: '2026-01-20T10:00:00Z' }, // 옥스퍼드
  { id: '2-3', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [2.3522, 48.8566] }, altitude: 50, speed: 300, created_at: '2026-01-20T15:00:00Z' }, // 파리
  { id: '2-4', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [4.8357, 45.7640] }, altitude: 200, speed: 250, created_at: '2026-01-21T09:00:00Z' }, // 리옹
  { id: '2-5', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [7.2619, 43.7102] }, altitude: 10, speed: 180, created_at: '2026-01-21T14:00:00Z' }, // 니스
  { id: '2-6', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [9.1900, 45.4642] }, altitude: 120, speed: 220, created_at: '2026-01-22T10:00:00Z' }, // 밀라노
  { id: '2-7', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [11.2558, 43.7696] }, altitude: 90, speed: 150, created_at: '2026-01-22T16:00:00Z' }, // 피렌체
  { id: '2-8', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [12.4964, 41.9028] }, altitude: 50, speed: 180, created_at: '2026-01-23T08:00:00Z' }, // 로마
  { id: '2-9', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [11.3426, 46.4983] }, altitude: 600, speed: 200, created_at: '2026-01-24T12:00:00Z' }, // 볼차노
  { id: '2-10', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [11.5820, 48.1351] }, altitude: 520, speed: 240, created_at: '2026-01-25T10:00:00Z' }, // 뮌헨
  { id: '2-11', trip_id: 'traveler-2', geom: { type: 'Point', coordinates: [13.4050, 52.5200] }, altitude: 40, speed: 210, created_at: '2026-01-26T14:00:00Z' }, // 베를린
]

// 이세계 - 아메리카 대륙 (미국 동부 → 서부 → 남미)
const traveler3Locations: Location[] = [
  { id: '3-1', trip_id: 'traveler-3', geom: { type: 'Point', coordinates: [-74.0060, 40.7128] }, altitude: 10, speed: 0, created_at: '2026-01-20T07:00:00Z' }, // 뉴욕
  { id: '3-2', trip_id: 'traveler-3', geom: { type: 'Point', coordinates: [-75.1652, 39.9526] }, altitude: 15, speed: 140, created_at: '2026-01-20T09:30:00Z' }, // 필라델피아
  { id: '3-3', trip_id: 'traveler-3', geom: { type: 'Point', coordinates: [-77.0369, 38.9072] }, altitude: 30, speed: 160, created_at: '2026-01-20T12:00:00Z' }, // 워싱턴 DC
  { id: '3-4', trip_id: 'traveler-3', geom: { type: 'Point', coordinates: [-87.6298, 41.8781] }, altitude: 180, speed: 450, created_at: '2026-01-21T08:00:00Z' }, // 시카고
  { id: '3-5', trip_id: 'traveler-3', geom: { type: 'Point', coordinates: [-104.9903, 39.7392] }, altitude: 1600, speed: 480, created_at: '2026-01-22T11:00:00Z' }, // 덴버
  { id: '3-6', trip_id: 'traveler-3', geom: { type: 'Point', coordinates: [-115.1398, 36.1699] }, altitude: 620, speed: 380, created_at: '2026-01-23T09:00:00Z' }, // 라스베가스
  { id: '3-7', trip_id: 'traveler-3', geom: { type: 'Point', coordinates: [-118.2437, 34.0522] }, altitude: 90, speed: 340, created_at: '2026-01-23T14:00:00Z' }, // 로스앤젤레스
  { id: '3-8', trip_id: 'traveler-3', geom: { type: 'Point', coordinates: [-122.4194, 37.7749] }, altitude: 50, speed: 420, created_at: '2026-01-24T10:00:00Z' }, // 샌프란시스코
  { id: '3-9', trip_id: 'traveler-3', geom: { type: 'Point', coordinates: [-99.1332, 19.4326] }, altitude: 2240, speed: 520, created_at: '2026-01-25T18:00:00Z' }, // 멕시코시티
  { id: '3-10', trip_id: 'traveler-3', geom: { type: 'Point', coordinates: [-58.3816, -34.6037] }, altitude: 25, speed: 550, created_at: '2026-01-27T14:00:00Z' }, // 부에노스아이레스
]

// 최지구 - 오세아니아 (호주 → 뉴질랜드)
const traveler4Locations: Location[] = [
  { id: '4-1', trip_id: 'traveler-4', geom: { type: 'Point', coordinates: [151.2093, -33.8688] }, altitude: 20, speed: 0, created_at: '2026-01-20T06:00:00Z' }, // 시드니
  { id: '4-2', trip_id: 'traveler-4', geom: { type: 'Point', coordinates: [151.7817, -32.9267] }, altitude: 15, speed: 110, created_at: '2026-01-20T09:00:00Z' }, // 뉴캐슬
  { id: '4-3', trip_id: 'traveler-4', geom: { type: 'Point', coordinates: [153.0251, -27.4698] }, altitude: 25, speed: 300, created_at: '2026-01-20T16:00:00Z' }, // 브리즈번
  { id: '4-4', trip_id: 'traveler-4', geom: { type: 'Point', coordinates: [145.7781, -16.9186] }, altitude: 10, speed: 420, created_at: '2026-01-21T12:00:00Z' }, // 케언스
  { id: '4-5', trip_id: 'traveler-4', geom: { type: 'Point', coordinates: [130.8456, -12.4634] }, altitude: 30, speed: 450, created_at: '2026-01-22T10:00:00Z' }, // 다윈
  { id: '4-6', trip_id: 'traveler-4', geom: { type: 'Point', coordinates: [115.8605, -31.9505] }, altitude: 20, speed: 480, created_at: '2026-01-23T14:00:00Z' }, // 퍼스
  { id: '4-7', trip_id: 'traveler-4', geom: { type: 'Point', coordinates: [138.6007, -34.9285] }, altitude: 50, speed: 390, created_at: '2026-01-24T18:00:00Z' }, // 애들레이드
  { id: '4-8', trip_id: 'traveler-4', geom: { type: 'Point', coordinates: [144.9631, -37.8136] }, altitude: 30, speed: 340, created_at: '2026-01-25T08:00:00Z' }, // 멜버른
  { id: '4-9', trip_id: 'traveler-4', geom: { type: 'Point', coordinates: [174.7633, -41.2865] }, altitude: 40, speed: 460, created_at: '2026-01-26T16:00:00Z' }, // 웰링턴
  { id: '4-10', trip_id: 'traveler-4', geom: { type: 'Point', coordinates: [174.7633, -36.8485] }, altitude: 20, speed: 280, created_at: '2026-01-27T10:00:00Z' }, // 오클랜드
]

export const allTravelerLocations = new Map<string, Location[]>([
  ['traveler-1', traveler1Locations],
  ['traveler-2', traveler2Locations],
  ['traveler-3', traveler3Locations],
  ['traveler-4', traveler4Locations],
  ['traveler-5', generateRandomRoute('traveler-5', [13.4050, 52.5200], 8)], // 베를린 시작
  ['traveler-6', generateRandomRoute('traveler-6', [-58.3816, -34.6037], 8)], // 부에노스아이레스
  ['traveler-7', generateRandomRoute('traveler-7', [31.2357, -29.8587], 8)], // 더반
  ['traveler-8', generateRandomRoute('traveler-8', [39.8262, 21.4225], 8)], // 메카
  ['traveler-9', generateRandomRoute('traveler-9', [98.9817, 18.7883], 8)], // 치앙마이
  ['traveler-10', generateRandomRoute('traveler-10', [-122.4194, 37.7749], 8)], // 샌프란시스코
  ['traveler-11', generateRandomRoute('traveler-11', [69.2401, 41.2995], 8)], // 타슈켄트
  ['traveler-12', generateRandomRoute('traveler-12', [20.4489, 44.7866], 8)], // 베오그라드
  ['traveler-13', generateRandomRoute('traveler-13', [-61.5240, 10.6918], 8)], // 포트오브스페인
  ['traveler-14', generateRandomRoute('traveler-14', [10.7522, 59.9139], 8)], // 오슬로
  ['traveler-15', generateRandomRoute('traveler-15', [21.0122, 52.2297], 8)], // 바르샤바
  ['traveler-16', generateRandomRoute('traveler-16', [-1.5616, 6.6885], 8)], // 아크라
  ['traveler-17', generateRandomRoute('traveler-17', [73.5093, 4.1755], 8)], // 몰디브
  ['traveler-18', generateRandomRoute('traveler-18', [178.4417, -18.1416], 8)], // 수바
  ['traveler-19', generateRandomRoute('traveler-19', [-77.0428, -12.0464], 8)], // 리마
  ['traveler-20', generateRandomRoute('traveler-20', [10.1815, 36.8065], 8)], // 튀니스
  ['traveler-21', generateRandomRoute('traveler-21', [36.8219, -1.2921], 8)], // 나이로비
  ['traveler-22', generateRandomRoute('traveler-22', [14.4378, 50.0755], 8)], // 프라하
  ['traveler-23', generateRandomRoute('traveler-23', [-3.7038, 40.4168], 8)], // 마드리드
  ['traveler-24', generateRandomRoute('traveler-24', [80.2707, 13.0827], 8)], // 첸나이
  ['traveler-25', generateRandomRoute('traveler-25', [139.6503, 35.6762], 8)], // 도쿄
  ['traveler-26', generateRandomRoute('traveler-26', [-9.1393, 38.7223], 8)], // 리스본
  ['traveler-27', generateRandomRoute('traveler-27', [24.1052, 56.9496], 8)], // 리가
  ['traveler-28', generateRandomRoute('traveler-28', [8.5417, 47.3769], 8)], // 취리히
  ['traveler-29', generateRandomRoute('traveler-29', [12.4964, 41.9028], 8)], // 로마
  ['traveler-30', generateRandomRoute('traveler-30', [15.9819, 45.8150], 8)], // 자그레브
  ['traveler-31', generateRandomRoute('traveler-31', [28.9784, 41.0082], 8)], // 이스탄불
  ['traveler-32', generateRandomRoute('traveler-32', [44.8337, 41.7151], 8)], // 트빌리시
  ['traveler-33', generateRandomRoute('traveler-33', [51.3890, 35.6892], 8)], // 테헤란
  ['traveler-34', generateRandomRoute('traveler-34', [74.5698, 42.8746], 8)], // 비슈케크
  ['traveler-35', generateRandomRoute('traveler-35', [106.9057, 47.8864], 8)], // 울란바토르
  ['traveler-36', generateRandomRoute('traveler-36', [85.3240, 27.7172], 8)], // 카트만두
  ['traveler-37', generateRandomRoute('traveler-37', [104.9910, 11.5564], 8)], // 프놈펜
  ['traveler-38', generateRandomRoute('traveler-38', [102.6000, 17.9757], 8)], // 비엔티안
  ['traveler-39', generateRandomRoute('traveler-39', [106.8456, -6.2088], 8)], // 자카르타
  ['traveler-40', generateRandomRoute('traveler-40', [120.9842, 14.5995], 8)], // 마닐라
  ['traveler-41', generateRandomRoute('traveler-41', [174.7633, -36.8485], 8)], // 오클랜드
  ['traveler-42', generateRandomRoute('traveler-42', [-70.6693, -33.4489], 8)], // 산티아고
  ['traveler-43', generateRandomRoute('traveler-43', [-77.0428, -12.0464], 8)], // 리마
  ['traveler-44', generateRandomRoute('traveler-44', [-60.0217, -3.1190], 8)], // 마나우스
  ['traveler-45', generateRandomRoute('traveler-45', [-114.0719, 51.0447], 8)], // 캘거리
  ['traveler-46', generateRandomRoute('traveler-46', [-149.9003, 61.2181], 8)], // 앵커리지
  ['traveler-47', generateRandomRoute('traveler-47', [-51.7216, 64.1814], 8)], // 누크
  ['traveler-48', generateRandomRoute('traveler-48', [-21.9426, 64.1466], 8)], // 레이캬비크
  ['traveler-49', generateRandomRoute('traveler-49', [2.1734, 13.5127], 8)], // 니아메
  ['traveler-50', generateRandomRoute('traveler-50', [25.9231, -24.6282], 8)] // 가보로네
])

// 랜덤 경로 생성 함수
function generateRandomRoute(travelerId: string, startCoords: [number, number], numPoints: number): Location[] {
  const locations: Location[] = []
  let [lng, lat] = startCoords
  
  for (let i = 0; i < numPoints; i++) {
    locations.push({
      id: `${travelerId}-${i + 1}`,
      trip_id: travelerId,
      geom: { type: 'Point', coordinates: [lng, lat] },
      altitude: Math.random() * 200,
      speed: Math.random() * 500,
      created_at: new Date(Date.now() + i * 3600000).toISOString()
    })
    
    // 다음 위치로 랜덤 이동 (위도/경도 ±5도 범위)
    lng += (Math.random() - 0.5) * 10
    lat += (Math.random() - 0.5) * 10
    
    // 경도는 -180~180, 위도는 -85~85 범위로 제한
    lng = Math.max(-180, Math.min(180, lng))
    lat = Math.max(-85, Math.min(85, lat))
  }
  
  return locations
}

// 각 여행자별 현재 위치 이름
const locationNames = new Map<string, string[]>([
  ['traveler-1', ['서울', '수원', '대구', '부산', '베이징', '상하이', '방콕', '뉴델리', '뭄바이', '테헤란', '이스탄불']],
  ['traveler-2', ['런던', '옥스퍼드', '파리', '리옹', '니스', '밀라노', '피렌체', '로마', '볼차노', '뮌헨', '베를린']],
  ['traveler-3', ['뉴욕', '필라델피아', '워싱턴DC', '시카고', '덴버', '라스베가스', 'LA', '샌프란시스코', '멕시코시티', '부에노스아이레스']],
  ['traveler-4', ['시드니', '뉴캐슬', '브리즈번', '케언스', '다윈', '퍼스', '애들레이드', '멜버른', '웰링턴', '오클랜드']],
])

export function getTravelerLocationName(travelerId: string, index: number): string {
  const names = locationNames.get(travelerId) || []
  return names[Math.min(index, names.length - 1)] || '여행 중...'
}

// Haversine formula로 거리 계산
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
  const R = 6371
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
