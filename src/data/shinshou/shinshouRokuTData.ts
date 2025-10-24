import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt12 from "../../traducciones/shinshou/chpt_12.txt"
import shinshouT from "../../assets/shinshou_t.png"
import moon1 from "../../assets/moon1.png"

const shinshouRokuTTitleData: ChapterTitleProps = {
    smallTitleImg: shinshouT,
    largeTitleImg: shinshouT,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 12: Imágenes mentales θ",
    videoLink: "https://www.youtube.com/watch?v=oNWHODZ-THc"
}

const shinshouRokuTTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const shinshouRokuTChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
]

const shinshouRokuTChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
]

export const shinshouRokuTData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt12,
    titleData: shinshouRokuTTitleData,
    tsukiMessage1Data: shinshouRokuTTsukiMessageData,
    tsukiMessage2Data: shinshouRokuTTsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuTChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuTChapterSmallBreakpoints
}