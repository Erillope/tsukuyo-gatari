import { Home } from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ShinzouRoutes } from './routes/ShinzouRoutes'
import { SorekamiRoutes } from './routes/SorekamiRoutes'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shinzou/*" element={<ShinzouRoutes />} />
      <Route path="/sorekami/*" element={<SorekamiRoutes />} />
      <Route path="/parade/*" element={<ShinzouRoutes />} />
      <Route path="/ningen/*" element={<ShinzouRoutes/>} />
    </Routes>
  )
}

export default App
