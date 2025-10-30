import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouRokuDeltaChpt from "../../traducciones/shinshou/chpt_6.txt"
import shinshouRokuDelta from "../../assets/shinshou_delta.png"
import shinshouDeltaBG1 from "../../assets/shinshou_delta_bg.png"
import shinshouDeltaBG from "../../assets/shinshou_delta_bg1.png"
import shinshouDeltaBG2 from "../../assets/shinshou_delta_bg2.png"
import shinshouDeltaBG3Small from "../../assets/shinshou_delta_bg3_small.png"
import shinshouDeltaBG4Small from "../../assets/shinshou_delta_bg4_small.png"
import shinshouDeltaBG5Small from "../../assets/shinshou_delta_bg5_small.png"
import shinshouDeltaBG6 from "../../assets/shinshou_delta_bg6.png"
import shinshouDeltaBG2Small from "../../assets/shinshou_delta_bg2_small.png"
import moon1 from "../../assets/moon1.png"

const shinshouRokuDeltaTitleData: ChapterTitleProps = {
    smallTitleImg: shinshouRokuDelta,
    largeTitleImg: shinshouDeltaBG1,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 6: Imágenes mentales δ",
    videoLink: "https://www.youtube.com/watch?v=HKsSGYCRGFk"
}

const shinshouRokuDeltaTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const shinshouRokuDeltaChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.75, imageSrc: shinshouDeltaBG },
    { breakpoint: 17, opacity: 0.65, imageSrc: shinshouRokuDelta },
    { breakpoint: 27, opacity: 0.6, imageSrc: shinshouDeltaBG2 },
]

const shinshouRokuDeltaChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 4, opacity: 0.75, imageSrc: shinshouDeltaBG, position: 'left' },
    { breakpoint: 8, opacity: 0.7, imageSrc: shinshouDeltaBG3Small },
    { breakpoint: 10, opacity: 0.65, imageSrc: shinshouRokuDelta },
    { breakpoint: 12, opacity: 0.6, imageSrc: shinshouDeltaBG4Small },
    { breakpoint: 17, opacity: 0.7, imageSrc: shinshouDeltaBG5Small },
    { breakpoint: 22, opacity: 0.6, imageSrc: shinshouDeltaBG6 },
    { breakpoint: 27, opacity: 0.6, imageSrc: shinshouDeltaBG2Small },
]

export const shinshouRokuDeltaData: ShinshouRokuChapterProps = {
    chapterFile: shinshouRokuDeltaChpt,
    titleData: shinshouRokuDeltaTitleData,
    tsukiMessage1Data: shinshouRokuDeltaTsukiMessageData,
    tsukiMessage2Data: shinshouRokuDeltaTsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuDeltaChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuDeltaChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/shinshouRoku/chapter-5/",
    nextChapterLink: "/shinzou/shinshouRoku/chapter-7/",
}