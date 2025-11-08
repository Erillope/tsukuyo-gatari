import type { ChapterBreakpoints } from "../../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../../pages/ChaptersPage"
import shinshouChpt9 from "../../../traducciones/shinzou/shinshou/chpt_9.txt"
import shinshouCBG from "../../../assets/shinshou_c_bg.jpg"
import shinshouCBG1 from "../../../assets/shinshou_c_bg1.jpg"
import shinshouCBG2 from "../../../assets/shinshou_c_bg2.jpg"
import shinshouCBG3 from "../../../assets/shinshou_c_bg3.png"
import shinshouCBG4 from "../../../assets/shinshou_c_bg4.png"
import shinshouCBG5 from "../../../assets/shinshou_c_bg5.png"
import shinshouCBGSmall from "../../../assets/shinshou_c_bg_small.jpg"
import moon1 from "../../../assets/moon1.png"
import { kaisou } from "../shinzouVideos"
import shinzouCommentBG from "../../../assets/shinzou_comment_bg.jpg"

const shinshouRokuCTitleData: ChapterTitleProps = {
    smallTitleImg: shinshouCBGSmall,
    largeTitleImg: shinshouCBG,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 9: Imágenes mentales ζ",
    videoLink: "https://www.youtube.com/watch?v=ndVeUn97Nh0"
}

const shinshouRokuCTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon1
}

const shinshouRokuCChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 30, opacity: 0.7, imageSrc: shinshouCBG1 },
]

const shinshouRokuCChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.7, imageSrc: shinshouCBG1 },
    { breakpoint: 14, opacity: 0.7, imageSrc: shinshouCBG2 },
    { breakpoint: 20, opacity: 0.75, imageSrc: shinshouCBG3 },
    { breakpoint: 25, opacity: 0.75, imageSrc: shinshouCBG5 },
    { breakpoint: 30, opacity: 0.75, imageSrc: shinshouCBG4 },

]

export const shinshouRokuCData: ChapterPageProps = {
    chapterFile: shinshouChpt9,
    titleData: shinshouRokuCTitleData,
    tsukiMessage1Data: shinshouRokuCTsukiMessageData,
    tsukiMessage2Data: shinshouRokuCTsukiMessageData,
    chapterLargeBreakpoints: shinshouRokuCChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuCChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/shinshouRoku/chapter-8/",
    nextChapterLink: "/shinzou/shinshouRoku/chapter-10/",
    videoLinks: [kaisou],
    commentsSection: { section: "shinzou/shinshou/chpt9", commentsBG: shinzouCommentBG }
}
