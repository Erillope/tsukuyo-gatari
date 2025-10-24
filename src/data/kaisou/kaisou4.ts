import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt4 from "../../traducciones/kaisou/chpt_4.txt";
import kaisou4 from "../../assets/kaisou4.png";

const kaisouRoku4TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou4,
    largeTitleImg: kaisou4,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 4: Ilusión y Fascinación",
    videoLink: "https://www.youtube.com/watch?v=1hdtk9RZhHY"
}

const kaisouRoku4TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku4ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku4ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku4Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt4,
    titleData: kaisouRoku4TitleData,
    tsukiMessage1Data: kaisouRoku4TsukiMessageData,
    tsukiMessage2Data: kaisouRoku4TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku4ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku4ChapterSmallBreakpoints
}