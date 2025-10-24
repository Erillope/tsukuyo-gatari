import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import tsuisouChpt3 from "../../traducciones/tsuisou/chpt_3.txt"
import tsuisou3 from "../../assets/tsuisou3.png"
import moon1 from "../../assets/moon1.png"

const tsuisou3TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisou3,
    largeTitleImg: tsuisou3,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Capítulo 3: El arte",
    videoLink: "https://www.youtube.com/watch?v=1hdtk9RZhHY"
}

const tsuisou3TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const tsuisou3ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
    { breakpoint: 200, opacity: 0.85 },
    { breakpoint: 300, opacity: 0.85 },
    { breakpoint: 400, opacity: 0.85 },
    { breakpoint: 500, opacity: 0.85 },
]

const tsuisou3ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
    { breakpoint: 200, opacity: 0.85 },
    { breakpoint: 300, opacity: 0.85 },
    { breakpoint: 400, opacity: 0.85 },
    { breakpoint: 500, opacity: 0.85 },
]

export const tsuisou3Data: ShinshouRokuChapterProps = {
    chapterFile: tsuisouChpt3,
    titleData: tsuisou3TitleData,
    tsukiMessage1Data: tsuisou3TsukiMessageData,
    tsukiMessage2Data: tsuisou3TsukiMessageData,
    chapterLargeBreakpoints: tsuisou3ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou3ChapterSmallBreakpoints
}