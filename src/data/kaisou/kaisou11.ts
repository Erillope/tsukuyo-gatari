import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt11 from "../../traducciones/kaisou/chpt_11.txt";
import kaisou11 from "../../assets/kaisou11.png";

const kaisouRoku11TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou11,
    largeTitleImg: kaisou11,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 11: Reminiscencias IV",
    videoLink: "https://www.youtube.com/watch?v=2Q9o9kUZXRI"
}

const kaisouRoku11TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku11ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku11ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku11Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt11,
    titleData: kaisouRoku11TitleData,
    tsukiMessage1Data: kaisouRoku11TsukiMessageData,
    tsukiMessage2Data: kaisouRoku11TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku11ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku11ChapterSmallBreakpoints
}