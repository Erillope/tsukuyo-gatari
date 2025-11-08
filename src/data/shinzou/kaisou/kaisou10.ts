import type { ChapterTitleProps } from "../../../components/content/ChapterTitle";
import moon3 from "../../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../../components/content/ChapterContent";
import type { ChapterPageProps } from "../../../pages/ChaptersPage";
import kaisouChpt10 from "../../../traducciones/shinzou/kaisou/chpt_10.txt";
import kaisou10 from "../../../assets/kaisou10.png";
import dawnBG1 from "../../../assets/dawn_bg1.png";
import kaisou10BG1 from "../../../assets/kaisou10_bg1.png";
import shinshouEBG5 from "../../../assets/shinshou_e_bg5.png";
import kaisou10BG2 from "../../../assets/kaisou10_bg2.png";
import kaisou10BG3 from "../../../assets/kaisou10_bg3.png";
import kaisou10BG4 from "../../../assets/kaisou10_bg4.png";
import kaisou10BG5 from "../../../assets/kaisou10_bg5.png";
import kaisou10BGSmall from "../../../assets/kaisou10_bg_small.png";
import kaisou10BG6 from "../../../assets/kaisou10_bg6.png";
import kaisou10BG7 from "../../../assets/kaisou10_bg7.png";
import tsuisou5BG16 from "../../../assets/tsuisou5_bg16.png";
import kaisou10BG8 from "../../../assets/kaisou10_bg8.jpg";
import shinshouEBG11 from "../../../assets/shinshou_e_bg11.png";
import kaisou10BG9 from "../../../assets/kaisou10_bg9.png";
import tsuisou1BG10 from "../../../assets/tsuisou1_bg10.png";
import tsuisouPBG3 from "../../../assets/tsuisou_p_bg3.jpg";
import shinshouABG8Small from "../../../assets/shinshou_a_bg8_small.png";
import kaisou10BG10 from "../../../assets/kaisou10_bg10.png";
import kaisou10BG11 from "../../../assets/kaisou10_bg11.png";
import { byakuya, hanaToCHiru } from "../shinzouVideos";
import shinzouCommentBG from "../../../assets/shinzou_comment_bg.jpg"

const kaisouRoku10TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou10BGSmall,
    largeTitleImg: kaisou10,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 10: Si mis pensamientos se quedaran en el suelo",
    videoLink: "https://www.youtube.com/watch?v=-XbSWEfLuQc"
}

const kaisouRoku10TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const kaisouRoku10ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.7, imageSrc: dawnBG1 },
    { breakpoint: 15, opacity: 0.75, imageSrc: kaisou10BG1 },
    { breakpoint: 25, opacity: 0.7, imageSrc: shinshouEBG5 },
    { breakpoint: 35, opacity: 0.75, imageSrc: kaisou10BG2 },
    { breakpoint: 45, opacity: 0.7, imageSrc: kaisou10BG3 },
    { breakpoint: 55, opacity: 0.75, imageSrc: kaisou10BG5 },
    { breakpoint: 100, opacity: 0.75, imageSrc: kaisou10BG4 }
]

const kaisouRoku10ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 4, opacity: 0.7, imageSrc: dawnBG1 },
    { breakpoint: 8, opacity: 0.75, imageSrc: kaisou10BG6 },
    { breakpoint: 12, opacity: 0.7, imageSrc: kaisou10BG7, position: "right" },
    { breakpoint: 15, opacity: 0.75, imageSrc: tsuisou5BG16 },
    { breakpoint: 22, opacity: 0.7, imageSrc: kaisou10BG8 },
    { breakpoint: 27, opacity: 0.7, imageSrc: shinshouEBG11, position: "right" },
    { breakpoint: 35, opacity: 0.75, imageSrc: kaisou10BG2 },
    { breakpoint: 40, opacity: 0.7, imageSrc: kaisou10BG9 },
    { breakpoint: 45, opacity: 0.75, imageSrc: tsuisou1BG10 },
    { breakpoint: 50, opacity: 0.75, imageSrc: tsuisouPBG3 },
    { breakpoint: 55, opacity: 0.7, imageSrc: shinshouABG8Small },
    { breakpoint: 62, opacity: 0.75, imageSrc: kaisou10BG11 },
    { breakpoint: 100, opacity: 0.75, imageSrc: kaisou10BG10 }

]

export const kaisouRoku10Data: ChapterPageProps = {
    chapterFile: kaisouChpt10,
    titleData: kaisouRoku10TitleData,
    tsukiMessage1Data: kaisouRoku10TsukiMessageData,
    tsukiMessage2Data: kaisouRoku10TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku10ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku10ChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/kaisouRoku/chapter-11/",
    previousChapterLink: "/shinzou/kaisouRoku/chapter-9/",
    videoLinks: [byakuya, hanaToCHiru],
    commentsSection: { section: "shinzou/kaisou/chpt10", commentsBG: shinzouCommentBG }
}
