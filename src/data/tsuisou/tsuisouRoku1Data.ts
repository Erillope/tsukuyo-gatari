import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import tsuisouChpt1 from "../../traducciones/tsuisou/chpt_1.txt"
import tsuisou1 from "../../assets/tsuisou_1.png"
import moon1 from "../../assets/moon1.png"

const tsuisou1TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisou1,
    largeTitleImg: tsuisou1,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Capítulo 1: El ser humano",
    videoLink: "https://www.youtube.com/watch?v=oNWHODZ-THc"
}

const tsuisou1TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const tsuisou1ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
    { breakpoint: 200, opacity: 0.85 },
]

const tsuisou1ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
    { breakpoint: 200, opacity: 0.85 },
]

export const tsuisou1Data: ShinshouRokuChapterProps = {
    chapterFile: tsuisouChpt1,
    titleData: tsuisou1TitleData,
    tsukiMessage1Data: tsuisou1TsukiMessageData,
    tsukiMessage2Data: tsuisou1TsukiMessageData,
    chapterLargeBreakpoints: tsuisou1ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou1ChapterSmallBreakpoints
}