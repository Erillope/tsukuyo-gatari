import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt1 from "../../traducciones/kaisou/chpt_1.txt";
import kaisou1 from "../../assets/kaisou1.jpg";

const kaisouRoku1TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou1,
    largeTitleImg: kaisou1,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 1: Reminiscencias I",
    videoLink: "https://www.youtube.com/watch?v=cHcqI40JpXg"
}

const kaisouRoku1TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku1ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku1ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku1Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt1,
    titleData: kaisouRoku1TitleData,
    tsukiMessage1Data: kaisouRoku1TsukiMessageData,
    tsukiMessage2Data: kaisouRoku1TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku1ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku1ChapterSmallBreakpoints
}