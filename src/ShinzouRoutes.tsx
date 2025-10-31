import { Route, Routes } from "react-router-dom"
import { Shinzou } from "./pages/Shinzou"
import { ChapterPage} from './pages/ChaptersPage'
import { shinshouRokuAlphaData } from './data/shinshou/shinshouRokuAlphaData'
import { shinshouRokuBetaData } from './data/shinshou/shinshouRokuBetaData'
import { ambitionData } from './data/shinshou/ambitionData'
import { shinshouRokuYData } from './data/shinshou/shinshouRokuYData'
import { coldData } from './data/shinshou/coldData'
import { shinshouRokuDeltaData } from './data/shinshou/shinshouRokuDelta'
import { emergeData } from './data/shinshou/emergeData'
import { shinshouRokuEData } from './data/shinshou/shinshouRokuEData'
import { shinshouRokuCData } from './data/shinshou/shinshouRokuCData'
import { dawnData } from './data/shinshou/dawnData'
import { shinshouRokuNData } from './data/shinshou/shinshouRokuNData'
import { shinshouRokuTData } from './data/shinshou/shinshouRokuTData'
import { blueData } from "./data/shinshou/blue"
import { shinshouRokuIData } from "./data/shinshou/shinshouRokuI"
import { shinshouRokuVData } from "./data/shinshou/shinshouRokuV"
import { tsuisou0Data } from "./data/tsuisou/tsuisouRoku0Data"
import { tsuisou1Data } from "./data/tsuisou/tsuisouRoku1Data"
import { tsuisou2Data } from "./data/tsuisou/tsuisouRoku2Data"
import { tsuisou3Data } from "./data/tsuisou/tsuisouRoku3Data"
import { tsuisou4Data } from "./data/tsuisou/tsuisouRoku4Data"
import { tsuisou5Data } from "./data/tsuisou/tsusouRoku5Data"
import { kaisouRoku1Data } from "./data/kaisou/kaisou1"
import { kaisouRoku2Data } from "./data/kaisou/kaisou2"
import { kaisouRoku3Data } from "./data/kaisou/kaisou3"
import { kaisouRoku4Data } from "./data/kaisou/kaisou4"
import { kaisouRoku5Data } from "./data/kaisou/kaisou5";
import { kaisouRoku6Data } from "./data/kaisou/kaisou6";
import { kaisouRoku7Data } from "./data/kaisou/kaisou7";
import { kaisouRoku8Data } from "./data/kaisou/kaisou8";
import { kaisouRoku9Data } from "./data/kaisou/kaisou9";
import { kaisouRoku10Data } from "./data/kaisou/kaisou10";
import { kaisouRoku11Data } from "./data/kaisou/kaisou11";
import { kaisouRoku12Data } from "./data/kaisou/kaisou12";
import { veronicaData } from "./data/extra/veronica"
import { tetraData } from "./data/extra/tetra"
import { ookamiData } from "./data/extra/ookami"

export const ShinzouRoutes = () => {
    return <Routes>
        <Route path='/' element={<Shinzou />} />
        <Route path='/shinshouRoku/*' element={<ShinshouRokuRoutes />} />
        <Route path='/tsuisouRoku/*' element={<TsuisouRokuRoutes />} />
        <Route path='/kaisouRoku/*' element={<KaisouRokuRoutes />} />
        <Route path='/extra/*' element={<ExtraRoutes />} />
    </Routes>
}

const ShinshouRokuRoutes = () => {
    return <Routes>
        <Route path='/chapter-1/' element={<ChapterPage {...shinshouRokuAlphaData} />} />
        <Route path='/chapter-2/' element={<ChapterPage {...shinshouRokuBetaData} />} />
        <Route path='/chapter-3/' element={<ChapterPage {...ambitionData} />} />
        <Route path='/chapter-4/' element={<ChapterPage {...shinshouRokuYData} />} />
        <Route path='/chapter-5/' element={<ChapterPage {...coldData} />} />
        <Route path='/chapter-6/' element={<ChapterPage {...shinshouRokuDeltaData} />} />
        <Route path='/chapter-7/' element={<ChapterPage {...emergeData} />} />
        <Route path='/chapter-8/' element={<ChapterPage {...shinshouRokuEData} />} />
        <Route path='/chapter-9/' element={<ChapterPage {...shinshouRokuCData} />} />
        <Route path='/chapter-10/' element={<ChapterPage {...dawnData} />} />
        <Route path='/chapter-11/' element={<ChapterPage {...shinshouRokuNData} />} />
        <Route path='/chapter-12/' element={<ChapterPage {...shinshouRokuTData} />} />
        <Route path='/chapter-13/' element={<ChapterPage {...blueData} />} />
        <Route path='/chapter-14/' element={<ChapterPage {...shinshouRokuIData} />} />
        <Route path='/chapter-15/' element={<ChapterPage {...shinshouRokuVData} />} />
    </Routes>
}

const TsuisouRokuRoutes = () => {
    return <Routes>
        <Route path='/chapter-0/' element={<ChapterPage {...tsuisou0Data} />} />
        <Route path='/chapter-1/' element={<ChapterPage {...tsuisou1Data} />} />
        <Route path='/chapter-2/' element={<ChapterPage {...tsuisou2Data} />} />
        <Route path='/chapter-3/' element={<ChapterPage {...tsuisou3Data} />} />
        <Route path='/chapter-4/' element={<ChapterPage {...tsuisou4Data} />} />
        <Route path='/chapter-5/' element={<ChapterPage {...tsuisou5Data} />} />
    </Routes>
}

const KaisouRokuRoutes = () => {
    return <Routes>
        <Route path='/chapter-1/' element={<ChapterPage {...kaisouRoku1Data} />} />
        <Route path='/chapter-2/' element={<ChapterPage {...kaisouRoku2Data} />} />
        <Route path='/chapter-3/' element={<ChapterPage {...kaisouRoku3Data} />} />
        <Route path='/chapter-4/' element={<ChapterPage {...kaisouRoku4Data} />} />
        <Route path='/chapter-5/' element={<ChapterPage {...kaisouRoku5Data} />} />
        <Route path='/chapter-6/' element={<ChapterPage {...kaisouRoku6Data} />} />
        <Route path='/chapter-7/' element={<ChapterPage {...kaisouRoku7Data} />} />
        <Route path='/chapter-8/' element={<ChapterPage {...kaisouRoku8Data} />} />
        <Route path='/chapter-9/' element={<ChapterPage {...kaisouRoku9Data} />} />
        <Route path='/chapter-10/' element={<ChapterPage {...kaisouRoku10Data} />} />
        <Route path='/chapter-11/' element={<ChapterPage {...kaisouRoku11Data} />} />
        <Route path='/chapter-12/' element={<ChapterPage {...kaisouRoku12Data} />} />
    </Routes>
}

const ExtraRoutes = () => {
    return <Routes>
        <Route path='/veronica/' element={<ChapterPage {...veronicaData} />} />
        <Route path='/tetra/' element={<ChapterPage {...tetraData} />} />
        <Route path='/ookami/' element={<ChapterPage {...ookamiData} />} />
    </Routes>
}