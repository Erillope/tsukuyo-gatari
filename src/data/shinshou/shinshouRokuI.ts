import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt14 from "../../traducciones/shinshou/chpt_14.txt"
import shinshouI from "../../assets/shinshou_i.png"
import moon1 from "../../assets/moon1.png"

const shinshouRokuITitleData: ChapterTitleProps = {
    smallTitleImg: shinshouI,
    largeTitleImg: shinshouI,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 14: Imágenes mentales ι",
    videoLink: "https://www.youtube.com/watch?v=Y_j7gHOgYY4"
}

const shinshouRokuITsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const shinshouRokuIChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
]

const shinshouRokuIChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
]

export const shinshouRokuIData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt14,
    titleData: shinshouRokuITitleData,
    tsukiMessage1Data: shinshouRokuITsukiMessageData,
    tsukiMessage2Data: shinshouRokuITsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuIChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuIChapterSmallBreakpoints
}