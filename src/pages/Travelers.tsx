import { useState } from 'react'
import { Link } from 'react-router-dom'
import { travelers, allTravelerLocations } from '../data/worldTravelers'

export default function Travelers() {
  const [searchTerm, setSearchTerm] = useState('')

  // 여행자별 통계 계산
  const travelerStats = new Map(
    travelers.map(traveler => {
      const locations = allTravelerLocations.get(traveler.id) || []
      let totalDistance = 0
      
      for (let i = 1; i < locations.length; i++) {
        const [lng1, lat1] = locations[i - 1].geom.coordinates
        const [lng2, lat2] = locations[i].geom.coordinates
        totalDistance += calculateDistance(lat1, lng1, lat2, lng2)
      }

      return [
        traveler.id,
        {
          currentLocation: locations.length > 0 ? locations[locations.length - 1].location_name : '알 수 없음',
          totalDistance: Math.round(totalDistance),
          locationCount: locations.length
        }
      ]
    })
  )

  // 검색 필터링
  const filteredTravelers = travelers.filter(traveler =>
    traveler.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    traveler.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <Link 
            to="/" 
            style={{
              display: 'inline-block',
              marginBottom: '20px',
              padding: '10px 20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'all 0.2s'
            }}
          >
            ← 지도로 돌아가기
          </Link>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 16px 0'
          }}>
            🌍 세계 여행자들
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: 0
          }}>
            전 세계를 여행하는 {travelers.length}명의 여행자를 만나보세요
          </p>
        </div>

        {/* Search */}
        <div style={{
          marginBottom: '32px',
          maxWidth: '600px',
          margin: '0 auto 32px auto'
        }}>
          <input
            type="text"
            placeholder="여행자 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 24px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '16px',
              outline: 'none'
            }}
          />
        </div>

        {/* Travelers Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredTravelers.map(traveler => {
            const stats = travelerStats.get(traveler.id)!

            return (
              <div
                key={traveler.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: `2px solid ${traveler.color}40`,
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 8px 32px ${traveler.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Traveler Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <span style={{ fontSize: '48px' }}>{traveler.avatar}</span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: '0 0 4px 0'
                    }}>
                      {traveler.name}
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      margin: 0
                    }}>
                      {traveler.description}
                    </p>
                  </div>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: traveler.color,
                    boxShadow: `0 0 12px ${traveler.color}`
                  }} />
                </div>

                {/* Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '12px'
                  }}>
                    <div style={{
                      fontSize: '11px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      marginBottom: '4px'
                    }}>
                      방문한 곳
                    </div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#ffffff'
                    }}>
                      {stats.locationCount}곳
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '12px'
                  }}>
                    <div style={{
                      fontSize: '11px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      marginBottom: '4px'
                    }}>
                      총 이동거리
                    </div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#ffffff'
                    }}>
                      {stats.totalDistance.toLocaleString()}km
                    </div>
                  </div>
                </div>

                {/* Current Location */}
                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  background: `${traveler.color}20`,
                  borderRadius: '8px',
                  border: `1px solid ${traveler.color}40`
                }}>
                  <div style={{
                    fontSize: '11px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    marginBottom: '4px'
                  }}>
                    📍 현재 위치
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}>
                    {stats.currentLocation}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filteredTravelers.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: 'rgba(255, 255, 255, 0.5)'
          }}>
            <p style={{ fontSize: '18px' }}>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}

// 두 지점 사이의 거리 계산 (Haversine formula)
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // 지구 반지름 (km)
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180)
}
