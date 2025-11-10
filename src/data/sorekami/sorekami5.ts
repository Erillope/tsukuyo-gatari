import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt5 from "../../traducciones/sorekami/chpt_5.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami5 from "../../assets/sorekami5.png";

const sorekami5TitleData: ChapterTitleProps = {
    smallTitleImg: sorekami5,
    largeTitleImg: sorekami5,
    jpTitle: "予知夢",
    romajiTitle: "Yochimu",
    esTitle: "Capítulo 5: Premonición",
    videoLink: "https://www.youtube.com/watch?v=-qE9d3r1jIE"
}

const sorekami5ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 250, opacity: 0.7 },
]

const sorekami5ChapterSmallBreakpoints: ChapterBreakpoints[] = [
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

export const sorekami5Data: ChapterPageProps = {
    chapterFile: sorekamiChpt5,
    titleData: sorekami5TitleData,
    chapterLargeBreakpoints: sorekami5ChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami5ChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-6",
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-5-01",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt5",
        commentsBG: sorekamiCommentBG
    }
}