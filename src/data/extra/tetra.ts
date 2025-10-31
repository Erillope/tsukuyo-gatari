import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ChapterPageProps } from "../../pages/ChaptersPage";
import tetraChpt from "../../traducciones/extra/extra_2.txt";
import tetraBG from "../../assets/tetra_bg.png"
import tetraBG1 from "../../assets/tetra_bg1.png"
import tetraBG2 from "../../assets/tetra_bg2.png"
import tetraBG3 from "../../assets/tetra_bg3.png"
import tetraBG4 from "../../assets/tetra_bg4.png"
import tetraBG5 from "../../assets/tetra_bg5.png"
import tetraBG6 from "../../assets/tetra_bg6.png"
import tetraBG7 from "../../assets/tetra_bg7.png"
import tetraBG8 from "../../assets/tetra_bg8.png"
import { tetraVideo } from "../shinzouVideos";
import shinzouCommentBG from "../../assets/shinzou_comment_bg.jpg"

const tetraTitleData: ChapterTitleProps = {
    smallTitleImg: tetraBG,
    largeTitleImg: tetraBG,
    jpTitle: "",
    romajiTitle: "Extra",
    esTitle: "En algún lugar también llamado el rincón de TETRA 或いはテトラの片隅で",
    videoLink: "https://www.youtube.com/watch?v=MlvBKnHhHSc"
}

const tetraTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const tetraChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 14, opacity: 0.6, imageSrc: tetraBG2 },
    { breakpoint: 26, opacity: 0.7, imageSrc: tetraBG3 },
    { breakpoint: 35, opacity: 0.75, imageSrc: tetraBG4 },
    { breakpoint: 50, opacity: 0.75, imageSrc: tetraBG1 },
]

const tetraChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.6, imageSrc: tetraBG2 },
    { breakpoint: 14, opacity: 0.7, imageSrc: tetraBG3 },
    { breakpoint: 18, opacity: 0.8, imageSrc: tetraBG4 },
    { breakpoint: 21, opacity: 0.7, imageSrc: tetraBG5 },
    { breakpoint: 27, opacity: 0.8, imageSrc: tetraBG8 },
    { breakpoint: 35, opacity: 0.75, imageSrc: tetraBG6 },
    { breakpoint: 41, opacity: 0.75, imageSrc: tetraBG7 },
    { breakpoint: 50, opacity: 0.75, imageSrc: tetraBG1 },
]

export const tetraData: ChapterPageProps = {
    chapterFile: tetraChpt,
    titleData: tetraTitleData,
    tsukiMessage1Data: tetraTsukiMessageData,
    tsukiMessage2Data: tetraTsukiMessageData,
    chapterLargeBreakpoints: tetraChapterLargeBreakpoints,
    chapterSmallBreakpoints: tetraChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/extra/ookami/",
    previousChapterLink: "/shinzou/extra/veronica/",
    videoLinks: [tetraVideo],
    commentsSection: {
        section: "shinzou/extra/tetra",
        commentsBG: shinzouCommentBG
    }
}
