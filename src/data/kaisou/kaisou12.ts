import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon1 from "../../assets/moon1.png"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt12 from "../../traducciones/kaisou/chpt_12.txt";
import kaisou12 from "../../assets/kaisou12.png";

const kaisouRoku12TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou12,
    largeTitleImg: kaisou12,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Epílogo: Un caso hipotético",
    videoLink: "https://www.youtube.com/watch?v=hZFBTnzKa54"
}

const kaisouRoku12TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const kaisouRoku12ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }
]

const kaisouRoku12ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.85 },
    { breakpoint: 20, opacity: 0.85 },
    { breakpoint: 50, opacity: 0.75 },
    { breakpoint: 100, opacity: 0.75 }

]

export const kaisouRoku12Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt12,
    titleData: kaisouRoku12TitleData,
    tsukiMessage1Data: kaisouRoku12TsukiMessageData,
    tsukiMessage2Data: kaisouRoku12TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku12ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku12ChapterSmallBreakpoints
}