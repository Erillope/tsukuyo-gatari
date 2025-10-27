import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt7 from "../../traducciones/kaisou/chpt_7.txt";
import kaisou7BG from "../../assets/kaisou7_bg.png";
import kaisou7BGSmall from "../../assets/kaisou7_bg_small.png";
import kaisou7BG1 from "../../assets/kaisou7_bg1.png";
import kaisou7BG2 from "../../assets/kaisou7_bg2.png";
import kaisou7BG3 from "../../assets/kaisou7_bg3.png";
import kaisou7BG4 from "../../assets/kaisou7_bg4.png";
import kaisou7BG5 from "../../assets/kaisou7_bg5.png";
import kaisou7BG6 from "../../assets/kaisou7_bg6.jpeg";
import kaisou7BG7 from "../../assets/kaisou7_bg7.png";
import kaisou7BG8 from "../../assets/kaisou7_bg8.png";

const kaisouRoku7TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou7BGSmall,
    largeTitleImg: kaisou7BG,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 7: Gotas de Lluvia",
    videoLink: "https://www.youtube.com/watch?v=0yIUeoSLTEs"
}

const kaisouRoku7TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const kaisouRoku7ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 11, opacity: 0.7, imageSrc: kaisou7BG1 },
    { breakpoint: 24, opacity: 0.7, imageSrc: kaisou7BG2 },
]

const kaisouRoku7ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 4, opacity: 0.7, imageSrc: kaisou7BG3 },
    { breakpoint: 7, opacity: 0.7, imageSrc: kaisou7BG4 },
    { breakpoint: 11, opacity: 0.6, imageSrc: kaisou7BG5 },
    { breakpoint: 15, opacity: 0.7, imageSrc: kaisou7BG6 },
    { breakpoint: 17, opacity: 0.7, imageSrc: kaisou7BG7 },
    { breakpoint: 30, opacity: 0.7, imageSrc: kaisou7BG8 },

]

export const kaisouRoku7Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt7,
    titleData: kaisouRoku7TitleData,
    tsukiMessage1Data: kaisouRoku7TsukiMessageData,
    tsukiMessage2Data: kaisouRoku7TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku7ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku7ChapterSmallBreakpoints
}