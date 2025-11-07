import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import tsuisouChpt1 from "../../traducciones/tsuisou/chpt_1.txt"
import tsuisou1 from "../../assets/tsuisou_1.png"
import tsuisou1BG1 from "../../assets/tsuisou1_bg1.png"
import tsuisou1BG2 from "../../assets/tsuisou1_bg2.png"
import tsuisou1BG3 from "../../assets/tsuisou1_bg3.png"
import tsuisou1BG4 from "../../assets/tsuisou1_bg4.png"
import tsuisou1BG5 from "../../assets/tsuisou1_bg5.png"
import tsuisou1BG6 from "../../assets/tsuisou1_bg6.png"
import tsuisou1BG7 from "../../assets/tsuisou1_bg7.png"
import dawnBG3 from "../../assets/dawn_bg3.png"
import tsuisou1BG2Small from "../../assets/tsuisou1_bg2_small.png"
import tsuisou1BG8 from "../../assets/tsuisou1_bg8.jpg"
import tsuisou1BG9 from "../../assets/tsuisou1_bg9.png"
import tsuisou1BG3Small from "../../assets/tsuisou1_bg3_small.png"
import tsuisou1BG4Small from "../../assets/tsuisou1_bg4_small.png"
import tsuisou1BG4Small2 from "../../assets/tsuisou1_bg4_small2.png"
import tsuisou1BG10 from "../../assets/tsuisou1_bg10.png"
import tsuisou1BG7Small from "../../assets/tsuisou1_bg7_small.png"
import tsuisou1BG11 from "../../assets/tsuisou1_bg11.png"
import tsuisou1BG12 from "../../assets/tsuisou1_bg12.png"
import moon2 from "../../assets/moon2.jpg"
import { crescent, yodaka } from "../shinzouVideos"
import shinzouCommentBG from "../../assets/shinzou_comment_bg.jpg"

const tsuisou1TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisou1,
    largeTitleImg: tsuisou1,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Capítulo 1: El ser humano",
    videoLink: "https://www.youtube.com/watch?v=oNWHODZ-THc"
}

const tsuisou1TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon2
}

const tsuisou1ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8, imageSrc: tsuisou1BG1 },
    { breakpoint: 25, opacity: 0.75, imageSrc: tsuisou1BG2 },
    { breakpoint: 40, opacity: 0.7, imageSrc: tsuisou1BG3 },
    { breakpoint: 50, opacity: 0.7, imageSrc: tsuisou1BG4 },
    { breakpoint: 66, opacity: 0.65, imageSrc: tsuisou1BG5 },
    { breakpoint: 85, opacity: 0.7, imageSrc: tsuisou1BG6 },
    { breakpoint: 100, opacity: 0.7, imageSrc: tsuisou1BG7 },
    { breakpoint: 200, opacity: 0.7, imageSrc: tsuisou1 },
]

const tsuisou1ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.8, imageSrc: dawnBG3 },
    { breakpoint: 14, opacity: 0.75, imageSrc: tsuisou1BG2Small },
    { breakpoint: 18, opacity: 0.5, imageSrc: tsuisou1BG8 },
    { breakpoint: 25, opacity: 0.75, imageSrc: tsuisou1BG9 },
    { breakpoint: 33, opacity: 0.7, imageSrc: tsuisou1BG3Small },
    { breakpoint: 40, opacity: 0.65, imageSrc: tsuisou1BG5 },
    { breakpoint: 50, opacity: 0.7, imageSrc: tsuisou1BG4Small },
    { breakpoint: 60, opacity: 0.7, imageSrc: tsuisou1BG4Small2 },
    { breakpoint: 70, opacity: 0.7, imageSrc: tsuisou1BG10 },
    { breakpoint: 80, opacity: 0.7, imageSrc: tsuisou1BG7Small },
    { breakpoint: 90, opacity: 0.7, imageSrc: tsuisou1BG6 },
    { breakpoint: 100, opacity: 0.7, imageSrc: tsuisou1BG11 },
    { breakpoint: 110, opacity: 0.7, imageSrc: tsuisou1BG12 },
    { breakpoint: 200, opacity: 0.7, imageSrc: tsuisou1 },
]

export const tsuisou1Data: ChapterPageProps = {
    chapterFile: tsuisouChpt1,
    titleData: tsuisou1TitleData,
    tsukiMessage1Data: tsuisou1TsukiMessageData,
    tsukiMessage2Data: tsuisou1TsukiMessageData,
    chapterLargeBreakpoints: tsuisou1ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou1ChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/tsuisouRoku/chapter-0/",
    nextChapterLink: "/shinzou/tsuisouRoku/chapter-2/",
    videoLinks: [crescent, yodaka],
    commentsSection: {
        section: "shinzou/tsuisou/chpt1",
        commentsBG: shinzouCommentBG
    }
}