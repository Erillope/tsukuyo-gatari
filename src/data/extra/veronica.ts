import type { ChapterTitleProps } from "../../components/ChapterTitle";
import moon3 from "../../assets/moon3.jpg"
import type { ChapterBreakpoints } from "../../components/ChapterContent";
import type { ShinshouRokuChapterProps } from "../../pages/ShinshouChapters";
import veronicaChpt from "../../traducciones/extra/extra_1.txt";
import veronicaBG from "../../assets/veronica_bg.png"
import extra1 from "../../assets/extra1.png";
import veronicaBG1 from "../../assets/veronica_bg1.png"
import shinshouVBG3 from "../../assets/shinshou_v_bg3.jpg"
import veronicaBG2 from "../../assets/veronica_bg2.png"
import veronicaBG3 from "../../assets/veronica_bg3.png"
import veronicaBG4 from "../../assets/veronica_bg4.png"
import { veronicaVideo } from "../shinzouVideos";

const veronicaTitleData: ChapterTitleProps = {
    smallTitleImg: extra1,
    largeTitleImg: veronicaBG,
    jpTitle: "",
    romajiTitle: "Extra",
    esTitle: "Verónica ベロニカ",
    videoLink: "https://www.youtube.com/watch?v=vzBVlYWPN7Q"
}

const veronicaTsukiMessageData = {
    breakpoint: 1,
    moonImageSrc: moon3
}

const veronicaChapterLargeBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 11, opacity: 0.6, imageSrc: shinshouVBG3 },
    { breakpoint: 20, opacity: 0.7, imageSrc: veronicaBG2 },
    { breakpoint: 30, opacity: 0.7, imageSrc: veronicaBG1 },
    { breakpoint: 50, opacity: 0.7, imageSrc: extra1 },
]

const veronicaChapterSmallBreakpoints: ChapterBreakpoints[] = [
    { breakpoint: 11, opacity: 0.6, imageSrc: shinshouVBG3 },
    { breakpoint: 18, opacity: 0.7, imageSrc: veronicaBG3 },
    { breakpoint: 25, opacity: 0.7, imageSrc: veronicaBG2 },
    { breakpoint: 30, opacity: 0.7, imageSrc: veronicaBG1 },
    { breakpoint: 38, opacity: 0.65, imageSrc: veronicaBG4 },
    { breakpoint: 50, opacity: 0.7, imageSrc: extra1 },
]

export const veronicaData: ShinshouRokuChapterProps = {
    chapterFile: veronicaChpt,
    titleData: veronicaTitleData,
    tsukiMessage1Data: veronicaTsukiMessageData,
    tsukiMessage2Data: veronicaTsukiMessageData,
    chapterLargeBreakpoints: veronicaChapterLargeBreakpoints,
    chapterSmallBreakpoints: veronicaChapterSmallBreakpoints,
    nextChapterLink: "/shinzou/extra/tetra/",
    previousChapterLink: "/shinzou/kaisouRoku/chapter-12/",
    videoLinks: [veronicaVideo]
}