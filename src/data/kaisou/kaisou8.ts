import type { ChapterTitleProps } from "../../components/content/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/content/ChapterContent";
import type { ChapterPageProps } from "../../pages/ChaptersPage";
import kaisouChpt8 from "../../traducciones/kaisou/chpt_8.txt";
import kaisou8 from "../../assets/kaisou8.jpg";
import shinshouY from "../../assets/shinzou_y.png";
import kaisou8BG1 from "../../assets/kaisou8_bg1.jpg";
import kaisou8BG2 from "../../assets/kaisou8_bg2.png";
import kaisou8BG3 from "../../assets/kaisou8_bg3.png";
import kaisou8BG4 from "../../assets/kaisou8_bg4.png";
import kaisou8BG5 from "../../assets/kaisou8_bg5.png";
import kaisou8BG6 from "../../assets/kaisou8_bg6.png";
import { ifu } from "../shinzouVideos";
import shinzouCommentBG from "../../assets/shinzou_comment_bg.jpg"

const kaisouRoku8TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou8,
    largeTitleImg: kaisou8,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 8: Reminiscencias ***",
    videoLink: "https://www.youtube.com/watch?v=d3jvkB_0gVY"
}

const kaisouRoku8TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const kaisouRoku8ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.75, imageSrc: shinshouY },
    { breakpoint: 20, opacity: 0.7, imageSrc: kaisou8BG2 },
    { breakpoint: 32, opacity: 0.75, imageSrc: kaisou8BG1 },
]

const kaisouRoku8ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.75, imageSrc: shinshouY },
    { breakpoint: 12, opacity: 0.7, imageSrc: kaisou8BG4 },
    { breakpoint: 17, opacity: 0.7, imageSrc: kaisou8BG3 },
    { breakpoint: 23, opacity: 0.7, imageSrc: kaisou8BG5 },
    { breakpoint: 32, opacity: 0.7, imageSrc: kaisou8BG6 },
]

export const kaisouRoku8Data: ChapterPageProps = {
    chapterFile: kaisouChpt8,
    titleData: kaisouRoku8TitleData,
    tsukiMessage1Data: kaisouRoku8TsukiMessageData,
    tsukiMessage2Data: kaisouRoku8TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku8ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku8ChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/kaisouRoku/chapter-9/",
    previousChapterLink: "/shinzou/kaisouRoku/chapter-7/",
    videoLinks: [ifu],
    commentsSection: {
        section: "shinzou/kaisou/chpt8",
        commentsBG: shinzouCommentBG
    }
}
