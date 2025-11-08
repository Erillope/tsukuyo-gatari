import type { ChapterTitleProps } from "../../../components/content/ChapterTitle";
import moon3 from "../../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../../components/content/ChapterContent";
import type { ChapterPageProps } from "../../../pages/ChaptersPage";
import kaisouChpt12 from "../../../traducciones/shinzou/kaisou/chpt_12.txt";
import kaisou12 from "../../../assets/kaisou12.png";
import kaisou12BG1 from "../../../assets/kaisou12_bg1.png"
import kaisou12BG2 from "../../../assets/kaisou12_bg2.png"
import kaisou12BG3 from "../../../assets/kaisou12_bg3.png"
import kaisou12BG from "../../../assets/kaisou12_bg.png"
import kaisou12BG4 from "../../../assets/kaisou12_bg4.png"
import kaisou12BG5 from "../../../assets/kaisou12_bg5.png"
import kaisou12BG6 from "../../../assets/kaisou12_bg6.png"
import { iWantToBeYourHeart } from "../shinzouVideos";
import shinzouCommentBG from "../../../assets/shinzou_comment_bg.jpg"

const kaisouRoku12TitleData: ChapterTitleProps = {
    smallTitleImg: kaisou12,
    largeTitleImg: kaisou12BG,
    jpTitle: "廻想録",
    romajiTitle: "Kaisou Roku",
    esTitle: "Epílogo: Un caso hipotético",
    videoLink: "https://www.youtube.com/watch?v=hZFBTnzKa54"
}

const kaisouRoku12TsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const kaisouRoku12ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.75, imageSrc: kaisou12BG1 },
    { breakpoint: 20, opacity: 0.7, imageSrc: kaisou12BG2 },
    { breakpoint: 40, opacity: 0.7, imageSrc: kaisou12BG3 },
]

const kaisouRoku12ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.75, imageSrc: kaisou12BG4 },
    { breakpoint: 12, opacity: 0.7, imageSrc: kaisou12BG2 },
    { breakpoint: 20, opacity: 0.65, imageSrc: kaisou12BG5 },
    { breakpoint: 23, opacity: 0.7, imageSrc: kaisou12BG3 },
    { breakpoint: 40, opacity: 0.65, imageSrc: kaisou12BG6 },

]

export const kaisouRoku12Data: ChapterPageProps = {
    chapterFile: kaisouChpt12,
    titleData: kaisouRoku12TitleData,
    tsukiMessage1Data: kaisouRoku12TsukiMessageData,
    tsukiMessage2Data: kaisouRoku12TsukiMessageData,
    chapterLargeBreakpoints: kaisouRoku12ChapterLargeBreakpoints,
    chapterSmallBreakpoints: kaisouRoku12ChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/extra/veronica/",
    previousChapterLink: "/shinzou/kaisouRoku/chapter-11/",
    videoLinks: [iWantToBeYourHeart],
    commentsSection: { section: "shinzou/kaisou/chpt12", commentsBG: shinzouCommentBG }
}
