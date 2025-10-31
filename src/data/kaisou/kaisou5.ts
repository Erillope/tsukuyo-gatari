import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ChapterPageProps } from "../../pages/ChaptersPage";
import kaisouChpt5 from "../../traducciones/kaisou/chpt_5.txt";
import kaisou5 from "../../assets/kaisou5.png";
import kaisou5BG1 from "../../assets/kaisou5_bg1.png";
import shinshouNBG3 from "../../assets/shinshou_n_bg3.png";
import kaisou5BG2 from "../../assets/kaisou5_bg2.png";
import { kureNiAkane } from "../shinzouVideos";
import shinzouCommentBG from "../../assets/shinzou_comment_bg.jpg"

const kaisouRoku5TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou5,
    largeTitleImg: kaisou5,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Capítulo 5: Las agujas del reloj",
    videoLink: "https://www.youtube.com/watch?v=HRdjQ24WFE8"
}

const kaisouRoku5TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const kaisouRoku5ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.75, imageSrc: shinshouNBG3 },
    { breakpoint: 20, opacity: 0.75, imageSrc: kaisou5BG1 },
]

const kaisouRoku5ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 5, opacity: 0.75, imageSrc: shinshouNBG3 },
    { breakpoint: 12, opacity: 0.75, imageSrc: kaisou5BG1 },
    { breakpoint: 16, opacity: 0.75, imageSrc: kaisou5 },
    { breakpoint: 20, opacity: 0.75, imageSrc: kaisou5BG2 },

]

export const kaisouRoku5Data: ChapterPageProps = {
    chapterFile: kaisouChpt5,
    titleData: kaisouRoku5TitleData,
    tsukiMessage1Data: kaisouRoku5TsukiMessageData,
    tsukiMessage2Data: kaisouRoku5TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku5ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku5ChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/kaisouRoku/chapter-6/",
    previousChapterLink: "/shinzou/kaisouRoku/chapter-4/",
    videoLinks: [kureNiAkane],
    commentsSection: {
        section: "shinzou/kaisou/chpt5",
        commentsBG: shinzouCommentBG
    }
}
