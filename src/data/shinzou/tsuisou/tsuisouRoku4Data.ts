import type { ChapterBreakpoints } from "../../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../../pages/ChaptersPage"
import tsuisouChpt4 from "../../../traducciones/shinzou/tsuisou/chpt_4.txt"
import tsuisou4 from "../../../assets/tsuisou4.png"
import moon2 from "../../../assets/moon2.jpg"
import tsuisou4BG1 from "../../../assets/tsuisou4_bg1.png"
import tsuisou4BG2 from "../../../assets/tsuisou4_bg2.png"
import tsuisou4BG3 from "../../../assets/tsuisou4_bg3.png"
import tsuisou3BG11 from "../../../assets/tsuisou3_bg11.png"
import tsuisou4BG4 from "../../../assets/tsuisou4_bg4.png"
import tsuisou4BG5 from "../../../assets/tsuisou4_bg5.png"
import shinshouBBG2 from "../../../assets/shinshou_b_bg2.png"
import shinshouCBG2 from "../../../assets/shinshou_c_bg2.jpg"
import tsuisou4BG6 from "../../../assets/tsuisou4_bg6.png"
import tsuisou4BG from "../../../assets/tsuisou4_bg.png"
import shinshouABG6Small from "../../../assets/shinshou_a_bg6_small.png"
import tsuisou1BG10 from "../../../assets/tsuisou1_bg10.png"
import tsuisou4BG7 from "../../../assets/tsuisou4_bg7.png"
import dawnBG6 from "../../../assets/dawn_bg6.png"
import tsuisou4BG8 from "../../../assets/tsuisou4_bg8.png"
import tsuisou4BG9 from "../../../assets/tsuisou4_bg9.png"
import dawnBG3 from "../../../assets/dawn_bg3.png"
import tsuisou4BG10 from "../../../assets/tsuisou4_bg10.png"
import tsuisou4BG11 from "../../../assets/tsuisou4_bg11.png"
import tsuisou4BG12 from "../../../assets/tsuisou4_bg12.png"
import tsuisou4BG13 from "../../../assets/tsuisou4_bg13.png"
import tsuisou4BG14 from "../../../assets/tsuisou4_bg14.png"
import { ikiruYosuga, kaisou } from "../shinzouVideos"
import shinzouCommentBG from "../../../assets/shinzou_comment_bg.jpg"

const tsuisou4TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisou4,
    largeTitleImg: tsuisou4BG,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Capítulo 4: Aquello que tiene valor",
    videoLink: "https://www.youtube.com/watch?v=ndVeUn97Nh0"
}

const tsuisou4TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon2
}

const tsuisou4ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.6, imageSrc: tsuisou4BG1 },
    { breakpoint: 28, opacity: 0.75, imageSrc: tsuisou4BG2 },
    { breakpoint: 49, opacity: 0.75, imageSrc: tsuisou4BG3 },
    { breakpoint: 64, opacity: 0.7, imageSrc: tsuisou3BG11 },
    { breakpoint: 81, opacity: 0.7, imageSrc: tsuisou4BG4, position: "right" },
    { breakpoint: 95, opacity: 0.8, imageSrc: tsuisou4BG5 },
    { breakpoint: 116, opacity: 0.7, imageSrc: tsuisou4 },
    { breakpoint: 135, opacity: 0.75, imageSrc: shinshouCBG2 },
    { breakpoint: 150, opacity: 0.5, imageSrc: tsuisou4BG6 },
]

const tsuisou4ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.6, imageSrc: shinshouABG6Small },
    { breakpoint: 14, opacity: 0.75, imageSrc: tsuisou1BG10 },
    { breakpoint: 21, opacity: 0.7, imageSrc: shinshouBBG2 },
    { breakpoint: 30, opacity: 0.7, imageSrc: dawnBG6 },
    { breakpoint: 40, opacity: 0.75, imageSrc: tsuisou4BG7 },
    { breakpoint: 49, opacity: 0.7, imageSrc: tsuisou3BG11 },
    { breakpoint: 61, opacity: 0.7, imageSrc: tsuisou4BG8 },
    { breakpoint: 72, opacity: 0.7, imageSrc: tsuisou4BG9 },
    { breakpoint: 81, opacity: 0.7, imageSrc: dawnBG3 },
    { breakpoint: 90, opacity: 0.75, imageSrc: tsuisou4BG10 },
    { breakpoint: 102, opacity: 0.75, imageSrc: tsuisou4BG11 },
    { breakpoint: 116, opacity: 0.7, imageSrc: tsuisou4 },
    { breakpoint: 123, opacity: 0.6, imageSrc: tsuisou4BG12 },
    { breakpoint: 131, opacity: 0.6, imageSrc: shinshouCBG2 },
    { breakpoint: 137, opacity: 0.7, imageSrc: tsuisou4BG13 },
    { breakpoint: 142, opacity: 0.7, imageSrc: tsuisou4BG14 },
    { breakpoint: 150, opacity: 0.5, imageSrc: tsuisou4BG6 },
]

export const tsuisou4Data: ChapterPageProps = {
    chapterFile: tsuisouChpt4,
    titleData: tsuisou4TitleData,
    tsukiMessage1Data: tsuisou4TsukiMessageData,
    tsukiMessage2Data: tsuisou4TsukiMessageData,
    chapterLargeBreakpoints: tsuisou4ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou4ChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/tsuisouRoku/chapter-3/",
    nextChapterLink: "/shinzou/tsuisouRoku/chapter-5/",
    videoLinks: [kaisou, ikiruYosuga],
    commentsSection: {
        section: "shinzou/tsuisou/chpt4",
        commentsBG: shinzouCommentBG
    }
}
