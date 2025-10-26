import type { ChapterBreakpoints } from "../../components/ChapterContent"
import type { ChapterTitleProps } from "../../components/ChapterTitle"
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters"
import shinshouChpt15 from "../../traducciones/shinshou/chpt_15.txt"
import shinshouV from "../../assets/shinshou_v.jpg"
import shinshouVBG1 from "../../assets/shinshou_v_bg1.png"
import shinshouVBG2 from "../../assets/shinshou_v_bg2.jpg"
import shinshouVBG3 from "../../assets/shinshou_v_bg3.jpg"

const shinshouRokuVTitleData: ChapterTitleProps = {
    smallTitleImg: shinshouV,
    largeTitleImg: shinshouV,
    jpTitle: "心象録",
    romajiTitle: "Shinshou Roku",
    esTitle: "Capítulo 15: Imágenes mentales ν",
    videoLink: "https://www.youtube.com/watch?v=Y_j7gHOgYY4"
}

const shinshouRokuVTsukiMessageData1 = {
    breakpoint: 1,
}

const shinshouRokuVTsukiMessageData2 = {
    breakpoint: 1,
}

const shinshouRokuVChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 5, opacity: 0.7, imageSrc: shinshouVBG1 },
    { breakpoint: 10, opacity: 0, imageSrc: shinshouVBG2 },
    { breakpoint: 50, opacity: 0.7, imageSrc: shinshouVBG3 },
]

const shinshouRokuVChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 5, opacity: 0.7, imageSrc: shinshouVBG1  },
    { breakpoint: 10, opacity: 0.3, imageSrc: shinshouVBG2, position: 'right' },
    { breakpoint: 50, opacity: 0.7, imageSrc: shinshouVBG3 },
]

export const shinshouRokuVData: ShinshouRokuChapterProps = {
    chapterFile: shinshouChpt15,
    titleData: shinshouRokuVTitleData,
    tsukiMessage1Data: shinshouRokuVTsukiMessageData1,
    tsukiMessage2Data: shinshouRokuVTsukiMessageData2,
    chapterLargeBreakpoints: shinshouRokuVChapterLargeBreakpoints,
    chapterSmallBreakpoints: shinshouRokuVChapterSmallBreakpoints
}