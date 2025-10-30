import type { ChapterTitleProps } from "../../components/ChapterTitle";
import shinshouB2 from "../../assets/shinshou_b2.jpg";
import shinshouBSmall from "../../assets/shinshou_b_small.jpg";
import shinshouBBG1 from "../../assets/shinshou_b_bg1.png"
import shinshouBBG2 from "../../assets/shinshou_b_bg2.png"
import shinshouBBG3 from "../../assets/shinshou_b_bg3.png"
import shinshouBBG4 from "../../assets/shinshou_b_bg4.png"
import shinshouBBG5 from "../../assets/shinshou_b_bg5.png"
import shinshouBBG3Small from "../../assets/shinshou_b_bg3_small.png"
import shinshouABG11Small from "../../assets/shinshou_a_bg11_small.png"
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import shinshouChpt2 from "../../traducciones/shinshou/chpt_2.txt";

const shinshouRokuBetaTitleData: ChapterTitleProps = {
    smallTitleImg: shinshouBSmall,
    largeTitleImg: shinshouB2,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 2: Imágenes mentales β",
    videoLink: "https://www.youtube.com/watch?v=cHcqI40JpXg"
}

const shinshouRokuBetaTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const shinshouRokuBetaChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.85, imageSrc: shinshouBBG1 },
    { breakpoint: 14, opacity: 0.85, imageSrc: shinshouBBG2 },
    { breakpoint: 21, opacity: 0.75, imageSrc: shinshouBBG3 }
]

const shinshouRokuBetaChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 2, opacity: 0.85, imageSrc: shinshouBBG1 },
    { breakpoint: 6, opacity: 0.85, imageSrc: shinshouBBG4 },
    { breakpoint: 10, opacity: 0.8, imageSrc: shinshouBBG2 },
    { breakpoint: 12, opacity: 0.75, imageSrc: shinshouBBG5 },
    { breakpoint: 15, opacity: 0.7, imageSrc: shinshouABG11Small },
    { breakpoint: 20, opacity: 0.75, imageSrc: shinshouBBG3Small },

]

export const shinshouRokuBetaData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt2,
    titleData: shinshouRokuBetaTitleData,
    tsukiMessage1Data: shinshouRokuBetaTsukiMessageData,
    tsukiMessage2Data: shinshouRokuBetaTsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuBetaChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuBetaChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/shinshouRoku/chapter-3/",
    previousChapterLink: "/shinzou/shinshouRoku/chapter-1/",
}