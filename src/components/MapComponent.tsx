import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { allTravelerLocations, travelers } from '@/data/worldTravelers'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || ''

interface MapComponentProps {
  selectedTravelerId: string | null
  onSelectTraveler: (id: string | null) => void
}

export default function MapComponent({ selectedTravelerId, onSelectTraveler }: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [isListCollapsed, setIsListCollapsed] = useState(false)
  const itemsPerPage = 10

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    // 지도 초기화
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [30.0, 20.0],
      zoom: 2,
      collectResourceTiming: false
    })

    map.current.on('load', () => {
      if (!map.current) return

      // 각 여행자의 경로 그리기
      travelers.forEach(traveler => {
        const locations = allTravelerLocations.get(traveler.id) || []
        if (locations.length === 0) return

        // 좌표 추출
        const coordinates = locations.map(loc => loc.geom.coordinates)

        // 경로 소스 추가
        map.current!.addSource(`route-${traveler.id}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coordinates
            }
          }
        })

        // 경로 레이어 추가
        map.current!.addLayer({
          id: `route-${traveler.id}`,
          type: 'line',
          source: `route-${traveler.id}`,
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': traveler.color,
            'line-width': 3,
            'line-opacity': 0.8
          }
        })

        // 마지막 위치에 마커 추가
        const lastLocation = locations[locations.length - 1]
        const [lng, lat] = lastLocation.geom.coordinates

        const el = document.createElement('div')
        el.style.width = '20px'
        el.style.height = '20px'
        el.style.borderRadius = '50%'
        el.style.backgroundColor = traveler.color
        el.style.border = '2px solid white'
        el.style.boxShadow = `0 0 8px ${traveler.color}80`
        el.style.cursor = 'pointer'
        el.addEventListener('click', () => {
          onSelectTraveler(traveler.id)
          setIsPanelOpen(true)
        })

        new mapboxgl.Marker(el)
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<div style="padding: 8px; color: white; background: rgba(0,0,0,0.8); border-radius: 4px;">
                <strong>${traveler.avatar} ${traveler.name}</strong>
              </div>`
            )
          )
          .addTo(map.current!)

        // 이름 레이블 추가
        const labelEl = document.createElement('div')
        labelEl.style.background = 'rgba(0, 0, 0, 0.7)'
        labelEl.style.color = 'white'
        labelEl.style.padding = '4px 8px'
        labelEl.style.borderRadius = '4px'
        labelEl.style.fontSize = '11px'
        labelEl.style.fontWeight = '600'
        labelEl.style.whiteSpace = 'nowrap'
        labelEl.style.border = `1px solid ${traveler.color}`
        labelEl.style.cursor = 'pointer'
        labelEl.textContent = traveler.name
        labelEl.addEventListener('click', () => {
          onSelectTraveler(traveler.id)
          setIsPanelOpen(true)
        })

        new mapboxgl.Marker({ element: labelEl, anchor: 'bottom', offset: [0, -25] })
          .setLngLat([lng, lat])
          .addTo(map.current!)
      })

      // 네비게이션 컨트롤 추가
      map.current!.addControl(new mapboxgl.NavigationControl(), 'top-right')
    })

    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [])

  // 선택된 여행자 변경 시 지도 이동
  useEffect(() => {
    if (!map.current || !selectedTravelerId) return

    const locations = allTravelerLocations.get(selectedTravelerId) || []
    if (locations.length === 0) return

    const coordinates = locations.map(loc => loc.geom.coordinates)
    const bounds = coordinates.reduce(
      (bounds, coord) => bounds.extend(coord as [number, number]),
      new mapboxgl.LngLatBounds(coordinates[0], coordinates[0])
    )

    map.current.fitBounds(bounds, {
      padding: { top: 100, bottom: 100, left: 400, right: 100 },
      duration: 1000
    })

    setIsPanelOpen(true)
  }, [selectedTravelerId])

  const selectedTraveler = travelers.find(t => t.id === selectedTravelerId)
  const selectedLocations = selectedTravelerId ? allTravelerLocations.get(selectedTravelerId) || [] : []

  // 검색 필터링
  const filteredTravelers = travelers.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // 페이지네이션
  const totalPages = Math.ceil(filteredTravelers.length / itemsPerPage)
  const paginatedTravelers = filteredTravelers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  // 검색어 변경 시 첫 페이지로
  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(0)
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />

      {/* 여행자 선택 패널 */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        width: isListCollapsed ? '60px' : '340px',
        transition: 'width 0.3s ease'
      }}>
        <div style={{
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: isListCollapsed ? '12px' : '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* 헤더 */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: isListCollapsed ? 0 : '16px'
          }}>
            {!isListCollapsed && (
              <div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '4px'
                }}>
                  🌍 Travelers
                </div>
                <div style={{
                  fontSize: '11px',
                  color: 'rgba(255, 255, 255, 0.5)'
                }}>
                  {filteredTravelers.length} explorers worldwide
                </div>
              </div>
            )}
            <button
              onClick={() => setIsListCollapsed(!isListCollapsed)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '8px',
                padding: '8px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              {isListCollapsed ? '→' : '←'}
            </button>
          </div>

          {!isListCollapsed && (
            <>
              {/* 여행자 목록 페이지 링크 */}
              <Link
                to="/travelers"
                style={{
                  display: 'block',
                  marginBottom: '12px',
                  padding: '12px',
                  background: 'rgba(99, 102, 241, 0.2)',
                  border: '1px solid rgba(99, 102, 241, 0.4)',
                  borderRadius: '8px',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(99, 102, 241, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)'
                }}
              >
                👥 모든 여행자 보기
              </Link>

              {/* 검색 바 */}
              <input
                type="text"
                placeholder="Search travelers..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '13px',
                  marginBottom: '12px',
                  outline: 'none'
                }}
              />

              {/* 여행자 그리드 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px',
                marginBottom: '12px',
                maxHeight: '400px',
                overflowY: 'auto'
              }}>
                {paginatedTravelers.map(traveler => {
                  const isSelected = traveler.id === selectedTravelerId
                  const locationCount = allTravelerLocations.get(traveler.id)?.length || 0
                  
                  return (
                    <button
                      key={traveler.id}
                      onClick={() => onSelectTraveler(isSelected ? null : traveler.id)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '10px',
                        background: isSelected 
                          ? `linear-gradient(135deg, ${traveler.color}dd, ${traveler.color}99)`
                          : 'rgba(255, 255, 255, 0.08)',
                        border: isSelected 
                          ? `2px solid ${traveler.color}`
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        color: 'white',
                        transition: 'all 0.2s',
                        boxShadow: isSelected 
                          ? `0 4px 15px ${traveler.color}50`
                          : 'none',
                        transform: isSelected ? 'scale(1.05)' : 'scale(1)'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                          e.currentTarget.style.borderColor = traveler.color
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                    >
                      <div style={{ fontSize: '24px', lineHeight: 1 }}>
                        {traveler.avatar}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        textAlign: 'center',
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        width: '100%'
                      }}>
                        {traveler.name}
                      </div>
                      <div style={{
                        fontSize: '9px',
                        color: isSelected ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)'
                      }}>
                        {locationCount} pts
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* 페이지네이션 */}
              {totalPages > 1 && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <button
                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      color: 'white',
                      cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
                      opacity: currentPage === 0 ? 0.3 : 1,
                      fontSize: '12px'
                    }}
                  >
                    ←
                  </button>
                  <span style={{
                    fontSize: '11px',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {currentPage + 1} / {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                    disabled={currentPage === totalPages - 1}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      color: 'white',
                      cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
                      opacity: currentPage === totalPages - 1 ? 0.3 : 1,
                      fontSize: '12px'
                    }}
                  >
                    →
                  </button>
                </div>
              )}

              {/* 전체 보기 버튼 */}
              {selectedTravelerId && (
                <button
                  onClick={() => onSelectTraveler(null)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'white',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                >
                  ← Show All
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* 경유지 정보 패널 */}
      {isPanelOpen && selectedTraveler && selectedLocations.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '300px',
          maxHeight: 'calc(100vh - 40px)',
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          zIndex: 1000
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: `2px solid ${selectedTraveler.color}`
          }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', color: 'white', fontWeight: 700 }}>
                {selectedTraveler.avatar} {selectedTraveler.name}
              </h3>
              <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '4px' }}>
                {selectedTraveler.description}
              </div>
            </div>
            <button
              onClick={() => setIsPanelOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '6px 8px',
                color: 'white',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              ✕
            </button>
          </div>

          <div style={{ 
            marginBottom: '12px', 
            padding: '8px 12px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.7)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>📍 Waypoints</span>
            <span style={{ 
              background: selectedTraveler.color,
              color: 'white',
              padding: '2px 8px',
              borderRadius: '10px',
              fontSize: '11px',
              fontWeight: 600
            }}>
              {selectedLocations.length}
            </span>
          </div>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '6px',
            maxHeight: 'calc(100vh - 220px)',
            overflowY: 'auto',
            paddingRight: '4px'
          }}>
            {selectedLocations.map((location, index) => (
              <div
                key={index}
                onClick={() => {
                  if (map.current) {
                    map.current.flyTo({
                      center: location.geom.coordinates as [number, number],
                      zoom: 12,
                      duration: 1500
                    })
                  }
                }}
                style={{
                  padding: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = selectedTraveler.color
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  marginBottom: '6px'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: selectedTraveler.color,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    boxShadow: `0 0 10px ${selectedTraveler.color}50`
                  }}>
                    {index + 1}
                  </div>
                  <div style={{ fontWeight: 600, color: 'white', fontSize: '11px' }}>
                    {location.location_name || `Waypoint ${index + 1}`}
                  </div>
                </div>
                <div style={{ 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  fontSize: '10px',
                  fontFamily: 'monospace',
                  lineHeight: 1.5
                }}>
                  Lat: {location.geom.coordinates[1].toFixed(4)}°<br/>
                  Lng: {location.geom.coordinates[0].toFixed(4)}°
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
