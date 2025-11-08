import type { NovelTitleProps } from "../../components/content/NovelTitle";
import sorekamiBG from "../../assets/sorekami_bg.jpg";
import sorekamiBGSmall from "../../assets/sorekami_bg_small.jpg";
import type { ChapterSectionProps } from "../../components/content/ChapterSection";
import sorekamiChptsSummary from "../../traducciones/sorekami/sorekami_chpts_summary.txt";
import sorekami1 from "../../assets/sorekami1.jpg";
import sorekami1a from "../../assets/sorekami1a.png";
import sorekami2a from "../../assets/sorekami2a.jpg";
import sorekami2 from "../../assets/sorekami2.jpg";
import sorekami3a from "../../assets/sorekami3a.jpg";
import sorekami3 from "../../assets/sorekami3.jpg";
import sorekami4a from "../../assets/sorekami4a.png";
import sorekami4 from "../../assets/sorekami4.jpg";
import sorekami5a from "../../assets/sorekami5a.jpg";
import sorekami5 from "../../assets/sorekami5.png";
import sorekami6 from "../../assets/sorekami6.jpg";
import kami from "../../assets/kami.png";
import type { MenuOptionData } from "../../components/layout/MenuBar";

const sorekamiImages = [sorekami1, sorekami1a, sorekami2a, sorekami2, sorekami3a, sorekami3, sorekami4a,
                        sorekami4, sorekami5a, sorekami5, sorekami6, kami];

const sorekamiVideos: string[] = [
    "https://www.youtube.com/watch?v=7RkQ8X6P_3k",
    "https://www.youtube.com/watch?v=vjbTpBPGvBw",
    "https://www.youtube.com/watch?v=Yyqw-BHRmfw",
    "https://www.youtube.com/watch?v=vrEG95vkeMs&pp=0gcJCQMKAYcqIYzv",
    "https://www.youtube.com/watch?v=l9DGrug2n58",
    "https://www.youtube.com/watch?v=meh8utrAqHQ",
    "https://www.youtube.com/watch?v=7RkQ8X6P_3k",
    "https://www.youtube.com/watch?v=meh8utrAqHQ",
    "https://www.youtube.com/watch?v=vrEG95vkeMs&pp=0gcJCQMKAYcqIYzv",
    "https://www.youtube.com/watch?v=-qE9d3r1jIE",
    "https://www.youtube.com/watch?v=l9DGrug2n58",
    "https://www.youtube.com/watch?v=eSpqMUOvRkw",
];

export const sorekamiSubsectionsLinks: string[] = ["chpt1", "", "chpt2", "", "chpt3", "", "chpt4", "", "chpt5", "", "chpt6", ""];

export const novelTitleData: NovelTitleProps = {
    smallTitleImg: sorekamiBGSmall,
    largeTitleImg: sorekamiBG,
    engTitle: "We call it the deity",
    romajiTitle: "Sore wo bokura wa kami sama to yobu",
    jpTitle: "それを僕らは神様と呼ぶ",
    esTitle: "Eso es a lo que llamamos una deidad",
    videoLink: "https://www.youtube.com/watch?v=-qE9d3r1jIE"
}

export const sorekamiSummary: ChapterSectionProps = {
    summaryFilePath: sorekamiChptsSummary,
    chaptersImages: sorekamiImages,
    chaptersVideos: sorekamiVideos,
    novelTitle: "We call it the deity それを僕らは神様と呼ぶ",
    romajiTitle: "We call it the deity",
    jpTitle: "それを僕らは神様と呼ぶ",
    esTitle: "Eso es a lo que llamamos una deidad",
    sectionId: "sorekami",
    chaptersLinks: [],
    subsectionsLinks: sorekamiSubsectionsLinks
}

export const menuOptionsData: MenuOptionData[] = [
    { to: "chpt1", text: "Capítulo 1: Más hermoso que la muerte / Corazón ardiente" },
    { to: "chpt2", text: "Capítulo 2: Narrative / Glorioso otoño" },
    { to: "chpt3", text: "Capítulo 3: Detonante / Lapislázuli del amanecer" },
    { to: "chpt4", text: "Capítulo 4: Una luz de esperanza / Dedidad de la muerte" },
    { to: "chpt5", text: "Capítulo 5: Premonición / Determinación" },
    { to: "chpt6", text: "Capítulo final: La dura realidad / Efímero" },
    { to: "comentarios", text: "Comentarios" },
]