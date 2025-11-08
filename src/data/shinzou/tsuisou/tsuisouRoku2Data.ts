import type { ChapterBreakpoints } from "../../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../../pages/ChaptersPage"
import tsuisouChpt2 from "../../../traducciones/shinzou/tsuisou/chpt_2.txt"
import tsuisou2 from "../../../assets/tsuisou2.png"
import tsuisou2BG from "../../../assets/tsuisou2_bg.png"
import moon2 from "../../../assets/moon2.jpg"
import tsuisou1 from "../../../assets/tsuisou_1.png"
import dawnBG2 from "../../../assets/dawn_bg2.png"
import tsuisou2BG1 from "../../../assets/tsuisou2_bg1.png"
import dawnBG4 from "../../../assets/dawn_bg4.png"
import tsuisou2BG2 from "../../../assets/tsuisou2_bg2.png"
import tsuisou2BG3 from "../../../assets/tsuisou2_bg3.png"
import emergeBG4 from "../../../assets/emerge_bg4.png"
import tsuisou2BG4 from "../../../assets/tsuisou2_bg4.png"
import tsuisou2BG5 from "../../../assets/tsuisou2_bg5.png"
import shinshouABG6 from "../../../assets/shinshou_a_bg6_small.png"
import tsuisou1BG2 from "../../../assets/tsuisou1_bg2.png"
import shinshouABG10 from "../../../assets/shinshou_a_bg10_small.png"
import tsuisou2BG6 from "../../../assets/tsuisou2_bg6.png"
import tsuisou2BG1Small from "../../../assets/tsuisou2_bg1_small.png"
import shinshouT from "../../../assets/shinshou_t.png"
import tsuisou2BG7 from "../../../assets/tsuisou2_bg7.png"
import tsuisou2BG8 from "../../../assets/tsuisou2_bg8.png"
import tsuisou2BG9 from "../../../assets/tsuisou2_bg9.png"
import blueBG1 from "../../../assets/blue_bg1.png"
import tsuisou1BG6 from "../../../assets/tsuisou1_bg6.png"
import tsuisou2BG10 from "../../../assets/tsuisou2_bg10.png"
import tsuisou2BG11 from "../../../assets/tsuisou2_bg11.png"
import { kaisou } from "../shinzouVideos"
import shinzouCommentBG from "../../../assets/shinzou_comment_bg.jpg"

const tsuisou2TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisou2,
    largeTitleImg: tsuisou2BG,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Capítulo 2: Las buenas nuevas",
    videoLink: "https://www.youtube.com/watch?v=ndVeUn97Nh0"
}

const tsuisou2TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon2
}

const tsuisou2ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.7, imageSrc: tsuisou1 },
    { breakpoint: 29, opacity: 0.75, imageSrc: dawnBG2 },
    { breakpoint: 39, opacity: 0.75, imageSrc: tsuisou2BG1 },
    { breakpoint: 50, opacity: 0.75, imageSrc: dawnBG4 },
    { breakpoint: 75, opacity: 0.75, imageSrc: tsuisou2BG2 },
    { breakpoint: 100, opacity: 0.75, imageSrc: tsuisou2BG3 },
    { breakpoint: 125, opacity: 0.75, imageSrc: emergeBG4 },
    { breakpoint: 140, opacity: 0.75, imageSrc: tsuisou2BG4 },
    { breakpoint: 162, opacity: 0.75, imageSrc: tsuisou2 },
    { breakpoint: 200, opacity: 0.75, imageSrc: tsuisou2BG5 },
]

const tsuisou2ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 4, opacity: 0.7, imageSrc: tsuisou1 },
    { breakpoint: 8, opacity: 0.65, imageSrc: shinshouABG6},
    { breakpoint: 12, opacity: 0.65, imageSrc: tsuisou1BG2, position: "left" },
    { breakpoint: 20, opacity: 0.7, imageSrc: shinshouABG10 },
    { breakpoint: 25, opacity: 0.75, imageSrc: dawnBG2 },
    { breakpoint: 35, opacity: 0.75, imageSrc: tsuisou2BG6 },
    { breakpoint: 44, opacity: 0.75, imageSrc: tsuisou2BG1Small },
    { breakpoint: 50, opacity: 0.75, imageSrc: dawnBG4, position: "left" },
    { breakpoint: 60, opacity: 0.75, imageSrc: tsuisou2BG2 },
    { breakpoint: 65, opacity: 0.8, imageSrc: shinshouT },
    { breakpoint: 75, opacity: 0.75, imageSrc: tsuisou2BG3 },
    { breakpoint: 90, opacity: 0.75, imageSrc: emergeBG4 },
    { breakpoint: 100, opacity: 0.75, imageSrc: tsuisou2BG7 },
    { breakpoint: 115, opacity: 0.75, imageSrc: tsuisou2BG4 },
    { breakpoint: 125, opacity: 0.75, imageSrc: tsuisou2BG8 },
    { breakpoint: 130, opacity: 0.8, imageSrc: tsuisou2BG9 },
    { breakpoint: 135, opacity: 0.6, imageSrc: blueBG1 },
    { breakpoint: 147, opacity: 0.75, imageSrc: tsuisou2 },
    { breakpoint: 160, opacity: 0.8, imageSrc: tsuisou1BG6 },
    { breakpoint: 165, opacity: 0.7, imageSrc: tsuisou2BG10, position: "left" },
    { breakpoint: 174, opacity: 0.6, imageSrc: tsuisou2BG11 },
    { breakpoint: 200, opacity: 0.75, imageSrc: tsuisou2BG5 },
]

export const tsuisou2Data: ChapterPageProps = {
    chapterFile: tsuisouChpt2,
    titleData: tsuisou2TitleData,
    tsukiMessage1Data: tsuisou2TsukiMessageData,
    tsukiMessage2Data: tsuisou2TsukiMessageData,
    chapterLargeBreakpoints: tsuisou2ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou2ChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/tsuisouRoku/chapter-1/",
    nextChapterLink: "/shinzou/tsuisouRoku/chapter-3/",
    videoLinks: [kaisou],
    commentsSection: {
        section: "shinzou/tsuisou/chpt2",
        commentsBG: shinzouCommentBG
    }
}
