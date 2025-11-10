import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt6 from "../../traducciones/sorekami/chpt_6.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami6 from "../../assets/sorekami6.jpg";

const sorekami6TitleData: ChapterTitleProps = {
    smallTitleImg: sorekami6,
    largeTitleImg: sorekami6,
    jpTitle: "現実",
    romajiTitle: "Genjitsu",
    esTitle: "Capítulo 6: La dura realidad",
    videoLink: "https://www.youtube.com/watch?v=l9DGrug2n58"
}

const sorekami6ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 250, opacity: 0.7 },
]

const sorekami6ChapterSmallBreakpoints: ChapterBreakpoints[] = [
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

export const sorekami6Data: ChapterPageProps = {
    chapterFile: sorekamiChpt6,
    titleData: sorekami6TitleData,
    chapterLargeBreakpoints: sorekami6ChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami6ChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-7",
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-5",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt6",
        commentsBG: sorekamiCommentBG
    }
}