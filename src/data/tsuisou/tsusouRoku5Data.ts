import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import tsuisouChpt5 from "../../traducciones/tsuisou/chpt_5.txt"
import tsuisou5 from "../../assets/tsuisou5.jpg"
import moon2 from "../../assets/moon2.jpg"
import tsuisou5BG1 from "../../assets/tsuisou5_bg1.png"
import tsuisou5BG2 from "../../assets/tsuisou5_bg2.png"
import shinshouIBG1 from "../../assets/shinshou_i_bg1.png"
import tsuisou5BG3 from "../../assets/tsuisou5_bg3.png"
import tsuisou3BG5 from "../../assets/tsuisou3_bg5.png"
import tsuisou5BG4 from "../../assets/tsuisou5_bg4.png"
import tsuisou5BG5 from "../../assets/tsuisou5_bg5.png"
import shinshouDeltaBG1 from "../../assets/shinshou_delta_bg1.png"
import tsuisou5BG6 from "../../assets/tsuisou5_bg6.png"
import tsuisou5BG7 from "../../assets/tsuisou5_bg7.png"
import tsuisou1BG4Small from "../../assets/tsuisou1_bg4_small.png"
import tsuisou5BG8 from "../../assets/tsuisou5_bg8.png"
import tsuisou1bG12 from "../../assets/tsuisou1_bg12.png"
import tsuisou1BG9 from "../../assets/tsuisou1_bg9.png"
import tsuisou5BG9 from "../../assets/tsuisou5_bg9.png"
import tsuisou5BG10 from "../../assets/tsuisou5_bg10.png"
import shinshouABG12Small from "../../assets/shinshou_a_bg12_small.png"
import tsuisou5BG11 from "../../assets/tsuisou5_bg11.png"
import tsuisou5BG12 from "../../assets/tsuisou5_bg12.png"
import tsuisou5BG13 from "../../assets/tsuisou5_bg13.png"
import tsuisou4BG7 from "../../assets/tsuisou4_bg7.png"
import tsuisou5BG14 from "../../assets/tsuisou5_bg14.png"
import tsuisou5BG15 from "../../assets/tsuisou5_bg15.png"
import tsuisouPBG3 from "../../assets/tsuisou_p_bg3.jpg"
import tsuisou5BG16 from "../../assets/tsuisou5_bg16.png"
import tsuisou5BG17 from "../../assets/tsuisou5_bg17.png"
import tsuisou5BG18 from "../../assets/tsuisou5_bg18.png"
import { tsukiTomoriNoKiyuMade } from "../shinzouVideos"
import shinzouCommentBG from "../../assets/shinzou_comment_bg.jpg"

const tsuisou5TitleData: ChapterTitleProps = {
    smallTitleImg: tsuisou5,
    largeTitleImg: tsuisou5,
    jpTitle: "追想録",
    romajiTitle: "Tsuisou Roku",
    esTitle: "Capítulo 5: El talento",
    videoLink: "https://www.youtube.com/watch?v=RugdREg69Nc"
}

const tsuisou5TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon2
}

const tsuisou5ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 20, opacity: 0.7, imageSrc: tsuisou5BG1 },
    { breakpoint: 51, opacity: 0.7, imageSrc: tsuisou5 },
    { breakpoint: 70, opacity: 0.7, imageSrc: shinshouIBG1 },
    { breakpoint: 100, opacity: 0.7, imageSrc: tsuisou5BG3 },
    { breakpoint: 130, opacity: 0.7, imageSrc: tsuisou3BG5 },
    { breakpoint: 142, opacity: 0.7, imageSrc: tsuisou5BG4, position: "left" },
    { breakpoint: 160, opacity: 0.75, imageSrc: tsuisou5BG5 },
    { breakpoint: 175, opacity: 0.8, imageSrc: shinshouDeltaBG1 },
    { breakpoint: 190, opacity: 0.7, imageSrc: tsuisou5BG6 },
    { breakpoint: 300, opacity: 0.3, imageSrc: tsuisou5BG2 },
]

const tsuisou5ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.7, imageSrc: tsuisou5BG7 },
    { breakpoint: 20, opacity: 0.7, imageSrc: tsuisou1BG4Small },
    { breakpoint: 30, opacity: 0.7, imageSrc: tsuisou5 },
    { breakpoint: 40, opacity: 0.7, imageSrc: tsuisou5BG8 },
    { breakpoint: 51, opacity: 0.7, imageSrc: tsuisou1bG12 },
    { breakpoint: 65, opacity: 0.7, imageSrc: tsuisou1BG9 },
    { breakpoint: 81, opacity: 0.7, imageSrc: tsuisou5BG9 },
    { breakpoint: 96, opacity: 0.7, imageSrc: tsuisou5BG10 },
    { breakpoint: 111, opacity: 0.7, imageSrc: shinshouABG12Small },
    { breakpoint: 120, opacity: 0.7, imageSrc: tsuisou5BG11 },
    { breakpoint: 135, opacity: 0.7, imageSrc: tsuisou5BG13},
    { breakpoint: 140, opacity: 0.7, imageSrc: tsuisou5BG12},
    { breakpoint: 145, opacity: 0.75, imageSrc: tsuisou5BG5},
    { breakpoint: 160, opacity: 0.75, imageSrc: tsuisou4BG7},
    { breakpoint: 170, opacity: 0.75, imageSrc: tsuisou5BG14},
    { breakpoint: 180, opacity: 0.65, imageSrc: tsuisou5BG15},
    { breakpoint: 185, opacity: 0.7, imageSrc: tsuisouPBG3},
    { breakpoint: 188, opacity: 0.7, imageSrc: tsuisou5BG17},
    { breakpoint: 192, opacity: 0.7, imageSrc: tsuisou5BG16},
    { breakpoint: 202, opacity: 0.7, imageSrc: tsuisou5BG18},
    { breakpoint: 300, opacity: 0.3, imageSrc: tsuisou5BG2 },
]

export const tsuisou5Data: ChapterPageProps = {
    chapterFile: tsuisouChpt5,
    titleData: tsuisou5TitleData,
    tsukiMessage1Data: tsuisou5TsukiMessageData,
    tsukiMessage2Data: tsuisou5TsukiMessageData,
    chapterLargeBreakpoints: tsuisou5ChapterLargeBreakpoints,
    chapterSmallBreakpoints: tsuisou5ChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/tsuisouRoku/chapter-4/",
    nextChapterLink: "/shinzou/kaisouRoku/chapter-1/",
    videoLinks: [tsukiTomoriNoKiyuMade],
    commentsSection: {
        section: "shinzou/tsuisou/chpt5",
        commentsBG: shinzouCommentBG
    }
}