import type { ChapterTitleProps } from "../../../components/content/ChapterTitle";
import moon3 from "../../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../../components/content/ChapterContent";
import type { ChapterPageProps } from "../../../pages/ChaptersPage";
import kaisouChpt6 from "../../../traducciones/shinzou/kaisou/chpt_6.txt";
import kaisou6 from "../../../assets/kaisou6.png";
import kaisou6BG1 from "../../../assets/kaisou6_bg1.png";
import kaisou6BG2 from "../../../assets/kaisou6_bg2.png";
import coldBG5Small from "../../../assets/cold_bg5_small.png";
import kaisou6BG3 from "../../../assets/kaisou6_bg3.png";
import kaisou6BG4 from "../../../assets/kaisou6_bg4.png";
import { tsukiTomoriNoKiyuMade } from "../shinzouVideos";
import shinzouCommentBG from "../../../assets/shinzou_comment_bg.jpg"

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
    moonImageSrc: moon3
}

const kaisouRoku6ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8, imageSrc: kaisou6BG1 },
    { breakpoint: 20, opacity: 0.7, imageSrc: kaisou6BG2 },
]

const kaisouRoku6ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 3, opacity: 0.7, imageSrc: kaisou6BG1 },
    { breakpoint: 7, opacity: 0.6, imageSrc: coldBG5Small },
    { breakpoint: 13, opacity: 0.6, imageSrc: kaisou6BG3 },
    { breakpoint: 15, opacity: 0.6, imageSrc: kaisou6BG4 },
    { breakpoint: 20, opacity: 0.7, imageSrc: kaisou6BG2 },
]

export const kaisouRoku6Data: ChapterPageProps = {
    chapterFile: kaisouChpt6,
    titleData: kaisouRoku6TitleData,
    tsukiMessage1Data: kaisouRoku6TsukiMessageData,
    tsukiMessage2Data: kaisouRoku6TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku6ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku6ChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/kaisouRoku/chapter-7/",
    previousChapterLink: "/shinzou/kaisouRoku/chapter-5/",
    videoLinks: [tsukiTomoriNoKiyuMade],
    commentsSection: {
        section: "shinzou/kaisou/chpt6",
        commentsBG: shinzouCommentBG
    }
}
