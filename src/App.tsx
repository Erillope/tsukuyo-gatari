import { Home } from './pages/Home'
import { Shinzou } from './pages/Shinzou'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ShinzouRoutes } from './ShinzouRoutes'
import { Sorekami } from './pages/Sorekami'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shinzou/*" element={<ShinzouRoutes />} />
      <Route path="/sorekami/*" element={<Sorekami />} />
      <Route path="/parade/" element={<Shinzou />} />
      <Route path="/ningen/" element={<Shinzou />} />
      
    </Routes>
  )
}

export default App
