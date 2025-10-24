import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt13 from "../../traducciones/shinshou/chpt_13.txt"
import blue from "../../assets/blue.png"
import moon1 from "../../assets/moon1.png"

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
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
]

const blueChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.85 },
    { breakpoint: 100, opacity: 0.85 },
]

export const blueData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt13,
    titleData: blueTitleData,
    tsukiMessage1Data: blueTsukiMessageData,
    tsukiMessage2Data: blueTsukiMessageData,
    chapterLargeBreakpoints: blueChapterLargeBreakpoints,
    chapterSmallBreakpoints: blueChapterSmallBreakpoints
}