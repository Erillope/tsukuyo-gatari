import { Box } from "@mui/material";
import "../styles.css";
import { Moon } from "../components/Moon";
import { RBox } from "../components/RBox";
import { RTypography } from "../components/RTypography";
import { MySocialMedia, YurryCanonSocialMedia } from "../components/SocialMedia";
import { CatalogoNovelas } from "../components/CatalogoNovelas";

export const Home = () => {
    return (
        <Box width="100vw" className="column" component="main">
            <Principal />
            <AboutThisPage />
            <AboutTheTraduction />
            <CatalogoNovelas />
        </Box>
    );
}


const Principal = () => {
    return (
        <RBox width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection={"column"}
            id="principal"
            component="section"
            sx={{
                background: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(20,20,20,0.7) 100%)`
            }}>
            <RTypography variant="h4" className="title text-center mt-4"
                sx={{ color: "black !important", textShadow: '0.5px 0.5px 0px white' }}>
                月詠語り
            </RTypography>
            <RTypography variant="h4" className="title text-center mt-4"
                sx={{ color: "black !important", textShadow: '0.5px 0.5px 0px white' }}>
                TsukuyoGatari
            </RTypography>
            <Moon />
            <RTypography variant="h5" className="title text-center mt-4"
                sx={{ color: "white !important", textShadow: '1px 1px 2px black' }}>
                Escrito por: Yurry Canon <YurryCanonSocialMedia /> <br />
                Traducido por: Gabriel López <MySocialMedia />
            </RTypography>
        </RBox>
    )

}



const AboutThisPage = () => {
    const tsukuyomiLink = () => <a href="https://www.tsukuyomi2943.com" target="_blank" rel="noopener noreferrer">https://www.tsukuyomi2943.com</a>;

    return (
        <RBox className="black-bg"
            id="about-this-page"
            component="section">
            <RTypography variant="h3" className="title text-center mt-4">
                Sobre esta página
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Esta es una fan-page de Tsukuyomi de Yurry Canon <br />Principalmente, aquí publicaré las traducciones que he hecho sobre sus novelas ligeras :)<br />Me enamoré de esta banda y de este autor desde que escuché sus canciones, creo que más gente debería de conocer sus obras.<br />El sitio oficial de Tsukuyomi es {tsukuyomiLink()}<br />Las novelas que encontrarás aquí son en las que se basan las canciones de Tsukuyomi y Yurry Canon. Fue todo un reto recopilarlas y traducirlas, pero lo hice con mucho cariño y dedicación💖.
            </RTypography>
        </RBox>
    )
}

const AboutTheTraduction = () => {
    return (
        <RBox className="black-bg"
            id="about-the-traduction"
            component="section">
            <RTypography variant="h3" className="title text-center mt-4">
                Sobre la traducción
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Todo este sitio a excepción de una sección ha sido traducido por mí desde el japonés al español, considero natural si encuentras algún error de traducción o de ortografía, así que por favor avísamelo.<br />No soy un experto en traducción, solamente lo realizo por hobby. El japonés no es mi lengua materna, pero tengo el nivel necesario para entenderlo y traducirlo. Aún así nunca antes me había aventurado a traducir algo tan largo y complejo como una novela. El hecho de comprenderla es una cosa, pero traducirla conlleva encontrar las palabras adecuadas para transmitir el mensaje en español, es por eso que mi traducción no siempre será literal, si no que también se basará en mi interpretación de la obra.
            </RTypography>
        </RBox>
    )
}