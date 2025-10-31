import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import shinshouChpt3 from "../../traducciones/shinshou/chpt_3.txt"
import ambition from "../../assets/ambition.jpg"
import ambitionBG from "../../assets/ambition_bg.jpg"
import ambitionBGSmall from "../../assets/ambition_bg_small.png"
import shinshouABG9Small from "../../assets/shinshou_a_bg9_small.png"
import ambitionBG2Small from "../../assets/ambition_bg2_small.png"
import moon1 from "../../assets/moon1.png"
import { kalmia } from "../shinzouVideos"
import shinzouCommentBG from "../../assets/shinzou_comment_bg.jpg"

const ambitionTitleData: ChapterTitleProps = {
    smallTitleImg: ambition,
    largeTitleImg: ambitionBG,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 3: Ambition",
    videoLink: "https://www.youtube.com/watch?v=LFiodJq4lU4"
}

const ambitionTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const ambitionChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 16, opacity: 0.8, imageSrc: ambition },
]

const ambitionChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 4, opacity: 0.8, imageSrc: ambition },
    { breakpoint: 10, opacity: 0.7, imageSrc: ambitionBGSmall },
    { breakpoint: 12, opacity: 0.65, imageSrc: ambitionBG2Small, position: 'left' },
    { breakpoint: 16, opacity: 0.75, imageSrc: shinshouABG9Small },

]

export const ambitionData: ChapterPageProps = {
    chapterFile: shinshouChpt3,
    titleData: ambitionTitleData,
    tsukiMessage1Data: ambitionTsukiMessageData,
    tsukiMessage2Data: ambitionTsukiMessageData,
    chapterLargeBreakpoints: ambitionChapterLargeBreakpoints,
    chapterSmallBreakpoints: ambitionChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/shinshouRoku/chapter-4/",
    previousChapterLink: "/shinzou/shinshouRoku/chapter-2/",
    videoLinks: [kalmia],
    commentsSection: {
        section: "shinzou/shinshou/chpt3",
        commentsBG: shinzouCommentBG
    }
}