import { useState } from 'react'
import MapComponent from '../components/MapComponent'

export default function Home() {
  const [selectedTravelerId, setSelectedTravelerId] = useState<string | null>(null)

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapComponent 
        selectedTravelerId={selectedTravelerId}
        onSelectTraveler={setSelectedTravelerId}
      />
    </div>
  )
}
