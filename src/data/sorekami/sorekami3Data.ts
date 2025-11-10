import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt3 from "../../traducciones/sorekami/chpt_3.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami3 from "../../assets/sorekami3.jpg";

const sorekami3TitleData: ChapterTitleProps = {
    smallTitleImg: sorekami3,
    largeTitleImg: sorekami3,
    jpTitle: "導火",
    romajiTitle: "Douka",
    esTitle: "Capítulo 3: Detonante",
    videoLink: "https://www.youtube.com/watch?v=meh8utrAqHQ"
}

const sorekami3ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 250, opacity: 0.7 },
]

const sorekami3ChapterSmallBreakpoints: ChapterBreakpoints[] = [
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

export const sorekami3Data: ChapterPageProps = {
    chapterFile: sorekamiChpt3,
    titleData: sorekami3TitleData,
    chapterLargeBreakpoints: sorekami3ChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami3ChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-4-05",
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-3-04",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt3",
        commentsBG: sorekamiCommentBG
    }
}