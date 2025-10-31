import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import shinshouChpt4 from "../../traducciones/shinshou/chpt_4.txt"
import shinshouY from "../../assets/shinzou_y.png"
import shinzouYBG from "../../assets/shinshou_y_bg.png"
import shinshouYBG2Small from "../../assets/shinshou_y_bg2_small.png"
import moon1 from "../../assets/moon1.png"
import { ifu } from "../shinzouVideos"
import shinzouCommentBG from "../../assets/shinzou_comment_bg.jpg"

const shinshouRokuYTitleData: ChapterTitleProps = {
    smallTitleImg: shinzouYBG,
    largeTitleImg: shinzouYBG,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 4: Imágenes mentales γ",
    videoLink: "https://www.youtube.com/watch?v=d3jvkB_0gVY"
}

const shinshouRokuYTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const shinshouRokuYChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 14, opacity: 0.75, imageSrc: shinshouY, position: 'top center' },
]

const shinshouRokuYChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 6, opacity: 0.8, imageSrc: shinshouY, position: 'center' },
    { breakpoint: 13, opacity: 0.7, imageSrc: shinshouYBG2Small },
]

export const shinshouRokuYData: ChapterPageProps = {
    chapterFile: shinshouChpt4,
    titleData: shinshouRokuYTitleData,
    tsukiMessage1Data: shinshouRokuYTsukiMessageData,
    tsukiMessage2Data: shinshouRokuYTsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuYChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuYChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/shinshouRoku/chapter-3/",
    nextChapterLink: "/shinzou/shinshouRoku/chapter-5/",
    videoLinks: [ifu],
    commentsSection: { section: "shinzou/shinshou/chpt4", commentsBG: shinzouCommentBG }
}