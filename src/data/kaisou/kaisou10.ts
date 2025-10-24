import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt10 from "../../traducciones/kaisou/chpt_10.txt";
import kaisou10 from "../../assets/kaisou10.png";

const kaisouRoku10TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou10,
    largeTitleImg: kaisou10,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 10: Si mis pensamientos se quedaran en el suelo",
    videoLink: "https://www.youtube.com/watch?v=-XbSWEfLuQc"
}

const kaisouRoku10TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku10ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku10ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku10Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt10,
    titleData: kaisouRoku10TitleData,
    tsukiMessage1Data: kaisouRoku10TsukiMessageData,
    tsukiMessage2Data: kaisouRoku10TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku10ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku10ChapterSmallBreakpoints
}