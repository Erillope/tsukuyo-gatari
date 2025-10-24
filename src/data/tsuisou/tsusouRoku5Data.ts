import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import tsuisouChpt5 from "../../traducciones/tsuisou/chpt_5.txt"
import tsuisou5 from "../../assets/tsuisou5.jpg"
import moon1 from "../../assets/moon1.png"

const tsuisou5TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisou5,
    largeTitleImg: tsuisou5,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Capítulo 5: El talento",
    videoLink: "https://www.youtube.com/watch?v=RugdREg69Nc"
}

const tsuisou5TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const tsuisou5ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
    { breakpoint: 200, opacity: 0.85 },
    { breakpoint: 300, opacity: 0.85 },
    { breakpoint: 400, opacity: 0.85 },
    { breakpoint: 500, opacity: 0.85 },
]

const tsuisou5ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
    { breakpoint: 200, opacity: 0.85 },
    { breakpoint: 300, opacity: 0.85 },
    { breakpoint: 400, opacity: 0.85 },
    { breakpoint: 500, opacity: 0.85 },
]

export const tsuisou5Data: ShinshouRokuChapterProps = {
    chapterFile: tsuisouChpt5,
    titleData: tsuisou5TitleData,
    tsukiMessage1Data: tsuisou5TsukiMessageData,
    tsukiMessage2Data: tsuisou5TsukiMessageData,
    chapterLargeBreakpoints: tsuisou5ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou5ChapterSmallBreakpoints
}