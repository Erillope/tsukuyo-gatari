import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt4 from "../../traducciones/kaisou/chpt_4.txt";
import kaisou4 from "../../assets/kaisou4.png";
import tsuisou1BG2 from "../../assets/tsuisou1_bg2.png";
import tsuisou1BG5 from "../../assets/tsuisou1_bg5.png";
import kaisou4BG3 from "../../assets/kaisou4_bg3.png";
import tsuisou1BG2Small from "../../assets/tsuisou1_bg2_small.png";
import shinshouTBG1 from "../../assets/shinshou_t_bg1.png"
import tsuisou3 from "../../assets/tsuisou3.png";

const kaisouRoku4TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou4,
    largeTitleImg: kaisou4,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 4: Ilusión y Fascinación",
    videoLink: "https://www.youtube.com/watch?v=1hdtk9RZhHY"
}

const kaisouRoku4TsukiMessageData1 = {
    breakpoint: 2,
    moonImageSrc: moon3
}

const kaisouRoku4TsukiMessageData2 = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const kaisouRoku4ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.75, imageSrc: tsuisou1BG2 },
    { breakpoint: 20, opacity: 0.75, imageSrc: tsuisou1BG5 },
    { breakpoint: 50, opacity: 0.75, imageSrc: kaisou4BG3 },
]

const kaisouRoku4ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.75, imageSrc: tsuisou1BG2Small },
    { breakpoint: 15, opacity: 0.75, imageSrc: tsuisou1BG5 },
    { breakpoint: 18, opacity: 0.75, imageSrc: shinshouTBG1, position: "left" },
    { breakpoint: 25, opacity: 0.75, imageSrc: tsuisou3 },
    { breakpoint: 50, opacity: 0.75, imageSrc: kaisou4BG3 },

]

export const kaisouRoku4Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt4,
    titleData: kaisouRoku4TitleData,
    tsukiMessage1Data: kaisouRoku4TsukiMessageData1,
    tsukiMessage2Data: kaisouRoku4TsukiMessageData2,
    chapterLargeBreakpoints: kaisouRoku4ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku4ChapterSmallBreakpoints
}