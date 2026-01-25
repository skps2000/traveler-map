import { useState } from 'react'
import { Traveler } from '@/data/worldTravelers'

interface TravelerListProps {
  travelers: Traveler[]
  selectedTravelerId: string | null
  onSelectTraveler: (travelerId: string | null) => void
  travelerStats: Map<string, {
    currentLocation: string
    totalDistance: number
    locationCount: number
  }>
}

export default function TravelerList({
  travelers,
  selectedTravelerId,
  onSelectTraveler,
  travelerStats
}: TravelerListProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      background: 'rgba(10, 10, 10, 0.85)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      minWidth: '320px',
      maxWidth: '380px',
      maxHeight: '80vh',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      zIndex: 1000
    }}>
      {/* Header */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          padding: '16px 20px',
          borderBottom: isExpanded ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h2 style={{
          fontSize: '18px',
          fontWeight: 700,
          color: '#ffffff',
          margin: 0
        }}>
          🌍 세계 여행자들
        </h2>
        <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
          {isExpanded ? '▼' : '▶'}
        </span>
      </div>

      {/* Traveler List */}
      {isExpanded && (
        <div style={{
          padding: '12px',
          maxHeight: 'calc(80vh - 60px)',
          overflowY: 'auto'
        }}>
          {/* All Travelers Button */}
          <div
            onClick={() => onSelectTraveler(null)}
            style={{
              padding: '12px 16px',
              marginBottom: '8px',
              background: selectedTravelerId === null 
                ? 'rgba(255, 255, 255, 0.15)' 
                : 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '4px'
            }}>
              👥 모든 여행자 보기
            </div>
            <div style={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>
              전체 경로 표시
            </div>
          </div>

          {/* Individual Travelers */}
          {travelers.map(traveler => {
            const stats = travelerStats.get(traveler.id)
            const isSelected = selectedTravelerId === traveler.id

            return (
              <div
                key={traveler.id}
                onClick={() => onSelectTraveler(traveler.id)}
                style={{
                  padding: '12px 16px',
                  marginBottom: '8px',
                  background: isSelected 
                    ? 'rgba(255, 255, 255, 0.15)' 
                    : 'rgba(255, 255, 255, 0.05)',
                  border: `2px solid ${isSelected ? traveler.color : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '28px' }}>{traveler.avatar}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '2px'
                    }}>
                      {traveler.name}
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>
                      {traveler.description}
                    </div>
                  </div>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: traveler.color,
                    boxShadow: `0 0 10px ${traveler.color}80`
                  }} />
                </div>

                {stats && stats.locationCount > 0 && (
                  <div style={{
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                    <div>
                      <div style={{ color: 'rgba(255, 255, 255, 0.5)' }}>현재 위치</div>
                      <div style={{ color: '#ffffff', fontWeight: 600 }}>
                        {stats.currentLocation}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: 'rgba(255, 255, 255, 0.5)' }}>이동거리</div>
                      <div style={{ color: traveler.color, fontWeight: 600 }}>
                        {stats.totalDistance.toFixed(0)} km
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
