import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt9 from "../../traducciones/kaisou/chpt_9.txt";
import kaisou9 from "../../assets/kaisou9.jpg";

const kaisouRoku9TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou9,
    largeTitleImg: kaisou9,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 9: Reminiscencias III",
    videoLink: "https://www.youtube.com/watch?v=cHcqI40JpXg"
}

const kaisouRoku9TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku9ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku9ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku9Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt9,
    titleData: kaisouRoku9TitleData,
    tsukiMessage1Data: kaisouRoku9TsukiMessageData,
    tsukiMessage2Data: kaisouRoku9TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku9ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku9ChapterSmallBreakpoints
}