import { Home } from './pages/Home'
import { Shinzou } from './pages/Shinzou'
import './App.css'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shinzou/" element={<Shinzou />} />
      <Route path="/sorekami/" element={<Shinzou />} />
      <Route path="/parade/" element={<Shinzou />} />
      <Route path="/ningen/" element={<Shinzou />} />
    </Routes>
  )
}

export default App
