import { Home } from './pages/Home'
import { Shinzou } from './pages/Shinzou'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ShinshouRokuChapter} from './pages/ShinshouChapters'
import { shinshouRokuAlphaData } from './data/shinshouRokuAlphaData'
import { shinshouRokuBetaData } from './data/shinshouRokuBetaData'
import { ambitionData } from './data/ambitionData'
import { shinshouRokuYData } from './data/shinshouRokuY'
import { coldData } from './data/coldData'
import { shinshouRokuDeltaData } from './data/shinshouRokuDelta'
import { emergeData } from './data/emergeData'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shinzou/" element={<Shinzou />} />
      <Route path="/sorekami/" element={<Shinzou />} />
      <Route path="/parade/" element={<Shinzou />} />
      <Route path="/ningen/" element={<Shinzou />} />

      <Route path='/shinzou/shinshouRoku/chapter-1/' element={<ShinshouRokuChapter {...shinshouRokuAlphaData} />} />
      <Route path='/shinzou/shinshouRoku/chapter-2/' element={<ShinshouRokuChapter {...shinshouRokuBetaData} />} />
      <Route path='/shinzou/shinshouRoku/chapter-3/' element={<ShinshouRokuChapter {...ambitionData} />} />
      <Route path='/shinzou/shinshouRoku/chapter-4/' element={<ShinshouRokuChapter {...shinshouRokuYData} />} />
      <Route path='/shinzou/shinshouRoku/chapter-5/' element={<ShinshouRokuChapter {...coldData} />} />
      <Route path='/shinzou/shinshouRoku/chapter-6/' element={<ShinshouRokuChapter {...shinshouRokuDeltaData} />} />
      <Route path='/shinzou/shinshouRoku/chapter-7/' element={<ShinshouRokuChapter {...emergeData} />} />
    </Routes>
  )
}

export default App
