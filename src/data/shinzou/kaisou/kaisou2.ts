import type { ChapterTitleProps } from "../../../components/content/ChapterTitle";
import moon3 from "../../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../../components/content/ChapterContent";
import type { ChapterPageProps } from "../../../pages/ChaptersPage";
import kaisouChpt2 from "../../../traducciones/shinzou/kaisou/chpt_2.txt";
import kaisou2 from "../../../assets/kaisou2.png";
import kaisou1 from "../../../assets/kaisou1.jpg";
import shinshouDeltaBG1 from "../../../assets/shinshou_delta_bg1.png"
import shinshouBBG3 from "../../../assets/shinshou_b_bg3.png"
import shinshouI from "../../../assets/shinshou_i.png"
import tsuisou5BG14 from "../../../assets/tsuisou5_bg14.png"
import shinshouBBG3Small from "../../../assets/shinshou_b_bg3_small.png"
import { ikiruYosuga, konnaInochiGaNakereba } from "../shinzouVideos";
import shinzouCommentBG from "../../../assets/shinzou_comment_bg.jpg"

const kaisouRoku2TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou2,
    largeTitleImg: kaisou2,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 2: Reminiscencias II",
    videoLink: "https://www.youtube.com/watch?v=HKsSGYCRGFk"
}

const kaisouRoku2TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const kaisouRoku2ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.7, imageSrc: shinshouDeltaBG1 },
    { breakpoint: 20, opacity: 0.7, imageSrc: shinshouBBG3 },
    { breakpoint: 30, opacity: 0.7, imageSrc: shinshouI },
    { breakpoint: 100, opacity: 0.7, imageSrc: kaisou2 },
]

const kaisouRoku2ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.7, imageSrc: tsuisou5BG14 },
    { breakpoint: 15, opacity: 0.7, imageSrc: shinshouBBG3Small },
    { breakpoint: 20, opacity: 0.7, imageSrc: kaisou1 },
    { breakpoint: 30, opacity: 0.7, imageSrc: shinshouI },
    { breakpoint: 100, opacity: 0.7, imageSrc: kaisou2, position: 'left' },

]

export const kaisouRoku2Data: ChapterPageProps = {
    chapterFile: kaisouChpt2,
    titleData: kaisouRoku2TitleData,
    tsukiMessage1Data: kaisouRoku2TsukiMessageData,
    tsukiMessage2Data: kaisouRoku2TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku2ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku2ChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/kaisouRoku/chapter-3/",
    previousChapterLink: "/shinzou/kaisouRoku/chapter-1/",
    videoLinks: [ikiruYosuga, konnaInochiGaNakereba],
    commentsSection: {
        section: "shinzou/kaisou/chpt2",
        commentsBG: shinzouCommentBG
    }
}
