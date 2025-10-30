import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt11 from "../../traducciones/shinshou/chpt_11.txt"
import shinshouN from "../../assets/shinshou_n.png"
import shinshouNBG from "../../assets/shinshou_n_bg.png"
import shinshouNBGSmall from "../../assets/shinshou_n_bg_small.png"
import shinshouNBG1 from "../../assets/shinshou_n_bg1.png"
import shinshouNBG2 from "../../assets/shinshou_n_bg2.png"
import shinshouNBG3 from "../../assets/shinshou_n_bg3.png"
import shinshouNBG4 from "../../assets/shinshou_n_bg4.png"
import shinshouNBG5 from "../../assets/shinshou_n_bg5.png"
import moon1 from "../../assets/moon1.png"

const shinshouRokuNTitleData: ChapterTitleProps = {
    smallTitleImg: shinshouNBGSmall,
    largeTitleImg: shinshouNBG,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 11: Imágenes mentales η",
    videoLink: "https://www.youtube.com/watch?v=4CVZvOTpLQw"
}

const shinshouRokuNTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const shinshouRokuNChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.7, imageSrc: shinshouNBG1 },
    { breakpoint: 20, opacity: 0.75, imageSrc: shinshouNBG2 },
    { breakpoint: 27, opacity: 0.75, imageSrc: shinshouNBG3 },
    { breakpoint: 40, opacity: 0.75, imageSrc: shinshouN },
]

const shinshouRokuNChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.7, imageSrc: shinshouNBG1 },
    { breakpoint: 15, opacity: 0.75, imageSrc: shinshouNBG2 },
    { breakpoint: 20, opacity: 0.75, imageSrc: shinshouNBG4 },
    { breakpoint: 24, opacity: 0.75, imageSrc: shinshouNBG3 },
    { breakpoint: 30, opacity: 0.75, imageSrc: shinshouNBG5 },
    { breakpoint: 40, opacity: 0.75, imageSrc: shinshouN },

]

export const shinshouRokuNData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt11,
    titleData: shinshouRokuNTitleData,
    tsukiMessage1Data: shinshouRokuNTsukiMessageData,
    tsukiMessage2Data: shinshouRokuNTsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuNChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuNChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/shinshouRoku/chapter-10/",
    nextChapterLink: "/shinzou/shinshouRoku/chapter-12/",
}