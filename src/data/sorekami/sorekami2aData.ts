import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt2a from "../../traducciones/sorekami/chpt_2.307.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami2a from "../../assets/sorekami2a.jpg";

const sorekami2aTitleData: ChapterTitleProps = {
    smallTitleImg: sorekami2a,
    largeTitleImg: sorekami2a,
    jpTitle: "秋うらら",
    romajiTitle: "Aki urara",
    esTitle: "Capítulo 2.307: Glorioso otoño",
    videoLink: "https://www.youtube.com/watch?v=Yyqw-BHRmfw"
}

const sorekami2aChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 200, opacity: 0.7 },
]

const sorekami2aChapterSmallBreakpoints: ChapterBreakpoints[] = [
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
    { breakpoint: 200, opacity: 0.7 },
]

export const sorekami2aData: ChapterPageProps = {
    chapterFile: sorekamiChpt2a,
    titleData: sorekami2aTitleData,
    chapterLargeBreakpoints: sorekami2aChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami2aChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-2",
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-1-04",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt2-307",
        commentsBG: sorekamiCommentBG
    }
}