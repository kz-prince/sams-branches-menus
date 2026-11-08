import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import BrandMenu from './pages/BrandMenu'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:brandId" element={<BrandMenu />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
