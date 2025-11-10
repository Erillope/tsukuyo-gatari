import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt7 from "../../traducciones/sorekami/chpt_7.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import kami from "../../assets/kami.png";

const sorekami7TitleData: ChapterTitleProps = {
    smallTitleImg: kami,
    largeTitleImg: kami,
    jpTitle: "ハクメイ",
    romajiTitle: "Hakumei",
    esTitle: "Capítulo final: Efímero",
    videoLink: "https://www.youtube.com/watch?v=eSpqMUOvRkw"
}

const sorekami7ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 250, opacity: 0.7 },
]

const sorekami7ChapterSmallBreakpoints: ChapterBreakpoints[] = [
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

export const sorekami7Data: ChapterPageProps = {
    chapterFile: sorekamiChpt7,
    titleData: sorekami7TitleData,
    chapterLargeBreakpoints: sorekami7ChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami7ChapterSmallBreakpoints,
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-6",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt7",
        commentsBG: sorekamiCommentBG
    }
}