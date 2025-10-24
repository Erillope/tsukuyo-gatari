import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt3 from "../../traducciones/kaisou/chpt_3.txt";
import kaisou3 from "../../assets/kaisou3.png";

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
    moonImageSrc: moon1
}

const kaisouRoku3ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku3ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku3Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt3,
    titleData: kaisouRoku3TitleData,
    tsukiMessage1Data: kaisouRoku3TsukiMessageData,
    tsukiMessage2Data: kaisouRoku3TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku3ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku3ChapterSmallBreakpoints
}