import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import ookamiChpt from "../../traducciones/extra/extra_3.txt";
import extra3 from "../../assets/extra3.jpg";
import ookamiBG from "../../assets/ookami_bg.jpg"
import ookamiBG1 from "../../assets/ookami_bg1.png"
import ookamiBG2 from "../../assets/ookami_bg2.png"
import ookamiBG3 from "../../assets/ookami_bg3.png"
import ookamiBG4 from "../../assets/ookami_bg4.png"

const ookamiTitleData: ChapterTitleProps = {
    smallTitleImg: extra3,
    largeTitleImg: ookamiBG,
    jpTitle: "",
    romajiTitle: "Extra",
    esTitle: "Ookami Shounen 狼少年",
    videoLink: "https://www.youtube.com/watch?v=kKCIUMOLIZk"
}

const ookamiTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const ookamiChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 7, opacity: 0.8, imageSrc: ookamiBG1 },
    { breakpoint: 20, opacity: 0.75, imageSrc: ookamiBG2 },
]

const ookamiChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 3, opacity: 0.8, imageSrc: ookamiBG3 },
    { breakpoint: 8, opacity: 0.75, imageSrc: ookamiBG2 },
    { breakpoint: 20, opacity: 0.7, imageSrc: ookamiBG4 },
]

export const ookamiData: ShinshouRokuChapterProps = {
    chapterFile: ookamiChpt,
    titleData: ookamiTitleData,
    tsukiMessage1Data: ookamiTsukiMessageData,
    tsukiMessage2Data: ookamiTsukiMessageData,
    chapterLargeBreakpoints: ookamiChapterLargeBreakpoints,
    chapterSmallBreakpoints: ookamiChapterSmallBreakpoints,
    previousChapterLink: "/shinzou/extra/tetra/",
}