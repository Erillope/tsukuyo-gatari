import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt5a from "../../traducciones/sorekami/chpt_5-0.1.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami5a from "../../assets/sorekami5a.jpg";

const sorekami5aTitleData: ChapterTitleProps = {
    smallTitleImg: sorekami5a,
    largeTitleImg: sorekami5a,
    jpTitle: "決意",
    romajiTitle: "Ketsui",
    esTitle: "Capítulo 5-0.1: Determinación",
    videoLink: "https://www.youtube.com/watch?v=vrEG95vkeMs&pp=0gcJCQMKAYcqIYzv"
}

const sorekami5aChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 250, opacity: 0.7 },
]

const sorekami5aChapterSmallBreakpoints: ChapterBreakpoints[] = [
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

export const sorekami5aData: ChapterPageProps = {
    chapterFile: sorekamiChpt5a,
    titleData: sorekami5aTitleData,
    chapterLargeBreakpoints: sorekami5aChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami5aChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-5",
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-4",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt5-01",
        commentsBG: sorekamiCommentBG
    }
}