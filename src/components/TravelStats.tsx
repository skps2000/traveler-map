

interface TravelStatsProps {
  currentLocation?: string
  totalDistance?: number
  currentDay?: number
  temperature?: number
  windSpeed?: number
}

export default function TravelStats({
  currentLocation = '위치 정보 없음',
  totalDistance = 0,
  currentDay = 1,
  temperature,
  windSpeed
}: TravelStatsProps) {
  return (
    <div>
      <h2 style={{
        fontSize: '18px',
        fontWeight: 700,
        marginBottom: '16px',
        color: '#ffffff'
      }}>
        여행 정보
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <StatItem label="현재 위치" value={currentLocation} />
        <StatItem label="여행 일차" value={`Day ${currentDay}`} />
        <StatItem label="총 이동 거리" value={`${totalDistance.toFixed(1)} km`} />
        
        {temperature !== undefined && (
          <StatItem label="현재 기온" value={`${temperature}°C`} />
        )}
        
        {windSpeed !== undefined && (
          <StatItem label="풍속" value={`${windSpeed} m/s`} />
        )}
      </div>
    </div>
  )
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '8px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
        {label}
      </span>
      <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>
        {value}
      </span>
    </div>
  )
}
