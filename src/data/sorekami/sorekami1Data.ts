import type { ChapterBreakpoints } from "../../components/content/ChapterContent"
import type { ChapterTitleProps } from "../../components/content/ChapterTitle"
import type { ChapterPageProps } from "../../pages/ChaptersPage"
import sorekamiChpt1 from "../../traducciones/sorekami/chpt_1.txt"
import sorekamiCommentBG from "../../assets/sorekami_comment_bg.jpg"
import sorekami1 from "../../assets/sorekami1.jpg";
import sorekami1BG1 from "../../assets/sorekami1_bg1.png";
import sorekami1BG2 from "../../assets/sorekami1_bg2.png";
import sorekami1BG3 from "../../assets/sorekami1_bg3.png";
import sorekami1BG4 from "../../assets/sorekami1_bg4.png";
import sorekami1BG5 from "../../assets/sorekami1_bg5.png";
import shinshouiBG1 from "../../assets/shinshou_i_bg1.png";
import sorekami1BG6 from "../../assets/sorekami1_bg6.png";
import sorekami1BG7 from "../../assets/sorekami1_bg7.png";
import sorekami1BG8 from "../../assets/sorekami1_bg8.png";
import sorekami1BG9 from "../../assets/sorekami1_bg9.png";
import sorekami1BG10 from "../../assets/sorekami1_bg10.png";
import tsuisou1BG10 from "../../assets/tsuisou1_bg10.png";
import sorekami1BG11 from "../../assets/sorekami1_bg11.png";
import sorekami1BG12 from "../../assets/sorekami1_bg12.png";
import shinshouABG10Small from "../../assets/shinshou_a_bg10_small.png";
import sorekami1BG13 from "../../assets/sorekami1_bg13.png";
import kaisou6BG2 from "../../assets/kaisou6_bg2.png";
import tsuisouPBG5 from "../../assets/tsuisou_p_bg5.png";
import shinshouTBG5 from "../../assets/shinshou_t_bg5.png";
import sorekami1BG14 from "../../assets/sorekami1_bg14.png";
import sorekami1BG15 from "../../assets/sorekami1_bg15.png";
import sorekami1BG16 from "../../assets/sorekami1_bg16.png";
import veronicaBG1 from "../../assets/veronica_bg1.png";
import sorekami1BG17 from "../../assets/sorekami1_bg17.png";
import sorekami1BG18 from "../../assets/sorekami1_bg18.png";

const sorekami1TitleData: ChapterTitleProps = {
    smallTitleImg: sorekami1,
    largeTitleImg: sorekami1,
    jpTitle: "死よりうるわしい",
    romajiTitle: "Shi yori uruwashii",
    esTitle: "Capítulo 1: Más hermoso que la muerte",
    videoLink: "https://www.youtube.com/watch?v=7RkQ8X6P_3k"
}

const sorekami1ChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 10, opacity: 0.75, imageSrc: sorekami1BG1 },
    { breakpoint: 27, opacity: 0.75, imageSrc: sorekami1BG2 },
    { breakpoint: 40, opacity: 0.75, imageSrc: sorekami1BG3 },
    { breakpoint: 54, opacity: 0.75, imageSrc: sorekami1BG4, position: "right" },
    { breakpoint: 68, opacity: 0.75, imageSrc: sorekami1BG5 },
    { breakpoint: 80, opacity: 0.6, imageSrc: shinshouiBG1 },
    { breakpoint: 100, opacity: 0.75, imageSrc: sorekami1BG6 },
    { breakpoint: 122, opacity: 0.75, imageSrc: sorekami1BG7 },
    { breakpoint: 136, opacity: 0.75, imageSrc: sorekami1BG8 },
    { breakpoint: 200, opacity: 0.75, imageSrc: sorekami1BG9 },
]

const sorekami1ChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 5, opacity: 0.7, imageSrc: sorekami1BG1 },
    { breakpoint: 7, opacity: 0.7, imageSrc: tsuisou1BG10 },
    { breakpoint: 9, opacity: 0.7, imageSrc: sorekami1BG10 },
    { breakpoint: 14, opacity: 0.7, imageSrc: sorekami1BG11 },
    { breakpoint: 23, opacity: 0.6, imageSrc: sorekami1BG12 },
    { breakpoint: 30, opacity: 0.7, imageSrc: sorekami1BG3 },
    { breakpoint: 37, opacity: 0.7, imageSrc: shinshouABG10Small },
    { breakpoint: 44, opacity: 0.7, imageSrc: sorekami1BG6 },
    { breakpoint: 46, opacity: 0.7, imageSrc: sorekami1BG13, position: "left" },
    { breakpoint: 50, opacity: 0.7, imageSrc: kaisou6BG2 },
    { breakpoint: 58, opacity: 0.7, imageSrc: sorekami1BG5 },
    { breakpoint: 67, opacity: 0.7, imageSrc: tsuisouPBG5 },
    { breakpoint: 75, opacity: 0.7, imageSrc: shinshouiBG1 },
    { breakpoint: 84, opacity: 0.7, imageSrc: shinshouTBG5 },
    { breakpoint: 93, opacity: 0.7, imageSrc: sorekami1BG6 },
    { breakpoint: 100, opacity: 0.7, imageSrc: sorekami1BG14 },
    { breakpoint: 107, opacity: 0.7, imageSrc: sorekami1BG15 },
    { breakpoint: 111, opacity: 0.7, imageSrc: sorekami1BG16 },
    { breakpoint: 117, opacity: 0.7, imageSrc: veronicaBG1 },
    { breakpoint: 125, opacity: 0.7, imageSrc: sorekami1BG17 },
    { breakpoint: 136, opacity: 0.7, imageSrc: sorekami1BG8 },
    { breakpoint: 145, opacity: 0.5, imageSrc: sorekami1BG9 },
    { breakpoint: 200, opacity: 0.7, imageSrc: sorekami1BG18 },
]

export const sorekami1Data: ChapterPageProps = {
    chapterFile: sorekamiChpt1,
    titleData: sorekami1TitleData,
    chapterLargeBreakpoints: sorekami1ChapterLargeBreakpoints,
    chapterSmallBreakpoints: sorekami1ChapterSmallBreakpoints,
    nextChapterLink: "/sorekami/chapter-1-04/",
    listChaptersLink: "/sorekami/",
    videoLinks: [],
    commentsSection: {
        section: "sorekami/chapters/chpt1",
        commentsBG: sorekamiCommentBG
    }
}