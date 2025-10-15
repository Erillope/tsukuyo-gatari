import { Box } from "@mui/material";
import "../styles.css";
import shinzouBG from "../assets/heart3.png"
import shinzouBSmall from "../assets/heart4.png"
import { RBox } from "../components/RBox";
import { LectureTypography, RTypography } from "../components/RTypography";

export const Shinzou = () => {

    return (
        <Box width="100vw" height="100vh" component="main" display={'flex'} flexDirection={'column'}>
            <NovelTitle />
            <Extra />
        </Box>
    )
}

const NovelTitle = () => {
    const getBackgroundImage = (image: string) => `
      linear-gradient(to right, rgba(0, 0, 0, 0.85) 40%, transparent 100%),
      url(${image})
    `;

    return (
        <Box width={'100%'}
            sx={{
                backgroundImage: { xs: getBackgroundImage(shinzouBSmall), lg: getBackgroundImage(shinzouBG),
                    md : getBackgroundImage(shinzouBG), sm: getBackgroundImage(shinzouBG) },
                backgroundPosition: 'right center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'normal',
            }}>
            <Box display={'flex'} flexDirection={'column'} width={'50%'}
                marginTop={10} marginBottom={10} marginLeft={{ xs: 3, lg: 5 }} marginRight={{ xs: 3, lg: 5 }}
                textAlign={'left'} gap={{ xs: 3, lg: 5 }}>
                <LectureTypography variant="h1">
                    I want to be your heart
                </LectureTypography>
                <LectureTypography variant="h3">
                    誰かの心臓になれたなら
                </LectureTypography>
                <LectureTypography variant="h4">
                    Quisiera ser el corazón de alguien
                </LectureTypography>
            </Box>
        </Box>
    )
}

const Extra = () => {
    const tsukuyomiLink = () => <a href="https://www.tsukuyomi2943.com" target="_blank" rel="noopener noreferrer">https://www.tsukuyomi2943.com</a>;
    return (
        <>
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
        </>
    )
}