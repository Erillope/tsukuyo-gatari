import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt5 from "../../traducciones/shinshou/chpt_5.txt"
import cold from "../../assets/cold.jpg"
import coldBG from "../../assets/cold_bg.jpg"
import coldBGSmall from "../../assets/cold_bg_small.jpg"
import coldBG2 from "../../assets/cold_bg2.png"
import coldBG3Small from "../../assets/cold_bg3_small.png"
import coldBG4Small from "../../assets/cold_bg4_small.png"
import coldBG5Small from "../../assets/cold_bg5_small.png"
import moon1 from "../../assets/moon1.png"
import { zettaiReido } from "../shinzouVideos"

const coldTitleData: ChapterTitleProps = {
    smallTitleImg: coldBGSmall,
    largeTitleImg: coldBG,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 5: Cold",
    videoLink: "https://www.youtube.com/watch?v=rSKhmsVi9oo"
}

const coldTsukiMessage1Data = {
    breakpoint: 2,
    moonImageSrc: moon1
}

const coldTsukiMessage2Data = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const coldChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.75, imageSrc: cold },
    { breakpoint: 25, opacity: 0.75, imageSrc: coldBG2 },
]

const coldChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 4, opacity: 0.75, imageSrc: cold },
    { breakpoint: 7, opacity: 0.7, imageSrc: coldBG3Small },
    { breakpoint: 10, opacity: 0.65, imageSrc: coldBG4Small },
    { breakpoint: 14, opacity: 0.75, imageSrc: coldBG5Small },
    { breakpoint: 25, opacity: 0.75, imageSrc: coldBG2 },
]

export const coldData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt5,
    titleData: coldTitleData,
    tsukiMessage1Data: coldTsukiMessage1Data,
    tsukiMessage2Data: coldTsukiMessage2Data,
    chapterLargeBreakpoints: coldChapterLargeBreakpoints,
    chapterSmallBreakpoints: coldChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/shinshouRoku/chapter-4/",
    nextChapterLink: "/shinzou/shinshouRoku/chapter-6/",
    videoLinks: [zettaiReido]
}