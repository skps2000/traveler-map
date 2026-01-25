import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Travelers from './pages/Travelers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travelers" element={<Travelers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
