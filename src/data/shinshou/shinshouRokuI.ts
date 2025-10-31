import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt14 from "../../traducciones/shinshou/chpt_14.txt"
import shinshouI from "../../assets/shinshou_i.png"
import moon1 from "../../assets/moon1.png"
import shinshouIBG1 from "../../assets/shinshou_i_bg1.png"
import shinshouBBG5 from "../../assets/shinshou_b_bg5.png"
import { konnaInochiGaNakereba } from "../shinzouVideos"

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
    { breakpoint: 9, opacity: 0.7, imageSrc: shinshouIBG1 },
    { breakpoint: 50, opacity: 0.7, imageSrc: shinshouI },
]

const shinshouRokuIChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.7, imageSrc: shinshouIBG1 },
    { breakpoint: 15, opacity: 0.7, imageSrc: shinshouBBG5 },
    { breakpoint: 50, opacity: 0.7, imageSrc: shinshouI },
]

export const shinshouRokuIData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt14,
    titleData: shinshouRokuITitleData,
    tsukiMessage1Data: shinshouRokuITsukiMessageData,
    tsukiMessage2Data: shinshouRokuITsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuIChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuIChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/shinshouRoku/chapter-13/",
    nextChapterLink: "/shinzou/shinshouRoku/chapter-15/",
    videoLinks: [konnaInochiGaNakereba]
}