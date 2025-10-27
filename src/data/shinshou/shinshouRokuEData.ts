import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt8 from "../../traducciones/shinshou/chpt_8.txt"
import shinshouE from "../../assets/shinshou_e.jpg"
import shinshouEBG1 from "../../assets/shinshou_e_bg1.png"
import shinshouEBG2 from "../../assets/shinshou_e_bg2.png"
import shinshouEBG3 from "../../assets/shinshou_e_bg3.png"
import shinshouEBG4 from "../../assets/shinshou_e_bg4.png"
import shinshouEBG5 from "../../assets/shinshou_e_bg5.png"
import shinshouEbg6 from "../../assets/shinshou_e_bg6.png"
import shinshouEBG7 from "../../assets/shinshou_e_bg7.png"
import shinshouEBG8 from "../../assets/shinshou_e_bg8.png"
import shinshouEBG9 from "../../assets/shinshou_e_bg9.png"
import shinshouEBG10 from "../../assets/shinshou_e_bg10.png"
import shinshouEBG11 from "../../assets/shinshou_e_bg11.png"
import shinshouEBG12 from "../../assets/shinshou_e_bg12.png"
import shinshouEBG13 from "../../assets/shinshou_e_bg13.png"
import moon1 from "../../assets/moon1.png"

const shinshouRokuETitleData: ChapterTitleProps = {
    smallTitleImg: shinshouE,
    largeTitleImg: shinshouE,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 8: Imágenes mentales ε",
    videoLink: "https://www.youtube.com/watch?v=bLxBGhzqGoQ"
}

const shinshouRokuETsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const shinshouRokuEChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.75, imageSrc: shinshouEBG1 },
    { breakpoint: 20, opacity: 0.75, imageSrc: shinshouEBG2 },
    { breakpoint: 30, opacity: 0.75, imageSrc: shinshouEBG3 },
    { breakpoint: 40, opacity: 0.65, imageSrc: shinshouEBG4 },
    { breakpoint: 50, opacity: 0.7, imageSrc: shinshouEBG5 },
    { breakpoint: 55, opacity: 0.7, imageSrc: shinshouEbg6 },
    { breakpoint: 66, opacity: 0.7, imageSrc: shinshouEBG7 },
    { breakpoint: 80, opacity: 0.7, imageSrc: shinshouEBG8 },
]

const shinshouRokuEChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 2, opacity: 0.75, imageSrc: shinshouEBG1 },
    { breakpoint: 6, opacity: 0.75, imageSrc: shinshouEBG1, position: "left" },
    { breakpoint: 12, opacity: 0.75, imageSrc: shinshouEBG2 },
    { breakpoint: 19, opacity: 0.65, imageSrc: shinshouEBG4 },
    { breakpoint: 30, opacity: 0.75, imageSrc: shinshouEBG3 },
    { breakpoint: 36, opacity: 0.65, imageSrc: shinshouEBG9 },
    { breakpoint: 40, opacity: 0.7, imageSrc: shinshouEBG10 },
    { breakpoint: 42, opacity: 0.7, imageSrc: shinshouEBG12 },
    { breakpoint: 50, opacity: 0.7, imageSrc: shinshouEBG11, position: "right" },
    { breakpoint: 52, opacity: 0.7, imageSrc: shinshouEBG13 },
    { breakpoint: 54, opacity: 0.7, imageSrc: shinshouEbg6 },
    { breakpoint: 62, opacity: 0.7, imageSrc: shinshouEBG11, position: "left" },
    { breakpoint: 66, opacity: 0.7, imageSrc: shinshouEBG7 },
    { breakpoint: 73, opacity: 0.7, imageSrc: shinshouE },
    { breakpoint: 80, opacity: 0.7, imageSrc: shinshouEBG8 },
]

export const shinshouRokuEData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt8,
    titleData: shinshouRokuETitleData,
    tsukiMessage1Data: shinshouRokuETsukiMessageData,
    tsukiMessage2Data: shinshouRokuETsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuEChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuEChapterSmallBreakpoints
}