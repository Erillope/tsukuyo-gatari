import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt7 from "../../traducciones/shinshou/chpt_7.txt"
import emerge from "../../assets/emerge.png"
import emergeBG2 from "../../assets/emerge_bg2.png"
import emergeBG from "../../assets/emerge_bg.png"
import emergeBGSmall from "../../assets/emerge_bg_small.png"
import emergeBG3Small from "../../assets/emerge_bg3_small.png"
import emergeBG4 from "../../assets/emerge_bg4.png"
import emergeBG5 from "../../assets/emerge_bg5.png"
import emergeBG6 from "../../assets/emerge_bg6.png"
import emergeBG7 from "../../assets/emerge_bg7.png"
import emergeBG8 from "../../assets/emerge_bg8.png"
import moon1 from "../../assets/moon1.png"

const emergeTitleData: ChapterTitleProps = {
    smallTitleImg: emergeBGSmall,
    largeTitleImg: emergeBG,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 7: Emerge",
    videoLink: "https://www.youtube.com/watch?v=Zd25wIFJhIo"
}

const emergeTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const emergeChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.7, imageSrc: emerge},
    { breakpoint: 22, opacity: 0.7, imageSrc: emergeBG2 },
]

const emergeChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 3, opacity: 0.7, imageSrc: emerge },
    { breakpoint: 4, opacity: 0.7, imageSrc: emergeBG3Small },
    { breakpoint: 6, opacity: 0.65, imageSrc: emergeBG2 },
    { breakpoint: 9, opacity: 0.75, imageSrc: emergeBG4 },
    { breakpoint: 12, opacity: 0.8, imageSrc: emergeBG5 },
    { breakpoint: 14, opacity: 0.6, imageSrc: emergeBG6 },
    { breakpoint: 17, opacity: 0.7, imageSrc: emergeBG7 },
    { breakpoint: 21, opacity: 0.8, imageSrc: emergeBG8 },
]

export const emergeData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt7,
    titleData: emergeTitleData,
    tsukiMessage1Data: emergeTsukiMessageData,
    tsukiMessage2Data: emergeTsukiMessageData,
    chapterLargeBreakpoints: emergeChapterLargeBreakpoints,
    chapterSmallBreakpoints: emergeChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/shinshouRoku/chapter-6/",
    nextChapterLink: "/shinzou/shinshouRoku/chapter-8/",
}