import shinzouResume from "../assets/heart.png"
import soreKamiResume from "../assets/kami.png"
import paradeResume from "../assets/parade.jpg"
import ningenResume from "../assets/ningen.jpg"
import shinzouSummary from "../traducciones/shinzou_summary.txt"
import soreKamiSummary from "../traducciones/sorekami_summary.txt"
import paradeSummary from "../traducciones/parade_summary.txt"
import ningenSummary from "../traducciones/ningen_summary.txt"
import icon1 from "../assets/icon1.jpg"
import icon2 from "../assets/icon2.jpg"
import icon3 from "../assets/icon3.jpg"
import icon4 from "../assets/icon4.png"
import icon5 from "../assets/icon5.png"
import icon6 from "../assets/icon6.png"
import icon7 from "../assets/icon7.png"
import icon8 from "../assets/icon8.png"
import icon9 from "../assets/icon9.png"
import type { CatalogoNovelasProps } from "../components/content/CatalogoNovelas";
import type { NovelResumeProps } from "../components/content/NovelResume"

const shinzouResumeData: NovelResumeProps = {
    sumaryFile: shinzouSummary,
    image: shinzouResume,
    to: "shinzou/",
    videoLink: "https://www.youtube.com/watch?v=jS-Ws3x-39o"
}

const soreKamiResumeData: NovelResumeProps = {
    sumaryFile: soreKamiSummary,
    image: soreKamiResume,
    to: "sorekami/",
    videoLink: "https://www.youtube.com/watch?v=4aulzXoY6ME"
}

const paradeResumeData: NovelResumeProps = {
    sumaryFile: paradeSummary,
    image: paradeResume,
    to: "parade/",
    videoLink: "https://www.youtube.com/watch?v=cNvsug-S38Y"
}

const ningenResumeData: NovelResumeProps = {
    sumaryFile: ningenSummary,
    image: ningenResume,
    to: "ningen/",
    videoLink: "https://www.youtube.com/watch?v=0qY9rsBAKPk"
}

export const catalogoNovelaData: CatalogoNovelasProps = {
    novelResumes: [
        shinzouResumeData,
        soreKamiResumeData,
        paradeResumeData,
        ningenResumeData
    ]
}

export const commenticons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];