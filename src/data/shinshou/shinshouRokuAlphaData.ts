import shinshouA from "../../assets/shinshou_a.png"
import shinshouASmall from "../../assets/shinshou_a_small.png"
import shinshouChpt1 from "../../traducciones/shinshou/chpt_1.txt"
import moon1 from "../../assets/moon1.png"
import shinshouABG1 from "../../assets/shinshou_a_bg1.png"
import shinshouABG2 from "../../assets/shinshou_a_bg2.png"
import shinshouABG2Small from "../../assets/shinshou_a_bg2_small.png"
import shinshouABG3 from "../../assets/shinshou_a_bg3.jpg"
import shinshouABG3Small from "../../assets/shinshou_a_bg3_small.png"
import shinshouABG4Small from "../../assets/shinshou_a_bg4_small.jpg"
import shinshouABG4 from "../../assets/shinshou_a_bg4.png"
import shinshouABG5 from "../../assets/shinshou_a_bg5.png"
import shinshouABG5Small from "../../assets/shinshou_a_bg5_small.png"
import shinshouABG6Small from "../../assets/shinshou_a_bg6_small.png"
import shinshouABG7Small from "../../assets/shinshou_a_bg7_small.png"
import shinshouABG8Small from "../../assets/shinshou_a_bg8_small.png"
import shinshouABG9Small from "../../assets/shinshou_a_bg9_small.png"
import shinshouABG10Small from "../../assets/shinshou_a_bg10_small.png"
import shinshouABG11Small from "../../assets/shinshou_a_bg11_small.png"
import shinshouABG12Small from "../../assets/shinshou_a_bg12_small.png"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ChapterBreakpoints } from "../../components/ChapterContent"

const shinshouRokuAlphaTitleData: ChapterTitleProps = {
    smallTitleImg: shinshouASmall,
    largeTitleImg: shinshouA,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 1: Imágenes mentales α",
    videoLink: "https://www.youtube.com/watch?v=RugdREg69Nc"
}

const shinshouRokuAlphaTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const shinshouRokuAlphaChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.8, imageSrc: shinshouABG1 },
    { breakpoint: 14, opacity: 0.8, imageSrc: shinshouABG2 },
    { breakpoint: 21, opacity: 0.7, imageSrc: shinshouABG3 },
    { breakpoint: 37, opacity: 0.75, imageSrc: shinshouABG4 },
    { breakpoint: 50, opacity: 0.7, imageSrc: shinshouABG5 }
]

const shinshouRokuAlphaChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 2, opacity: 0.8, imageSrc: shinshouASmall, position: 'right center' },
    { breakpoint: 6, opacity: 0.8, imageSrc: shinshouABG2Small },
    { breakpoint: 10, opacity: 0.8, imageSrc: shinshouABG3Small },
    { breakpoint: 15, opacity: 0.75, imageSrc: shinshouABG4 },
    { breakpoint: 17, opacity: 0.7, imageSrc: shinshouABG4Small },
    { breakpoint: 20, opacity: 0.7, imageSrc: shinshouABG5Small },
    { breakpoint: 23, opacity: 0.6, imageSrc: shinshouABG6Small },
    { breakpoint: 26, opacity: 0.7, imageSrc: shinshouABG7Small },
    { breakpoint: 29, opacity: 0.7, imageSrc: shinshouABG8Small },
    { breakpoint: 32, opacity: 0.7, imageSrc: shinshouABG9Small },
    { breakpoint: 36, opacity: 0.7, imageSrc: shinshouABG10Small },
    { breakpoint: 40, opacity: 0.7, imageSrc: shinshouABG11Small },
    { breakpoint: 45, opacity: 0.7, imageSrc: shinshouABG12Small },
    { breakpoint: 50, opacity: 0.7, imageSrc: shinshouABG5 },
]

export const shinshouRokuAlphaData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt1,
    titleData: shinshouRokuAlphaTitleData,
    tsukiMessage1Data: shinshouRokuAlphaTsukiMessageData,
    tsukiMessage2Data: shinshouRokuAlphaTsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuAlphaChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuAlphaChapterSmallBreakpoints
}