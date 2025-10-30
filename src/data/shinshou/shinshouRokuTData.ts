import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt12 from "../../traducciones/shinshou/chpt_12.txt"
import shinshouT from "../../assets/shinshou_t.png"
import moon1 from "../../assets/moon1.png"
import shinshouTBG1 from "../../assets/shinshou_t_bg1.png"
import shinshouTBG2 from "../../assets/shinshou_t_bg2.png"
import shinshouTBG3 from "../../assets/shinshou_t_bg3.png"
import shinshouTBG4 from "../../assets/shinshou_t_bg4.png"
import shinshouTB5 from "../../assets/shinshou_t_bg5.png"
import shinshouTBG6 from "../../assets/shinshou_t_bg6.png"

const shinshouRokuTTitleData: ChapterTitleProps = {
    smallTitleImg: shinshouT,
    largeTitleImg: shinshouT,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 12: Imágenes mentales θ",
    videoLink: "https://www.youtube.com/watch?v=oNWHODZ-THc"
}

const shinshouRokuTTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const shinshouRokuTChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 14, opacity: 0.65, imageSrc: shinshouTBG1 },
    { breakpoint: 25, opacity: 0.55, imageSrc: shinshouTBG2 },
    { breakpoint: 50, opacity: 0.55, imageSrc: shinshouTBG3 },
]

const shinshouRokuTChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 5, opacity: 0.65, imageSrc: shinshouTBG1 },
    { breakpoint: 12, opacity: 0.75, imageSrc: shinshouTBG4 },
    { breakpoint: 20, opacity: 0.75, imageSrc: shinshouTB5 },
    { breakpoint: 22, opacity: 0.55, imageSrc: shinshouTBG2 },
    { breakpoint: 28, opacity: 0.55, imageSrc: shinshouTBG6 },
    { breakpoint: 40, opacity: 0.55, imageSrc: shinshouTBG3 },
]

export const shinshouRokuTData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt12,
    titleData: shinshouRokuTTitleData,
    tsukiMessage1Data: shinshouRokuTTsukiMessageData,
    tsukiMessage2Data: shinshouRokuTTsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuTChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuTChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/shinshouRoku/chapter-11/",
    nextChapterLink: "/shinzou/shinshouRoku/chapter-13/",
}