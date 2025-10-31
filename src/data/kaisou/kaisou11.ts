import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import kaisouChpt11 from "../../traducciones/kaisou/chpt_11.txt";
import kaisou11 from "../../assets/kaisou11.png";
import kaisou11BG1 from "../../assets/kaisou11_bg1.png";
import kaisou11BG2 from "../../assets/kaisou11_bg2.png";
import shinshouN from "../../assets/shinshou_n.png";
import shinshouNBGSmall from "../../assets/shinshou_n_bg_small.png";
import shinshouDeltaBG2Small from "../../assets/shinshou_delta_bg2_small.png";
import kaisou11BG3 from "../../assets/kaisou11_bg3.png";
import kaisou11BG4 from "../../assets/kaisou11_bg4.png";
import { hanaNiAmeWo, iWantToBeYourHeart, tsukiGaMichiru } from "../shinzouVideos";

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
    moonImageSrc: moon3
}

const kaisouRoku11ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 6, opacity: 0.75, imageSrc: kaisou11BG1 },
    { breakpoint: 15, opacity: 0.8, imageSrc: shinshouN, position: "top" },
    { breakpoint: 100, opacity: 0.75, imageSrc: kaisou11BG2 }
]

const kaisouRoku11ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 6, opacity: 0.75, imageSrc: kaisou11BG1 },
    { breakpoint: 11, opacity: 0.8, imageSrc: shinshouNBGSmall },
    { breakpoint: 16, opacity: 0.65, imageSrc: shinshouDeltaBG2Small },
    { breakpoint: 21, opacity: 0.7, imageSrc: kaisou11BG4 },
    { breakpoint: 100, opacity: 0.75, imageSrc: kaisou11BG3, position: "left" }

]

export const kaisouRoku11Data: ShinshouRokuChapterProps = {
    chapterFile: kaisouChpt11,
    titleData: kaisouRoku11TitleData,
    tsukiMessage1Data: kaisouRoku11TsukiMessageData,
    tsukiMessage2Data: kaisouRoku11TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku11ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku11ChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/kaisouRoku/chapter-12/",
    previousChapterLink: "/shinzou/kaisouRoku/chapter-10/",
    videoLinks: [tsukiGaMichiru, hanaNiAmeWo, iWantToBeYourHeart]
}