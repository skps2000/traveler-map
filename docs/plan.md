# 프로젝트 명세서: 실시간 여행 트래킹 맵 (Zoom Earth 스타일)

## 1. 프로젝트 개요 (Project Overview)
- **목표**: 여행 유튜버의 현재 위치, 이동 경로, 현지 날씨를 실시간으로 시각화하는 인터랙티브 지도 웹 앱 개발.
- **핵심 UI 컨셉**: 'Zoom Earth'와 같은 미려한 위성 지도 기반 UI, 다크 모드, 실시간 기상 레이어 겹치기.
- **주요 사용자**: 실시간 여행기를 시청하는 유튜브 구독자 및 팬덤.

## 2. 기술 스택 (Tech Stack)
- **Frontend**: Next.js (App Router), Tailwind CSS
- **Map Engine**: Mapbox GL JS (Vector/Satellite Map)
- **Backend/Database**: Supabase (PostgreSQL + PostGIS 연동)
- **Weather API**: RainViewer API (기상 레이더), OpenWeatherMap API (수치 데이터)
- **Deployment**: Vercel

## 3. 핵심 기능 요구사항 (Key Features)

### 3.1 실시간 위치 및 경로 (Real-time Tracking)
- **Live Path**: Supabase의 실시간 DB 구독(Realtime)을 통해 유튜버의 위치가 업데이트될 때마다 지도 위에 실시간으로 선(Polyline)을 그림.
- **Current Marker**: 유튜버의 현재 위치를 커스텀 마커(아이콘)로 표시.
- **History Playback**: 타임라인 슬라이더를 통해 과거 날짜별 이동 경로를 되돌아보는 기능.

### 3.2 기상 데이터 레이어 (Weather Overlays)
- **Radar Layer**: RainViewer API를 연동하여 실시간 비구름(Radar) 애니메이션 레이어를 지도 위에 오버레이.
- **Weather Widget**: 현재 위치의 기온, 풍속, 현지 시간을 화면 상단 혹은 사이드바에 표시.
- **Layer Toggle**: 사용자 선택에 따라 강수량, 구름, 풍속 레이어를 켜고 끌 수 있는 기능.

### 3.3 콘텐츠 통합 (Content Integration)
- **Video Points**: 지도 위 특정 경로 노드에 유튜브 영상(또는 Shorts)을 연동. 마커 클릭 시 유튜브 Iframe 팝업 재생.
- **Travel Stats**: 총 이동 거리, 현재 도시 명칭, 여행 일차(Day X) 등의 통계 대시보드.

## 4. 데이터베이스 구조 (Database Schema)

### `locations` 테이블 (실시간 좌표)
- `id`: UUID (Primary Key)
- `trip_id`: UUID (Foreign Key)
- `geom`: GEOMETRY(Point, 4326) - PostGIS 좌표 데이터
- `altitude`: 정수 (고도)
- `speed`: 실수 (이동 속도)
- `created_at`: TIMESTAMP (좌표 수집 시간)

### `markers` 테이블 (콘텐츠 포인트)
- `id`: UUID
- `geom`: GEOMETRY(Point, 4326)
- `type`: VARCHAR (video, photo, memo)
- `url`: VARCHAR (YouTube 링크 등)
- `title`: VARCHAR

## 5. UI/UX 요구사항
- **Layout**: 지도 전체 화면(Full Screen) 구성을 기본으로 함.
- **Theme**: 다크 테마 기반, Glassmorphism(반투명 블러) 효과가 적용된 컨트롤 패널.
- **Responsiveness**: 모바일 기기에서 경로 확인 및 기상 레이어 토글이 원활해야 함.

---

## 🚀 개발 AI를 위한 첫 번째 프롬프트 (Initial Prompt)

"위에 제공된 명세서를 바탕으로 Next.js 프로젝트를 시작하려고 해. 
1. `Mapbox GL JS`를 사용하여 위성 지도를 화면 전체에 렌더링하고, 
2. `Supabase`에서 `locations` 데이터를 실시간으로 가져와 지도에 Polyline을 그리는 핵심 컴포넌트를 작성해줘. 
3. UI는 Tailwind CSS를 사용하고, Zoom Earth처럼 세련된 다크 모드 스타일로 시작해줘."