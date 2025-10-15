import { Box, Divider } from "@mui/material"
import { RBox } from "./RBox"
import { Image } from "./Image"
import { LectureTypography } from "./RTypography"
import shinzouResume from "../assets/heart.png"
import soreKamiResume from "../assets/kami.png"
import paradeResume from "../assets/parade.jpg"
import ningenResume from "../assets/ningen.jpg"
import shinzouSumary from "../traducciones/shinzou_summary.txt"
import soreKamiSumary from "../traducciones/sorekami_sumary.txt"
import paradeSumary from "../traducciones/parade_sumary.txt"
import ningenSumary from "../traducciones/ningen_sumary.txt"
import { useEffect, useState } from "react"
import { readSumaryFile, type SumaryInfo } from "../hooks/reader"
import AnimatedButton from "./AnimatedButton"

export const CatalogoNovelas = () => {
    return (
        <RBox>
            <LectureTypography variant="h3">
                Catálogo de Novelas
            </LectureTypography>
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 10 } }} />
            <NovelResume sumaryFile={shinzouSumary} image={shinzouResume} to="shinzou/" />
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 10 } }} />
            <NovelResume sumaryFile={soreKamiSumary} image={soreKamiResume} to="sorekami/" />
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 10 } }} />
            <NovelResume sumaryFile={paradeSumary} image={paradeResume} to="parade/" />
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 10 } }} />
            <NovelResume sumaryFile={ningenSumary} image={ningenResume} to="ningen/" />
        </RBox>
    )
}

const NovelResume = (props: { sumaryFile?: string, image?: string, to?: string }) => {
    const readMore = () => {
        const fullUrl = window.location.origin + window.location.pathname + props.to;
        window.open(fullUrl, "_blank", "noopener,noreferrer");
    }

    const [sumaryInfo, setSumaryInfo] = useState<SumaryInfo>({
        engTitle: '',
        jpTitle: '',
        romajiTitle: '',
        esTitle: '',
        bodyParagraphs: []
    });

    const initData = async () => {
        const content = await readSumaryFile(props.sumaryFile ?? '');
        setSumaryInfo(content);
    }

    useEffect(() => { initData() }, [])

    return (
        <RBox display={"flex"} flexDirection="column" gap={6} width={'100%'} ignorePadding>
            <NovelTitles {...sumaryInfo} />
            <Box display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 6 }} width={'100%'}>
                <Image src={props.image} sx={{ width: { xs: '100%', md: '50%' }, height: '100%' }} />
                <Box display={"flex"} flexDirection="column" width={'100%'}>
                    <NovelBody bodyParagraphs={sumaryInfo.bodyParagraphs} />
                    <AnimatedButton text="Leer más" width="25%" marginTop="30px" onClick={readMore} />
                </Box>
            </Box>
        </RBox>
    )
}

const NovelTitles = (props: SumaryInfo) => {
    return <Box display={"flex"} flexDirection="column" width={'100%'} justifyContent="center" alignItems="center" gap={2}>
        <Box display={"flex"} flexDirection="row" width={'100%'} justifyContent="center" alignItems="center">
            <LectureTypography variant="body1" sx={{ display: { xs: 'none', md: 'block' } }}>
                ────────────────────
            </LectureTypography>
            <LectureTypography variant="h3" >
                {props.engTitle}
            </LectureTypography>
            <LectureTypography variant="body1" sx={{ display: { xs: 'none', md: 'block' } }}>
                ────────────────────
            </LectureTypography>
        </Box>
        <LectureTypography variant="h5" sx={{ color: '#dddddd !important' }}>
            {props.jpTitle}
        </LectureTypography>
        <LectureTypography variant="h5" sx={{ color: '#aaaaaa !important' }}>
            {props.romajiTitle}
        </LectureTypography>
        <LectureTypography variant="h5" sx={{ color: '#aaaaaa !important' }}>
            {props.esTitle}
        </LectureTypography>
    </Box>
}

const NovelBody = (props: { bodyParagraphs: string[] }) => {
    return (
        <Box display={"flex"} flexDirection="column" width={'100%'}>
            {props.bodyParagraphs.map((paragraph) => (
                <LectureTypography key={paragraph} variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                    {paragraph}
                </LectureTypography>
            ))}
        </Box>
    )
}