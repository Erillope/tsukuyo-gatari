import { Box, Divider } from "@mui/material"
import { RBox } from "./RBox"
import { Image } from "./Image"
import { LectureTypography } from "./RTypography"
import shinzouResume from "../assets/heart.png"
import soreKamiResume from "../assets/kami.png"
import paradeResume from "../assets/parade.jpg"
import ningenResume from "../assets/ningen.jpg"
import shinzouSummary from "../traducciones/shinzou_summary.txt"
import soreKamiSummary from "../traducciones/sorekami_summary.txt"
import paradeSummary from "../traducciones/parade_summary.txt"
import ningenSummary from "../traducciones/ningen_summary.txt"
import { useEffect, useState } from "react"
import { readSummaryFile, type SumaryInfo } from "../hooks/reader"
import AnimatedButton from "./AnimatedButton"
import { NovelBody } from "./NovelBody"
import { redirectTo } from "../hooks/redirect"
import { LectureTitle } from "./LectureTitle"

export const CatalogoNovelas = () => {
    return (
        <RBox>
            <LectureTypography variant="h3">
                Catálogo de Novelas
            </LectureTypography>
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 10 } }} />
            <NovelResume sumaryFile={shinzouSummary} image={shinzouResume} to="shinzou/" videoLink="https://www.youtube.com/watch?v=jS-Ws3x-39o" />
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 10 } }}/>
            <NovelResume sumaryFile={soreKamiSummary} image={soreKamiResume} to="sorekami/" videoLink="https://www.youtube.com/watch?v=4aulzXoY6ME"/>
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 10 } }} />
            <NovelResume sumaryFile={paradeSummary} image={paradeResume} to="parade/" videoLink="https://www.youtube.com/watch?v=cNvsug-S38Y"/>
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 10 } }} />
            <NovelResume sumaryFile={ningenSummary} image={ningenResume} to="ningen/" videoLink="https://www.youtube.com/watch?v=0qY9rsBAKPk"/>
        </RBox>
    )
}

const NovelResume = (props: { sumaryFile?: string, image?: string, to?: string, videoLink?: string }) => {
    const readMore = () => {
        const fullUrl = globalThis.location.origin + globalThis.location.pathname + "#/" + props.to;
        redirectTo(fullUrl);
    }

    const [sumaryInfo, setSumaryInfo] = useState<SumaryInfo>({
        engTitle: '',
        jpTitle: '',
        romajiTitle: '',
        esTitle: '',
        bodyParagraphs: []
    });

    const initData = async () => {
        const content = await readSummaryFile(props.sumaryFile ?? '');
        setSumaryInfo(content);
    }

    useEffect(() => { initData() }, [])

    return (
        <RBox display={"flex"} flexDirection="column" gap={6} width={'100%'} ignorePadding>
            <NovelTitles {...sumaryInfo} />
            <Box display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 6 }} width={'100%'}>
                <Image src={props.image} sx={{ width: { xs: '100%', md: '100%' }, height: '100%' }} to={props.videoLink} />
                <Box display={"flex"} flexDirection="column" width={'100%'}>
                    <NovelBody bodyParagraphs={sumaryInfo.bodyParagraphs} />
                    <Box width={'100%'}>
                        <AnimatedButton text="Leer más" marginTop="30px" onClick={readMore} />
                    </Box>
                </Box>
            </Box>
        </RBox>
    )
}

const NovelTitles = (props: SumaryInfo) => {
    return <Box display={"flex"} flexDirection="column" width={'100%'} justifyContent="center" alignItems="center" gap={2}>
        <LectureTitle text={props.engTitle} />
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

