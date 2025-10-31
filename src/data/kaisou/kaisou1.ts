import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt1 from "../../traducciones/kaisou/chpt_1.txt";
import kaisou1 from "../../assets/kaisou1.jpg";
import kaisou1BG from "../../assets/kaisou1_bg.jpg";
import shinshouABG3 from "../../assets/shinshou_a_bg3.jpg";
import kaisou1BG1 from "../../assets/kaisou1_bg1.png";
import kaisou1BG2 from "../../assets/kaisou1_bg2.png";
import shinshouABG4Small from "../../assets/shinshou_a_bg4_small.jpg";
import kaisou1BG3 from "../../assets/kaisou1_bg3.png";
import kaisou1BG4 from "../../assets/kaisou1_bg4.png";
import kaisou1BG5 from "../../assets/kaisou1_bg5.png";
import kaisou1BG6 from "../../assets/kaisou1_bg6.png";
import { mahiruNoTsukiAkari, yoruNiAi } from "../shinzouVideos";

const kaisouRoku1TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou1,
    largeTitleImg: kaisou1BG,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 1: Reminiscencias I",
    videoLink: "https://www.youtube.com/watch?v=cHcqI40JpXg"
}

const kaisouRoku1TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const kaisouRoku1ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.5, imageSrc: shinshouABG3 },
    { breakpoint: 14, opacity: 0.7, imageSrc: kaisou1BG1 },
    { breakpoint: 25, opacity: 0.6, imageSrc: kaisou1BG2 },
]

const kaisouRoku1ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 4, opacity: 0.5, imageSrc: shinshouABG4Small },
    { breakpoint: 10, opacity: 0.6, imageSrc: kaisou1BG3 },
    { breakpoint: 14, opacity: 0.7, imageSrc: kaisou1BG4 },
    { breakpoint: 16, opacity: 0.6, imageSrc: kaisou1BG5 },
    { breakpoint: 25, opacity: 0.6, imageSrc: kaisou1BG6 },
]

export const kaisouRoku1Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt1,
    titleData: kaisouRoku1TitleData,
    tsukiMessage1Data: kaisouRoku1TsukiMessageData,
    tsukiMessage2Data: kaisouRoku1TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku1ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku1ChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/kaisouRoku/chapter-2/",
    previousChapterLink: "/shinzou/tsuisouRoku/chapter-5/",
    videoLinks: [mahiruNoTsukiAkari, yoruNiAi]
}