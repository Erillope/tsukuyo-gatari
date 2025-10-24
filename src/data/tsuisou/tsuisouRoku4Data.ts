import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import tsuisouChpt4 from "../../traducciones/tsuisou/chpt_4.txt"
import tsuisou4 from "../../assets/tsuisou4.png"
import moon1 from "../../assets/moon1.png"

const tsuisou4TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisou4,
    largeTitleImg: tsuisou4,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Capítulo 4: Aquello que tiene valor",
    videoLink: "https://www.youtube.com/watch?v=ndVeUn97Nh0"
}

const tsuisou4TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const tsuisou4ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
    { breakpoint: 200, opacity: 0.85 },
    { breakpoint: 300, opacity: 0.85 },
    { breakpoint: 400, opacity: 0.85 },
    { breakpoint: 500, opacity: 0.85 },
]

const tsuisou4ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
    { breakpoint: 200, opacity: 0.85 },
    { breakpoint: 300, opacity: 0.85 },
    { breakpoint: 400, opacity: 0.85 },
    { breakpoint: 500, opacity: 0.85 },
]

export const tsuisou4Data: ShinshouRokuChapterProps = {
    chapterFile: tsuisouChpt4,
    titleData: tsuisou4TitleData,
    tsukiMessage1Data: tsuisou4TsukiMessageData,
    tsukiMessage2Data: tsuisou4TsukiMessageData,
    chapterLargeBreakpoints: tsuisou4ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou4ChapterSmallBreakpoints
}