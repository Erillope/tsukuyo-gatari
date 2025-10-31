import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt10 from "../../traducciones/shinshou/chpt_10.txt"
import moon1 from "../../assets/moon1.png"
import dawn from "../../assets/dawn.jpg"
import dawnBG from "../../assets/dawn_bg.jpg"
import dawnBGSmall from "../../assets/dawn_bg_small.jpg"
import shinshouBBG3 from "../../assets/shinshou_b_bg3.png"
import shinshouBBG3Small from "../../assets/shinshou_b_bg3_small.png"
import dawnBG1 from "../../assets/dawn_bg1.png"
import dawnBG2 from "../../assets/dawn_bg2.png"
import dawnBG3 from "../../assets/dawn_bg3.png"
import dawnBG4 from "../../assets/dawn_bg4.png"
import dawnBG5 from "../../assets/dawn_bg5.png"
import dawnBG6 from "../../assets/dawn_bg6.png"
import { konnaInochiGaNakereba } from "../shinzouVideos"

const dawnTitleData: ChapterTitleProps = {
    smallTitleImg: dawnBGSmall,
    largeTitleImg: dawnBG,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 10: Dawn",
    videoLink: "https://www.youtube.com/watch?v=Y_j7gHOgYY4"
}

const dawnTsukiMessage1Data = {
    breakpoint: 2,
    moonImageSrc: moon1
}

const dawnTsukiMessage2Data = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const dawnChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.75, imageSrc: shinshouBBG3 },
    { breakpoint: 14, opacity: 0.77, imageSrc: dawnBG1 },
    { breakpoint: 25, opacity: 0.75, imageSrc: dawnBG2 },
]

const dawnChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 3, opacity: 0.75, imageSrc: shinshouBBG3Small },
    { breakpoint: 6, opacity: 0.77, imageSrc: dawnBG1 },
    { breakpoint: 10, opacity: 0.75, imageSrc: dawnBG3 },
    { breakpoint: 12, opacity: 0.75, imageSrc: dawnBG4 },
    { breakpoint: 15, opacity: 0.75, imageSrc: dawnBG2 },
    { breakpoint: 18, opacity: 0.75, imageSrc: dawnBG5 },
    { breakpoint: 22, opacity: 0.75, imageSrc: dawnBG6 },
    { breakpoint: 25, opacity: 0.75, imageSrc: dawn },
]

export const dawnData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt10,
    titleData: dawnTitleData,
    tsukiMessage1Data: dawnTsukiMessage1Data,
    tsukiMessage2Data: dawnTsukiMessage2Data,
    chapterLargeBreakpoints: dawnChapterLargeBreakpoints,
    chapterSmallBreakpoints: dawnChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/shinshouRoku/chapter-9/",
    nextChapterLink: "/shinzou/shinshouRoku/chapter-11/",
    videoLinks: [konnaInochiGaNakereba]
}