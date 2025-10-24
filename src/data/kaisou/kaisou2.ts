import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt2 from "../../traducciones/kaisou/chpt_2.txt";
import kaisou2 from "../../assets/kaisou2.png";

const kaisouRoku2TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou2,
    largeTitleImg: kaisou2,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 2: Reminiscencias II",
    videoLink: "https://www.youtube.com/watch?v=HKsSGYCRGFk"
}

const kaisouRoku2TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku2ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku2ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku2Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt2,
    titleData: kaisouRoku2TitleData,
    tsukiMessage1Data: kaisouRoku2TsukiMessageData,
    tsukiMessage2Data: kaisouRoku2TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku2ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku2ChapterSmallBreakpoints
}