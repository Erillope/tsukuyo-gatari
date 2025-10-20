import shinshouA from "../assets/shinshou_a.png"
import shinshouB from "../assets/shinshou_b.jpg"
import ambition from "../assets/ambition.jpg"
import shinzouY from "../assets/shinzou_y.png"
import shinshouDelta from "../assets/shinshou_delta.png"
import shinshouE from "../assets/shinshou_e.jpg"
import shinshouC from "../assets/shinshou_c.jpg"
import shinshouN from "../assets/shinshou_n.png"
import shinshouT from "../assets/shinshou_t.png"
import shinshouI from "../assets/shinshou_i.png"
import shinshouV from "../assets/shinshou_v.jpg"
import blue from "../assets/blue.png"
import cold from "../assets/cold.jpg"
import dawn from "../assets/dawn.jpg"
import emerge from "../assets/emerge.png"
import tsuisouP from "../assets/tsuisou_p.png"
import tsuisou1 from "../assets/tsuisou_1.png"
import tsuisou2 from "../assets/tsuisou2.png"
import tsuisou3 from "../assets/tsuisou3.png"
import tsuisou4 from "../assets/tsuisou4.png"
import tsuisou5 from "../assets/tsuisou5.jpg"
import kaisou1 from "../assets/kaisou1.jpg"
import kaisou2 from "../assets/kaisou2.png"
import kaisou3 from "../assets/kaisou3.png"
import kaisou4 from "../assets/kaisou4.png"
import kaisou5 from "../assets/kaisou5.png"
import kaisou6 from "../assets/kaisou6.png"
import kaisou7 from "../assets/kaisou7.png"
import kaisou8 from "../assets/kaisou8.jpg"
import kaisou9 from "../assets/kaisou9.jpg"
import kaisou10 from "../assets/kaisou10.png"
import kaisou11 from "../assets/kaisou11.png"
import kaisou12 from "../assets/kaisou12.png"
import extra1 from "../assets/extra1.png"
import extra2 from "../assets/extra2.png"
import extra3 from "../assets/extra3.jpg"
import type { ChapterSectionProps } from "../components/ChapterSection"
import shinshouSummary from "../traducciones/shinshou_summary.txt"
import tsuisouSummary from "../traducciones/tsuisou_summary.txt"
import kaisouSummary from "../traducciones/kaisou_summary.txt"
import extraSummary from "../traducciones/extra_summary.txt"
import type { NovelTitleProps } from "../components/NovelTitle"
import shinzouBSmall from "../assets/heart4.png"
import shinzouBG from "../assets/heart3.png"

export const shinshouChaptersImages = [shinshouA, shinshouB, ambition, shinzouY, cold, shinshouDelta, emerge,
        shinshouE, shinshouC, dawn, shinshouN, shinshouT, blue, shinshouI, shinshouV];

export const tsuisouChaptersImages = [tsuisouP, tsuisou1, tsuisou2, tsuisou3, tsuisou4, tsuisou5];

export const kaisouChaptersImages = [kaisou1, kaisou2, kaisou3, kaisou4, kaisou5, kaisou6, kaisou7,
    kaisou8, kaisou9, kaisou10, kaisou11, kaisou12];

export const extraChaptersImages = [extra1, extra2, extra3];

export const shinshouChaptersVideos = [
    "https://www.youtube.com/watch?v=RugdREg69Nc",
    "https://www.youtube.com/watch?v=cHcqI40JpXg",
    "https://www.youtube.com/watch?v=LFiodJq4lU4",
    "https://www.youtube.com/watch?v=d3jvkB_0gVY",
    "https://www.youtube.com/watch?v=rSKhmsVi9oo",
    "https://www.youtube.com/watch?v=HKsSGYCRGFk",
    "https://www.youtube.com/watch?v=Zd25wIFJhIo",
    "https://www.youtube.com/watch?v=bLxBGhzqGoQ",
    "https://www.youtube.com/watch?v=ndVeUn97Nh0",
    "https://www.youtube.com/watch?v=Y_j7gHOgYY4",
    "https://www.youtube.com/watch?v=4CVZvOTpLQw",
    "https://www.youtube.com/watch?v=oNWHODZ-THc",
    "https://www.youtube.com/watch?v=Csp715c4kSU",
    "https://www.youtube.com/watch?v=Y_j7gHOgYY4",
    "https://www.youtube.com/watch?v=Y_j7gHOgYY4"
]

