import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt9 from "../../traducciones/kaisou/chpt_9.txt";
import kaisou9 from "../../assets/kaisou9.jpg";
import kaisou1BG2 from "../../assets/kaisou1_bg2.png";

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
    moonImageSrc: moon3
}

const kaisouRoku9ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.6, imageSrc: kaisou1BG2 },
    { breakpoint: 20, opacity: 0.6, imageSrc: kaisou9 },
]

const kaisouRoku9ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.6, imageSrc: kaisou1BG2 },
    { breakpoint: 20, opacity: 0.6, imageSrc: kaisou9 },

]

export const kaisouRoku9Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt9,
    titleData: kaisouRoku9TitleData,
    tsukiMessage1Data: kaisouRoku9TsukiMessageData,
    tsukiMessage2Data: kaisouRoku9TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku9ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku9ChapterSmallBreakpoints
}