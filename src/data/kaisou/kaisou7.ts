import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt7 from "../../traducciones/kaisou/chpt_7.txt";
import kaisou7 from "../../assets/kaisou7.png";

const kaisouRoku7TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou7,
    largeTitleImg: kaisou7,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 7: Gotas de Lluvia",
    videoLink: "https://www.youtube.com/watch?v=0yIUeoSLTEs"
}

const kaisouRoku7TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku7ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku7ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku7Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt7,
    titleData: kaisouRoku7TitleData,
    tsukiMessage1Data: kaisouRoku7TsukiMessageData,
    tsukiMessage2Data: kaisouRoku7TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku7ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku7ChapterSmallBreakpoints
}