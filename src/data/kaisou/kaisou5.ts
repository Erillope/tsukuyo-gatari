import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt5 from "../../traducciones/kaisou/chpt_5.txt";
import kaisou5 from "../../assets/kaisou5.png";

const kaisouRoku5TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou5,
    largeTitleImg: kaisou5,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 5: Las agujas del reloj",
    videoLink: "https://www.youtube.com/watch?v=HRdjQ24WFE8"
}

const kaisouRoku5TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku5ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku5ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku5Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt5,
    titleData: kaisouRoku5TitleData,
    tsukiMessage1Data: kaisouRoku5TsukiMessageData,
    tsukiMessage2Data: kaisouRoku5TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku5ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku5ChapterSmallBreakpoints
}