import { Box, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { readFile, readBodyParagraphs } from "../hooks/reader";
import { RBox } from "./RBox";
import AnimatedButton from "./AnimatedButton";
import { NovelBody } from "./NovelBody";
import { LectureTypography } from "./RTypography";
import { Image } from "../components/Image";
import { LectureTitle } from "./LectureTitle";

export interface ChapterSectionProps {
    summaryFilePath: string;
    chaptersImages: string[];
    chaptersVideos: string[];
    novelTitle: string;
    romajiTitle: string;
    jpTitle: string;
    esTitle: string;
    sectionId: string;
}

export const ChapterSection = (prop: ChapterSectionProps) => {
    const [chapters, setChapters] = useState<ChaptersData[]>([]);

    const init = async () => {
        const chaptersData = await readFile(prop.summaryFilePath)
        const chapters = chaptersData.split("/*/").map((chapter, index) => {
            const data = chapter.trim();
            const title = data.split("\n")[0].trim();
            const summary = readBodyParagraphs(data.split("\n").slice(1).filter(line => line.trim() !== ''));
            return { title, summary, image: prop.chaptersImages[index], novel: prop.novelTitle, videoLink: prop.chaptersVideos[index] };
        });
        setChapters(chapters);
    }

    useEffect(() => { init() }, [])

    return (
        <RBox display={"flex"} flexDirection="column" gap={6} width={'100%'}>
            <ChapterTitle romajiTitle={prop.romajiTitle} jpTitle={prop.jpTitle} esTitle={prop.esTitle} sectionId={prop.sectionId} />
            {chapters.map((chapter) => (
                <Box key={chapter.title}>
                    <ChapterResume key={chapter.title} {...chapter} />
                    <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 7 } }} />
                </Box>
            ))}
        </RBox>
    )
}

const ChapterTitle = (props: { romajiTitle: string, jpTitle: string, esTitle: string, sectionId?: string }) => {
    return (
        <Box display={"flex"} flexDirection="column" width={'100%'} justifyContent="center" alignItems="center" gap={2} component={'section'} id={props.sectionId}>
            <LectureTitle text={props.romajiTitle} />
            <LectureTypography variant="h5" sx={{ color: '#aaaaaa !important' }}>
                {props.esTitle}
            </LectureTypography>
            <LectureTypography variant="h5" sx={{ color: '#dddddd !important' }}>
                {props.jpTitle}
            </LectureTypography>
        </Box>
    )
}

interface ChaptersData {
    image: string;
    title: string;
    novel: string;
    summary: string[];
    videoLink?: string;
}

const ChapterResume = (props: ChaptersData) => {
    const readMore = () => { }

    return (
        <Box display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 6 }} width={'100%'}>
            <Image src={props.image} sx={{ width: { xs: '100%', md: '100%' }, height: '100%' }} to={props.videoLink} />
            <Box display={"flex"} flexDirection="column" width={'100%'}>
                <LectureTypography variant="h6">{props.novel}</LectureTypography>
                <LectureTypography variant="h4">{props.title}</LectureTypography>
                <NovelBody bodyParagraphs={props.summary} />
                <Box width={'100%'}>
                    <AnimatedButton text="Leer más" marginTop="30px" onClick={readMore} />
                </Box>
            </Box>
        </Box>
    )
}