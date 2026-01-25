import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { Location } from '@/lib/supabase'

interface UsePathLayerOptions {
  map: mapboxgl.Map | null
  locations: Location[]
  layerId?: string
  lineColor?: string
  lineWidth?: number
  showMarker?: boolean
}

export function usePathLayer({
  map,
  locations,
  layerId = 'travel-path',
  lineColor = '#00ffff',
  lineWidth = 3,
  showMarker = true
}: UsePathLayerOptions) {
  const currentMarkerRef = useRef<mapboxgl.Marker | null>(null)

  useEffect(() => {
    if (!map) return

    // Wait for map style to be fully loaded
    if (!map.isStyleLoaded()) {
      const onStyleLoad = () => {
        map.off('style.load', onStyleLoad)
      }
      map.on('style.load', onStyleLoad)
      return
    }

    // 빈 배열이면 레이어와 마커 제거
    if (locations.length === 0) {
      // Remove existing layer and source
      if (map.getStyle() && map.getLayer(layerId)) {
        map.removeLayer(layerId)
      }
      if (map.getStyle() && map.getSource(layerId)) {
        map.removeSource(layerId)
      }
      // Remove marker
      if (currentMarkerRef.current) {
        currentMarkerRef.current.remove()
        currentMarkerRef.current = null
      }
      return
    }

    // Extract coordinates from locations
    const coordinates = locations.map(loc => loc.geom.coordinates)

    // Create GeoJSON for the path
    const geojson: GeoJSON.Feature<GeoJSON.LineString> = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: coordinates
      }
    }

    // Remove existing layer and source if they exist
    if (map.getStyle() && map.getLayer(layerId)) {
      map.removeLayer(layerId)
    }
    if (map.getStyle() && map.getSource(layerId)) {
      map.removeSource(layerId)
    }

    // Add new source and layer
    map.addSource(layerId, {
      type: 'geojson',
      data: geojson
    })

    map.addLayer({
      id: layerId,
      type: 'line',
      source: layerId,
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': lineColor,
        'line-width': lineWidth,
        'line-opacity': 0.8
      }
    })

    // Update current location marker
    const lastLocation = locations[locations.length - 1]
    const [lng, lat] = lastLocation.geom.coordinates

    // Remove existing marker
    if (currentMarkerRef.current) {
      currentMarkerRef.current.remove()
    }

    if (showMarker) {
      // Create custom marker element
      const el = document.createElement('div')
      el.style.width = '30px'
      el.style.height = '30px'
      el.style.borderRadius = '50%'
      el.style.backgroundColor = lineColor
      el.style.border = '3px solid white'
      el.style.boxShadow = `0 0 10px ${lineColor}80`
      el.style.cursor = 'pointer'

      // Add pulsing animation
      if (!document.querySelector('#pulse-animation')) {
        const style = document.createElement('style')
        style.id = 'pulse-animation'
        style.innerHTML = `
          @keyframes pulse {
            0% { box-shadow: 0 0 10px ${lineColor}80; }
            50% { box-shadow: 0 0 20px ${lineColor}cc; }
            100% { box-shadow: 0 0 10px ${lineColor}80; }
          }
        `
        document.head.appendChild(style)
      }
      el.style.animation = 'pulse 2s infinite'

      // Add new marker
      currentMarkerRef.current = new mapboxgl.Marker(el)
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div style="padding: 8px; background: rgba(10, 10, 10, 0.9); color: white; border-radius: 8px;">
                <strong>현재 위치</strong><br/>
                <small>위도: ${lat.toFixed(6)}<br/>경도: ${lng.toFixed(6)}</small>
              </div>
            `)
        )
        .addTo(map)
    }

    // Fit map to show entire path
    if (coordinates.length > 1 && showMarker) {
      const bounds = coordinates.reduce((bounds, coord) => {
        return bounds.extend(coord as [number, number])
      }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]))

      map.fitBounds(bounds, {
        padding: { top: 100, bottom: 100, left: 400, right: 100 },
        maxZoom: 12,
        duration: 1000
      })
    }

    return () => {
      if (map && map.getStyle()) {
        if (map.getLayer(layerId)) {
          map.removeLayer(layerId)
        }
        if (map.getSource(layerId)) {
          map.removeSource(layerId)
        }
      }
      if (currentMarkerRef.current) {
        currentMarkerRef.current.remove()
      }
    }
  }, [map, locations, layerId, lineColor, lineWidth, showMarker])
}
