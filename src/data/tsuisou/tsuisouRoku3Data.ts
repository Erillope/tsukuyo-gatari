import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import tsuisouChpt3 from "../../traducciones/tsuisou/chpt_3.txt"
import tsuisou3 from "../../assets/tsuisou3.png"
import moon2 from "../../assets/moon2.jpg"
import tsuisou3BG1 from "../../assets/tsuisou3_bg1.png"
import tsuisou3BG2 from "../../assets/tsuisou3_bg2.png"
import tsuisou3BG3 from "../../assets/tsuisou3_bg3.png"
import tsuisou3BG4 from "../../assets/tsuisou3_bg4.png"
import tsuisou3BG5 from "../../assets/tsuisou3_bg5.png"
import tsuisou3BG6 from "../../assets/tsuisou3_bg6.png"
import tsuisou3BG7 from "../../assets/tsuisou3_bg7.png"
import tsuisou3BG8 from "../../assets/tsuisou3_bg8.png"
import dawnBG6 from "../../assets/dawn_bg6.png"
import tsuisou3BG2Small from "../../assets/tsuisou3_bg2_small.png"
import tsuisou3BG3Small from "../../assets/tsuisou3_bg3_small.png"
import tsuisou3BG9 from "../../assets/tsuisou3_bg9.png"
import shinshouABG12Small from "../../assets/shinshou_a_bg12_small.png"
import tsuisou3BG10 from "../../assets/tsuisou3_bg10.png"
import tsuisou3BG11 from "../../assets/tsuisou3_bg11.png"
import tsuisou3BG12 from "../../assets/tsuisou3_bg12.png"
import tsuisou3BG13 from "../../assets/tsuisou3_bg13.png"
import tsuisou3BG14 from "../../assets/tsuisou3_bg14.png"
import tsuisou3BG15 from "../../assets/tsuisou3_bg15.png"
import tsuisou3BG16 from "../../assets/tsuisou3_bg16.png"

const tsuisou3TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisou3,
    largeTitleImg: tsuisou3,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Capítulo 3: El arte",
    videoLink: "https://www.youtube.com/watch?v=1hdtk9RZhHY"
}

const tsuisou3TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon2
}

const tsuisou3ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.75, imageSrc: tsuisou3BG1, position: "right" },
    { breakpoint: 20, opacity: 0.75, imageSrc: tsuisou3BG2 },
    { breakpoint: 26, opacity: 0.75, imageSrc: tsuisou3BG3, position: "right" },
    { breakpoint: 35, opacity: 0.75, imageSrc: tsuisou3BG4 },
    { breakpoint: 45, opacity: 0.75, imageSrc: tsuisou3BG5 },
    { breakpoint: 55, opacity: 0.75, imageSrc: tsuisou3BG6 },
    { breakpoint: 70, opacity: 0.75, imageSrc: tsuisou3BG7 },
    { breakpoint: 100, opacity: 0.75, imageSrc: tsuisou3},
    { breakpoint: 200, opacity: 0.8, imageSrc: tsuisou3BG8 },
]

const tsuisou3ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 3, opacity: 0.75, imageSrc: tsuisou3BG1, position: "right" },
    { breakpoint: 10, opacity: 0.75, imageSrc: dawnBG6 },
    { breakpoint: 16, opacity: 0.75, imageSrc: tsuisou3BG4 },
    { breakpoint: 25, opacity: 0.75, imageSrc: tsuisou3BG2Small },
    { breakpoint: 31, opacity: 0.75, imageSrc: tsuisou3BG3Small },
    { breakpoint: 35, opacity: 0.75, imageSrc: tsuisou3BG9 },
    { breakpoint: 40, opacity: 0.75, imageSrc: shinshouABG12Small },
    { breakpoint: 45, opacity: 0.75, imageSrc: tsuisou3BG10 },
    { breakpoint: 50, opacity: 0.75, imageSrc: tsuisou3BG6 },
    { breakpoint: 55, opacity: 0.75, imageSrc: tsuisou3BG11 },
    { breakpoint: 70, opacity: 0.75, imageSrc: tsuisou3BG7 },
    { breakpoint: 80, opacity: 0.75, imageSrc: tsuisou3},
    { breakpoint: 91, opacity: 0.75, imageSrc: tsuisou3BG12 },
    { breakpoint: 100, opacity: 0.75, imageSrc: tsuisou3BG13 },
    { breakpoint: 110, opacity: 0.8, imageSrc: tsuisou3BG15 },
    { breakpoint: 120, opacity: 0.75, imageSrc: tsuisou3BG14 },
    { breakpoint: 200, opacity: 0.75, imageSrc: tsuisou3BG16 },
]

export const tsuisou3Data: ShinshouRokuChapterProps = {
    chapterFile: tsuisouChpt3,
    titleData: tsuisou3TitleData,
    tsukiMessage1Data: tsuisou3TsukiMessageData,
    tsukiMessage2Data: tsuisou3TsukiMessageData,
    chapterLargeBreakpoints: tsuisou3ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou3ChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/tsuisouRoku/chapter-2/",
    nextChapterLink: "/shinzou/tsuisouRoku/chapter-4/",
}