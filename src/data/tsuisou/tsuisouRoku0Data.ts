import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import tsuisouChpt0 from "../../traducciones/tsuisou/chpt_0.txt"
import tsuisouP from "../../assets/tsuisou_p.png"
import moon1 from "../../assets/moon1.png"

const tsuisou0TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisouP,
    largeTitleImg: tsuisouP,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Prólogo: Yuma",
    videoLink: "https://www.youtube.com/watch?v=HKsSGYCRGFk"
}

const tsuisou0TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const tsuisou0ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
]

const tsuisou0ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
]

export const tsuisou0Data: ShinshouRokuChapterProps = {
    chapterFile: tsuisouChpt0,
    titleData: tsuisou0TitleData,
    tsukiMessage1Data: tsuisou0TsukiMessageData,
    tsukiMessage2Data: tsuisou0TsukiMessageData,
    chapterLargeBreakpoints: tsuisou0ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou0ChapterSmallBreakpoints
}