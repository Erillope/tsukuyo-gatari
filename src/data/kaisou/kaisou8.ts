import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt8 from "../../traducciones/kaisou/chpt_8.txt";
import kaisou8 from "../../assets/kaisou8.jpg";

const kaisouRoku8TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou8,
    largeTitleImg: kaisou8,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 8: Reminiscencias ***",
    videoLink: "https://www.youtube.com/watch?v=d3jvkB_0gVY"
}

const kaisouRoku8TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku8ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku8ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku8Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt8,
    titleData: kaisouRoku8TitleData,
    tsukiMessage1Data: kaisouRoku8TsukiMessageData,
    tsukiMessage2Data: kaisouRoku8TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku8ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku8ChapterSmallBreakpoints
}