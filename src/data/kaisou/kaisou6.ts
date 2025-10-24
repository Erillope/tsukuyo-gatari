import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt6 from "../../traducciones/kaisou/chpt_6.txt";
import kaisou6 from "../../assets/kaisou6.png";

const kaisouRoku6TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou6,
    largeTitleImg: kaisou6,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 6: La Realidad",
    videoLink: "https://www.youtube.com/watch?v=RugdREg69Nc"
}

const kaisouRoku6TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku6ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku6ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku6Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt6,
    titleData: kaisouRoku6TitleData,
    tsukiMessage1Data: kaisouRoku6TsukiMessageData,
    tsukiMessage2Data: kaisouRoku6TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku6ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku6ChapterSmallBreakpoints
}