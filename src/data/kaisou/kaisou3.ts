import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt3 from "../../traducciones/kaisou/chpt_3.txt";
import kaisou3 from "../../assets/kaisou3.png";
import kaisou3BG1 from "../../assets/kaisou3_bg1.png";
import tsuisouPBG4 from "../../assets/tsuisou_p_bg4.png";
import kaisou3BG2 from "../../assets/kaisou3_bg2.png";
import { Shuuaku } from "../shinzouVideos";

const kaisouRoku3TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou3,
    largeTitleImg: kaisou3,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 3: Aquello que llaman \"El camino correcto\"",
    videoLink: "https://www.youtube.com/watch?v=SrFUh1u2eQg"
}

const kaisouRoku3TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const kaisouRoku3ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.7, imageSrc: kaisou3BG1 },
    { breakpoint: 50, opacity: 0.7, imageSrc: kaisou3 },
]

const kaisouRoku3ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 6, opacity: 0.7, imageSrc: tsuisouPBG4 },
    { breakpoint: 11, opacity: 0.7, imageSrc: kaisou3BG2 },
    { breakpoint: 50, opacity: 0.7, imageSrc: kaisou3 },

]

export const kaisouRoku3Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt3,
    titleData: kaisouRoku3TitleData,
    tsukiMessage1Data: kaisouRoku3TsukiMessageData,
    tsukiMessage2Data: kaisouRoku3TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku3ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku3ChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/kaisouRoku/chapter-4/",
    previousChapterLink: "/shinzou/kaisouRoku/chapter-2/",
    videoLinks: [Shuuaku]
}