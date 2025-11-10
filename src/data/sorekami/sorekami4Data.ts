import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt4 from "../../traducciones/sorekami/chpt_4.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami4 from "../../assets/sorekami4.jpg";

const sorekami4TitleData: ChapterTitleProps = {
    smallTitleImg: sorekami4,
    largeTitleImg: sorekami4,
    jpTitle: "",
    romajiTitle: "",
    esTitle: "Capítulo 4: Una luz de esperanza",
    videoLink: "https://www.youtube.com/watch?v=meh8utrAqHQ"
}

const sorekami4ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.8 },
    { breakpoint: 25, opacity: 0.75 },
    { breakpoint: 40, opacity: 0.7 },
    { breakpoint: 50, opacity: 0.7 },
    { breakpoint: 66, opacity: 0.65 },
    { breakpoint: 85, opacity: 0.7 },
    { breakpoint: 100, opacity: 0.7 },
    { breakpoint: 250, opacity: 0.7 },
]

const sorekami4ChapterSmallBreakpoints: ChapterBreakpoints[] = [
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

export const sorekami4Data: ChapterPageProps = {
    chapterFile: sorekamiChpt4,
    titleData: sorekami4TitleData,
    chapterLargeBreakpoints: sorekami4ChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami4ChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-5-01",
    listChaptersLink: "/sorekami/",
    previousChapterLink: "/sorekami/chapter-4-05",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt4",
        commentsBG: sorekamiCommentBG
    }
}