export const shinshouChaptersLinks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(num => `/#/shinzou/shinshouRoku/chapter-${num}/`);

export const tsuisouChaptersVideos = [
    "https://www.youtube.com/watch?v=HKsSGYCRGFk",
    "https://www.youtube.com/watch?v=oNWHODZ-THc",
    "https://www.youtube.com/watch?v=ndVeUn97Nh0",
    "https://www.youtube.com/watch?v=1hdtk9RZhHY",
    "https://www.youtube.com/watch?v=ndVeUn97Nh0",
    "https://www.youtube.com/watch?v=RugdREg69Nc"
]

export const kaisouChaptersVideos = [
    "https://www.youtube.com/watch?v=cHcqI40JpXg",
    "https://www.youtube.com/watch?v=HKsSGYCRGFk",
    "https://www.youtube.com/watch?v=SrFUh1u2eQg",
    "https://www.youtube.com/watch?v=1hdtk9RZhHY",
    "https://www.youtube.com/watch?v=HRdjQ24WFE8",
    "https://www.youtube.com/watch?v=RugdREg69Nc",
    "https://www.youtube.com/watch?v=0yIUeoSLTEs",
    "https://www.youtube.com/watch?v=d3jvkB_0gVY",
    "https://www.youtube.com/watch?v=cHcqI40JpXg",
    "https://www.youtube.com/watch?v=-XbSWEfLuQc",
    "https://www.youtube.com/watch?v=2Q9o9kUZXRI",
    "https://www.youtube.com/watch?v=hZFBTnzKa54"
]

export const extraChaptersVideos = [
    "https://www.youtube.com/watch?v=vzBVlYWPN7Q",
    "https://www.youtube.com/watch?v=MlvBKnHhHSc",
    "https://www.youtube.com/watch?v=CaNqOp5Gl8Y"
]

export const shinshouSectionData: ChapterSectionProps = {
    summaryFilePath: shinshouSummary,
    chaptersImages: shinshouChaptersImages,
    chaptersVideos: shinshouChaptersVideos,
    novelTitle: "Shinshou Roku 心象録",
    romajiTitle: "Shinshou Roku",
    jpTitle: "心象録",
    esTitle: "Imágenes mentales",
    sectionId: "shinshou",
    chaptersLinks: shinshouChaptersLinks
}

export const tsuisouSectionData: ChapterSectionProps = {
    summaryFilePath: tsuisouSummary,
    chaptersImages: tsuisouChaptersImages,
    chaptersVideos: tsuisouChaptersVideos,
    novelTitle: "Tsuisou Roku 追想録",
    romajiTitle: "Tsuisou Roku",
    jpTitle: "追想録",
    esTitle: "Imágenes retrospectivas",
    sectionId: "tsuisou"
}

export const kaisouSectionData: ChapterSectionProps = {
    summaryFilePath: kaisouSummary,
    chaptersImages: kaisouChaptersImages,
    chaptersVideos: kaisouChaptersVideos,
    novelTitle: "Kaisou Roku 廻想録",
    romajiTitle: "Kaisou Roku",
    jpTitle: "廻想録",
    esTitle: "Reminiscencias",
    sectionId: "kaisou"
}

export const extraSectionData: ChapterSectionProps = {
    summaryFilePath: extraSummary,
    chaptersImages: extraChaptersImages,
    chaptersVideos: extraChaptersVideos,
    novelTitle: "Extra",
    romajiTitle: "Extra",
    jpTitle: "",
    esTitle: "",
    sectionId: "extra"
}

export const novelTitleData: NovelTitleProps = {
    smallTitleImg: shinzouBSmall,
    largeTitleImg: shinzouBG,
    engTitle: "I want to be your heart",
    jpTitle: "誰かの心臓になれたなら",
    romajiTitle: "Dareka no Shinzou ni Nareta nara",
    esTitle: "Quisiera ser el corazón de alguien",
    videoLink: "https://www.youtube.com/watch?v=hZFBTnzKa54"
}