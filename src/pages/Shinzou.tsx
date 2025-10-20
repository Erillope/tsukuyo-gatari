import { Box, Divider } from "@mui/material";
import "../styles.css";
import { shinshouSectionData, tsuisouSectionData, kaisouSectionData, extraSectionData, novelTitleData } from "../hooks/shinzouData";
import { NovelTitle } from "../components/NovelTitle";
import { ChapterSection } from "../components/ChapterSection";
import { RBox } from "../components/RBox";
import { LectureTypography, RTypography } from "../components/RTypography";
import shinzouSummary from "../traducciones/shinzou_summary.txt"
import { Introduction } from "../components/Introduction";
import { LectureTitle } from "../components/LectureTitle";
import { Video } from "../components/Video";
import { ScrollLink } from "../components/ScrollLink";
import MenuBar from "../components/MenuBar";

export const Shinzou = () => {

    return (
        <Box width="100vw" component="main" display={'flex'} flexDirection={'column'} id="principal">
            <MenuBar />
            <NovelTitle {...novelTitleData} />
            <Introduction summaryFilePath={shinzouSummary} />
            <TraductionDetails />
            <InfoChapters />
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 } }} />
            <TeaserVideo />
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 } }} />
            <ChapterSection {...shinshouSectionData} />
            <ChapterSection {...tsuisouSectionData} />
            <ChapterSection {...kaisouSectionData} />
            <ChapterSection {...extraSectionData} />
            <VisualNovel />
        </Box>
    )
}

const TraductionDetails = () => {
    const shinzouLink = () => <a href="https://sorekami.tsukuyomi2943.com/1ststory_summary/" target="_blank" rel="noopener noreferrer">Tsukuyomi Official Page</a>;
    return (
        <RBox className="black-bg"
            component="section">
            <RTypography variant="h3" className="title text-center mt-4">
                Detalles de la traducción
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                El sitio oficial de la novela es {shinzouLink()}. He traducido la novela de aquí y también del canal y contenido de los albumes de Tsukuyomi / Yurry Canon.
                <br /> Solo hay un pequeño detalle de la traducción que me gustaría aclarar: Los nombres de las protagonistas ユマ(Yuma) y リノ(Rino).
                <br /> En especial el nombre de リノ que en letras romanas se escribe "Rino", sin embargo en español la pronunciación de la letra "R" al inicio de una palabra
                es diferente a la pronunciación de la "R" en japonés (En español es una "R" fuerte, mientras que en japonés es una "R" suave),
                por lo que decidí cambiar la "R" por una "L" para que la pronunciación fuera más cercana a la original. (De todas maneras en el japonés no hay distinción entre "R" y "L").
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                <br /> Así que en esta traducción, el nombre de リノ(Rino) lo verán escrito como "Lino".
                <br /> Espero que disfruten la lectura tanto como yo disfruté traducirla 💖
            </RTypography>
        </RBox>
    )
}

const InfoChapters = () => {
    return (
        <RBox >
            <Box display={"flex"} flexDirection="row" width={'100%'} justifyContent="center" alignItems="center">
                <LectureTitle text="Secciones" />
            </Box>
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Esta novela se divide en 3 partes:
                <br /><br /> La parte 1 <ScrollLink to="shinshou">"Shinshou Roku"(Imágenes mentales)</ScrollLink> pertencese al primer album de Tsukuyomi "Kaketa shinzou, yono yosuga" (Mis rotas imágenes mentales, la razón de este mundo)
                <br /><br /> La parte 2 <ScrollLink to="tsuisou">"Tsuisou Roku"(Imágenes retrospectivas)</ScrollLink> pertencese al fan club de Tsukuyomi "Tsuki no ura"
                <br /><br /> La parte 3 <ScrollLink to="kaisou">"Kaisou Roku"(Reminiscencias)</ScrollLink> pertencese al segundo album de Tsukuyomi "Tsuki ga michiru" (Luna LLena)
                <br /><br /> No hay parte 4 pero agregué un <ScrollLink to="extra">Extra</ScrollLink> que son capítulos que no pertenecen a los álbumes pero aparecen en las canciones de Yurry Canon.
                <br /><br /> Por si les interesa, también hay <ScrollLink to="novela">Novela visual</ScrollLink> subida en el canal de Tsukuyomi
                <br /><br /> También he agregado <ScrollLink to="entrevista">Comentarios del autor</ScrollLink> que agregan un poco más de detalle a la obra.
            </LectureTypography>
        </RBox>
    )
}

const TeaserVideo = () => {

    return <RBox display={'flex'} alignItems={'center'} flexDirection={'column'}>
        <LectureTitle text="Teaser" />
        <Video videoLink="https://www.youtube.com/embed/jS-Ws3x-39o?si=--aSE4Ayuw-vd51o" />
    </RBox>
}

const VisualNovel = () => {
    return <RBox display={'flex'} alignItems={'center'} flexDirection={'column'} width={'100%'} component="section" id="novela">
        <LectureTitle text="Novela Visual" />
        <Box display={'flex'} flexDirection="column" alignItems="center"></Box>
        <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 }, width: '90%' }} />
        <LectureTypography variant="h3" className="title text-center mt-4">
            Memorias: Parte 1
        </LectureTypography>
        <Video videoLink="https://www.youtube.com/embed/L8U4OU5580M?si=AhDAKwNCXBh2fdk" />
        <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 }, width: '90%' }} />
        <LectureTypography variant="h3" className="title text-center mt-4">
            Memorias: Parte 2
        </LectureTypography>
        <Video videoLink="https://www.youtube.com/embed/8_-86ObPB5Q?si=QeKF1e-Gqvqjc-sL" />
        <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 }, width: '90%' }} />
        <LectureTypography variant="h3" className="title text-center mt-4">
            Memorias: Parte 3
        </LectureTypography>
        <Video videoLink="https://www.youtube.com/embed/f_ft7MtzQyc?si=yCBkaHQbvGGOGFnH" />
        <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 }, width: '90%' }} />
        <LectureTypography variant="h3" className="title text-center mt-4">
            I want to be your heart
        </LectureTypography>
        <Video videoLink="https://www.youtube.com/embed/drux1An59E4?si=lb74pw49pcfSPmWE" />
    </RBox>
}

