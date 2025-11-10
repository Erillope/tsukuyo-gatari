import { Route, Routes } from "react-router-dom"
import { Sorekami } from "./pages/Sorekami"
import { ChapterPage } from "./pages/ChaptersPage"
import { sorekami1Data } from "./data/sorekami/sorekami1Data"
import { sorekami1aData } from "./data/sorekami/sorekami1aData"
import { sorekami2aData } from "./data/sorekami/sorekami2aData"
import { sorekami2Data } from "./data/sorekami/sorekami2Data"
import { sorekami3aData } from "./data/sorekami/sorekami3aData"
import { sorekami3Data } from "./data/sorekami/sorekami3Data"
import { sorekami4aData } from "./data/sorekami/sorekami4aData"
import { sorekami4Data } from "./data/sorekami/sorekami4Data"
import { sorekami5aData } from "./data/sorekami/sorekami5a"
import { sorekami5Data } from "./data/sorekami/sorekami5"
import { sorekami6Data } from "./data/sorekami/sorekami6"
import { sorekami7Data } from "./data/sorekami/sorekami7"

export const SorekamiRoutes = () => {
    return <Routes>
        <Route path='/' element={<Sorekami />} />
        <Route path='/chapter-1/' element={<ChapterPage {...sorekami1Data} />} />
        <Route path='/chapter-1-04/' element={<ChapterPage {...sorekami1aData} />} />
        <Route path='/chapter-2-307/' element={<ChapterPage {...sorekami2aData} />} />
        <Route path='/chapter-2/' element={<ChapterPage {...sorekami2Data} />} />
        <Route path='/chapter-3-04/' element={<ChapterPage {...sorekami3aData} />} />
        <Route path='/chapter-3/' element={<ChapterPage {...sorekami3Data} />} />
        <Route path='/chapter-4-05/' element={<ChapterPage {...sorekami4aData} />} />
        <Route path='/chapter-4/' element={<ChapterPage {...sorekami4Data} />} />
        <Route path='/chapter-5-01/' element={<ChapterPage {...sorekami5aData} />} />
        <Route path='/chapter-5/' element={<ChapterPage {...sorekami5Data} />} />
        <Route path='/chapter-6/' element={<ChapterPage {...sorekami6Data} />} />
        <Route path='/chapter-7/' element={<ChapterPage {...sorekami7Data} />} />
    </Routes>
}