import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import tsuisouChpt0 from "../../traducciones/tsuisou/chpt_0.txt"
import tsuisouP from "../../assets/tsuisou_p.png"
import tsuisouPBG from "../../assets/tsuisou_p_bg.png"
import tsuisouPBGSmall from "../../assets/tsuisou_p_bg_small.png"
import tsuisouPBG1 from "../../assets/tsuisou_p_bg1.jpg"
import tsuisouPBG2 from "../../assets/tsuisou_p_bg2.png"
import tsuisouPBG3 from "../../assets/tsuisou_p_bg3.jpg"
import tsuisouPBG4 from "../../assets/tsuisou_p_bg4.png"
import tsuisouPBG5 from "../../assets/tsuisou_p_bg5.png"
import tsuisouPBG6 from "../../assets/tsuisou_p_bg6.png"
import moon2 from "../../assets/moon2.jpg"

const tsuisou0TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisouPBGSmall,
    largeTitleImg: tsuisouPBG,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Prólogo: Yuma",
    videoLink: "https://www.youtube.com/watch?v=HKsSGYCRGFk"
}

const tsuisou0TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon2
}

const tsuisou0ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 15, opacity: 0.75, imageSrc: tsuisouP },
    { breakpoint: 30, opacity: 0.75, imageSrc: tsuisouPBG1 },
]

const tsuisou0ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 5, opacity: 0.75, imageSrc: tsuisouP },
    { breakpoint: 8, opacity: 0.75, imageSrc: tsuisouPBG2 },
    { breakpoint: 11, opacity: 0.75, imageSrc: tsuisouPBG3 },
    { breakpoint: 15, opacity: 0.75, imageSrc: tsuisouPBG4 },
    { breakpoint: 18, opacity: 0.65, imageSrc: tsuisouPBG5 },
    { breakpoint: 22, opacity: 0.65, imageSrc: tsuisouPBG6 },
    { breakpoint: 30, opacity: 0.65, imageSrc: tsuisouPBG1 },
    { breakpoint: 100, opacity: 0.85 },
]

export const tsuisou0Data: ShinshouRokuChapterProps = {
    chapterFile: tsuisouChpt0,
    titleData: tsuisou0TitleData,
    tsukiMessage1Data: tsuisou0TsukiMessageData,
    tsukiMessage2Data: tsuisou0TsukiMessageData,
    chapterLargeBreakpoints: tsuisou0ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou0ChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/shinshouRoku/chapter-15/",
    nextChapterLink: "/shinzou/tsuisouRoku/chapter-1/",
}