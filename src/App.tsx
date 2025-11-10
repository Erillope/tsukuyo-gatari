import { Home } from './pages/Home'
import { Shinzou } from './pages/Shinzou'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ShinzouRoutes } from './ShinzouRoutes'
import { SorekamiRoutes } from './SorekamiRoutes'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shinzou/*" element={<ShinzouRoutes />} />
      <Route path="/sorekami/*" element={<SorekamiRoutes />} />
      <Route path="/parade/" element={<Shinzou />} />
      <Route path="/ningen/" element={<Shinzou />} />
      
    </Routes>
  )
}

export default App
