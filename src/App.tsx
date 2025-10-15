import { Home } from './pages/Home'
import { Shinzou } from './pages/Shinzou'
import './App.css'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shinzou/" element={<Shinzou />} />
    </Routes>
  )
}

export default App
