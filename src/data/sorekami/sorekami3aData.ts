import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt3a from "../../traducciones/sorekami/chpt_3-0.4.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami3a from "../../assets/sorekami3a.jpg";

const sorekami3aTitleData: ChapterTitleProps = {
    smallTitleImg: sorekami3a,
    largeTitleImg: sorekami3a,
    jpTitle: "夜明けのラズリ",
    romajiTitle: "Yoake no Lazuli",
    esTitle: "Capítulo 3-0.4: Lapislázuli del amanecer",
    videoLink: "https://www.youtube.com/watch?v=l9DGrug2n58"
}

const sorekami3aChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 250, opacity: 0.7 },
]

const sorekami3aChapterSmallBreakpoints: ChapterBreakpoints[] = [
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

export const sorekami3aData: ChapterPageProps = {
    chapterFile: sorekamiChpt3a,
    titleData: sorekami3aTitleData,
    chapterLargeBreakpoints: sorekami3aChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami3aChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-3",
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-2",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt3-04",
        commentsBG: sorekamiCommentBG
    }
}