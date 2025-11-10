import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt1a from "../../traducciones/sorekami/chpt_1-0.4.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami1a from "../../assets/sorekami1a.png";

const sorekami1aTitleData: ChapterTitleProps = {
    smallTitleImg: sorekami1a,
    largeTitleImg: sorekami1a,
    jpTitle: "心燃ゆ",
    romajiTitle: "Kokoro Moyu",
    esTitle: "Capítulo 1-0.4: Corazón ardiente",
    videoLink: "https://www.youtube.com/watch?v=vjbTpBPGvBw"
}

const sorekami1aChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 200, opacity: 0.7 },
]

const sorekami1aChapterSmallBreakpoints: ChapterBreakpoints[] = [
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

export const sorekami1aData: ChapterPageProps = {
    chapterFile: sorekamiChpt1a,
    titleData: sorekami1aTitleData,
    chapterLargeBreakpoints: sorekami1aChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami1aChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-2-307",
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-1/",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt1-04",
        commentsBG: sorekamiCommentBG
    }
}