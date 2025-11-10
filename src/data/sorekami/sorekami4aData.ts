import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt4a from "../../traducciones/sorekami/chpt_4-0.5.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami4a from "../../assets/sorekami4a.png";

const sorekami4aTitleData: ChapterTitleProps = {
    smallTitleImg: sorekami4a,
    largeTitleImg: sorekami4a,
    jpTitle: "死神",
    romajiTitle: "Shinigami",
    esTitle: "Capítulo 4-0.5: Deidad de la muerte",
    videoLink: "https://www.youtube.com/watch?v=7RkQ8X6P_3k"
}

const sorekami4aChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 250, opacity: 0.7 },
]

const sorekami4aChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.8 },
    { breakpoint: 14, opacity: 0.75 },
    { breakpoint: 18, opacity: 0.5 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 33, opacity: 0.7 },
    { breakpoint: 40, opacity: 0.65 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 60, opacity: 0.7 },
    { breakpoint: 70, opacity: 0.7 },
    { breakpoint: 80, opacity: 0.7 },
    { breakpoint: 90, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 110, opacity: 0.7 },
    { breakpoint: 250, opacity: 0.7 },
]

export const sorekami4aData: ChapterPageProps = {
    chapterFile: sorekamiChpt4a,
    titleData: sorekami4aTitleData,
    chapterLargeBreakpoints: sorekami4aChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami4aChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-4",
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-3",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt4-05",
        commentsBG: sorekamiCommentBG
    }
}