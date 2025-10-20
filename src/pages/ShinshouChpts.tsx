import { Box, useTheme, useMediaQuery } from "@mui/material"
import { ChapterTitle } from "../components/ChapterTitle"
import { useEffect, useState } from "react"
import { readBodyParagraphs, readFile } from "../hooks/reader"
import shinshouA from "../assets/shinshou_a.png"
import shinshouASmall from "../assets/shinshou_a_small.png"
import shinshouChpt1 from "../traducciones/shinshou/chpt_1.txt"
import { NovelBody } from "../components/NovelBody"
import { LectureBox } from "../components/RBox"
import moon1 from "../assets/moon1.png"
import { LectureTypography } from "../components/RTypography"
import { ImageNoLink } from "../components/Image"
import shinshouABG1 from "../assets/shinshou_a_bg1.png"
import shinshouABG2 from "../assets/shinshou_a_bg2.png"
import shinshouABG2Small from "../assets/shinshou_a_bg2_small.png"
import shinshouABG3 from "../assets/shinshou_a_bg3.jpg"
import shinshouABG3Small from "../assets/shinshou_a_bg3_small.png"
import shinshouABG4Small from "../assets/shinshou_a_bg4_small.jpg"
import shinshouABG4 from "../assets/shinshou_a_bg4.png"
import shinshouABG5 from "../assets/shinshou_a_bg5.png"
import shinshouABG5Small from "../assets/shinshou_a_bg5_small.png"
import shinshouABG6Small from "../assets/shinshou_a_bg6_small.png"
import shinshouABG7Small from "../assets/shinshou_a_bg7_small.png"
import shinshouABG8Small from "../assets/shinshou_a_bg8_small.png"
import shinshouABG9Small from "../assets/shinshou_a_bg9_small.png"
import shinshouABG10Small from "../assets/shinshou_a_bg10_small.png"
import shinshouABG11Small from "../assets/shinshou_a_bg11_small.png"
import shinshouABG12Small from "../assets/shinshou_a_bg12_small.png"

export const ShinshouRokuAlpha = () => {
    const [paragraphs, setParagraphs] = useState<string[]>([]);

    const init = async () => {
        const data = await readFile(shinshouChpt1);
        const paragraphs = readBodyParagraphs(data.split("\n").filter(line => line.trim() !== ''));
        setParagraphs(paragraphs);
    }

    useEffect(() => { init() }, []);

    return (
        <Box width="100vw" component="main" display={'flex'} flexDirection={'column'}>
            <ChapterTitle
                smallTitleImg={shinshouASmall}
                largeTitleImg={shinshouA}
                jpTitle="心象録"
                romajiTitle="Shinshou Roku"
                esTitle="Capítulo 1: Imágenes mentales α"
            />
            <TsukiMessage />
            <ChapterContent paragraphs={paragraphs} />
        </Box>
    )
}

const ChapterContent = ({ paragraphs }: { paragraphs: string[] }) => {
    const isMdUp = useMediaQuery('(min-width:600px)');
    return isMdUp ? <ChapterLarge paragraphs={paragraphs} /> : <ChapterSmall paragraphs={paragraphs} />
}

const ChapterLarge = ({ paragraphs }: { paragraphs: string[] }) => {
    return <>
        <LectureBox ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${shinshouABG1})`,
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(0, 7)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${shinshouABG2})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(7, 14)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG3})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(14, 21)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${shinshouABG4})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(21, 37)} />
        </LectureBox>
        <LectureBox ignoreTopPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG5})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(37)} />
        </LectureBox>
    </>
}

const ChapterSmall = ({ paragraphs }: { paragraphs: string[] }) => {
    return <>
        <LectureBox ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${shinshouASmall})`,
            backgroundPosition: 'right center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(0, 2)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${shinshouABG2Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(2, 6)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${shinshouABG3Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(6, 10)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${shinshouABG4})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(10, 15)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG4Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(15, 17)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG5Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(17, 20)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${shinshouABG6Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(20, 23)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG7Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(23, 26)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG8Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(26, 29)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG9Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(29, 32)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG10Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(32, 36)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG11Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(36, 40)} />
        </LectureBox>
        <LectureBox ignoreTopPadding ignoreBottomPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG12Small})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(40, 45)} />
        </LectureBox>
        <LectureBox ignoreTopPadding width={'100%'} display={'flex'} justifyContent={'center'} sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${shinshouABG5})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <NovelBody bodyParagraphs={paragraphs.slice(45)} />
        </LectureBox>
    </>
}

const TsukiMessage = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('sm'));

    return isMdUp ? <TsukiMessageLarge /> : <TsukiMessageSmall />
}

const TsukiMessageSmall = () => {
    return <LectureBox bgcolor={'black'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'}>
        <Box display={'flex'} width={'50%'}>
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Sin poder siquiera despedirme, aquel paisaje se aleja cada vez más y el dolor se vuelve más y más nubloso.
            </LectureTypography>
        </Box>
        <ImageNoLink src={moon1} width={'50%'} />
        <Box display={'flex'} width={'100%'}>
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Para que no desaparezca. Yo lo escribiré
            </LectureTypography>
        </Box>
        <Box display={'flex'} width={'100%'}>
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Solo tú, nadie más que tú me ha hecho brillar.
                <br />Eres la Luna que ha florecido en mi oscura noche.
            </LectureTypography>
        </Box>
        <Box display={'flex'} width={'100%'}>
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Mientras que yo...
            </LectureTypography>
        </Box>

    </LectureBox>
}

const TsukiMessageLarge = () => {
    return <LectureBox bgcolor={'black'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}
        gap={{ lg: 50, md: 20, sm: 10 }}>
        <Box display={'flex'} flexDirection={'column'} width={'50%'}>
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Sin poder siquiera despedirme, aquel paisaje se aleja cada vez más y el dolor se vuelve más y más nubloso.
            </LectureTypography>
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Para que no desaparezca. Yo lo escribiré
            </LectureTypography>
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Solo tú, nadie más que tú me ha hecho brillar.
                <br />Eres la Luna que ha florecido en mi oscura noche.
            </LectureTypography>
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Mientras que yo...
            </LectureTypography>
        </Box>
        <ImageNoLink src={moon1} width={'20%'} />
    </LectureBox>
}