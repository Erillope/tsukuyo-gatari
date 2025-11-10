import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt2 from "../../traducciones/sorekami/chpt_2.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami2 from "../../assets/sorekami2.jpg";

const sorekami2TitleData: ChapterTitleProps = {
    smallTitleImg: sorekami2,
    largeTitleImg: sorekami2,
    jpTitle: "ナラティブ",
    romajiTitle: "",
    esTitle: "Capítulo 2: Narrative",
    videoLink: "https://www.youtube.com/watch?v=vrEG95vkeMs&pp=0gcJCQMKAYcqIYzv"
}

const sorekami2ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 250, opacity: 0.7 },
]

const sorekami2ChapterSmallBreakpoints: ChapterBreakpoints[] = [
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

export const sorekami2Data: ChapterPageProps = {
    chapterFile: sorekamiChpt2,
    titleData: sorekami2TitleData,
    chapterLargeBreakpoints: sorekami2ChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami2ChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-3-04",
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-2-307",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt2",
        commentsBG: sorekamiCommentBG
    }
}