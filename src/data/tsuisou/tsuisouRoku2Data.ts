import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import tsuisouChpt2 from "../../traducciones/tsuisou/chpt_2.txt"
import tsuisou2 from "../../assets/tsuisou2.png"
import moon1 from "../../assets/moon1.png"

const tsuisou2TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisou2,
    largeTitleImg: tsuisou2,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Capítulo 2: Las buenas nuevas",
    videoLink: "https://www.youtube.com/watch?v=ndVeUn97Nh0"
}

const tsuisou2TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const tsuisou2ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
    { breakpoint: 200, opacity: 0.85 },
    { breakpoint: 300, opacity: 0.85 },
    { breakpoint: 400, opacity: 0.85 },
    { breakpoint: 500, opacity: 0.85 },
]

const tsuisou2ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
    { breakpoint: 200, opacity: 0.85 },
    { breakpoint: 300, opacity: 0.85 },
    { breakpoint: 400, opacity: 0.85 },
    { breakpoint: 500, opacity: 0.85 },
]

export const tsuisou2Data: ShinshouRokuChapterProps = {
    chapterFile: tsuisouChpt2,
    titleData: tsuisou2TitleData,
    tsukiMessage1Data: tsuisou2TsukiMessageData,
    tsukiMessage2Data: tsuisou2TsukiMessageData,
    chapterLargeBreakpoints: tsuisou2ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou2ChapterSmallBreakpoints
}