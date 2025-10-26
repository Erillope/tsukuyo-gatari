import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt13 from "../../traducciones/shinshou/chpt_13.txt"
import blue from "../../assets/blue.png"
import moon1 from "../../assets/moon1.png"
import blue1 from "../../assets/blue_bg1.png"
import blue2 from "../../assets/blue_bg2.png"
import blue3 from "../../assets/blue_bg3.png"
import blue4 from "../../assets/blue_bg4.png"

const blueTitleData: ChapterTitleProps = {
    smallTitleImg: blue,
    largeTitleImg: blue,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 13: Blue",
    videoLink: "https://www.youtube.com/watch?v=Csp715c4kSU"
}

const blueTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const blueChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.65, imageSrc: blue1 },
    { breakpoint: 35, opacity: 0.65, imageSrc: blue },
]

const blueChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 5, opacity: 0.65, imageSrc: blue1, position: "right" },
    { breakpoint: 10, opacity: 0.7, imageSrc: blue2 },
    { breakpoint: 13, opacity: 0.75, imageSrc: blue3 },
    { breakpoint: 20, opacity: 0.75, imageSrc: blue4 },
    { breakpoint: 100, opacity: 0.65, imageSrc: blue },
]

export const blueData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt13,
    titleData: blueTitleData,
    tsukiMessage1Data: blueTsukiMessageData,
    tsukiMessage2Data: blueTsukiMessageData,
    chapterLargeBreakpoints: blueChapterLargeBreakpoints,
    chapterSmallBreakpoints: blueChapterSmallBreakpoints
}