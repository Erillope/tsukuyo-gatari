import { Box } from "@mui/material"
import { LectureTitle } from "../../ui/LectureTitle"
import { RBox } from "../../ui/RBox"
import { LectureTypography } from "../../ui/RTypography"
import { ScrollLink } from "../../layout/ScrollLink"

export const InfoChapters = () => {
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