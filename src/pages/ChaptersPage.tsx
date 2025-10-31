import { Box, Divider } from "@mui/material"
import { ChapterTitle, type ChapterTitleProps } from "../components/ChapterTitle"
import { useEffect, useState } from "react"
import { readBodyParagraphs, readFile } from "../hooks/reader"
import { TsukiMessage } from "../components/TsukiMessage"
import { ChapterContent, type ChapterBreakpoints } from "../components/ChapterContent"
import { LeftArrowButton, ListButton, RightArrowButton } from "../components/AnimatedButton"
import { navigateTo } from "../hooks/redirect"
import { useLocation } from "react-router-dom"
import { RBox } from "../components/RBox"
import { LectureTitle } from "../components/LectureTitle"
import { LectureTypography } from "../components/RTypography"
import { Video } from "../components/Video"
import { CommentsView, type CommentsViewProps } from "../components/CommentsSection"

export interface ChapterPageProps {
    chapterFile: string;
    titleData: ChapterTitleProps;
    tsukiMessage1Data?: {
        breakpoint: number;
        moonImageSrc?: string;
    },
    tsukiMessage2Data?: {
        breakpoint: number;
        moonImageSrc?: string;
    },
    chapterLargeBreakpoints: ChapterBreakpoints[];
    chapterSmallBreakpoints: ChapterBreakpoints[];
    nextChapterLink?: string;
    previousChapterLink?: string;
    videoLinks?: VideoViewsProp[];
    commentsSection?: CommentsViewProps;
}

export interface VideoViewsProp {
    videoLink: string;
    title: string;
    subtitle?: string;
}

export const ChapterPage = (props: ChapterPageProps) => {
    const { paragraphs, tsukiMessage1, tsukiMessage2 } = useChapter({ chapterFile: props.chapterFile });

    return (
        <Box width="100vw" component="main" display={'flex'} flexDirection={'column'}>
            <ChapterTitle {...props.titleData} />
            {tsukiMessage1.length > 0 && props.tsukiMessage1Data && <TsukiMessage paragraphs={tsukiMessage1} {...props.tsukiMessage1Data} />}
            <ChapterContent paragraphs={paragraphs} largeBreakpoints={props.chapterLargeBreakpoints}
                smallBreakpoints={props.chapterSmallBreakpoints} />
            {tsukiMessage2.length > 0 && props.tsukiMessage2Data && <TsukiMessage paragraphs={tsukiMessage2} {...props.tsukiMessage2Data} />}
            <ChaptersLink nextChapterLink={props.nextChapterLink} previousChapterLink={props.previousChapterLink} />
            {props.videoLinks && <VideoViews videoViews={props.videoLinks} />}
            <CommentsView {...props.commentsSection} />
        </Box>
    )
}

const ChaptersLink = (props: { nextChapterLink?: string; previousChapterLink?: string }) => {
    const navigate = navigateTo();

    const redirectTo = (link: string) => {
        navigate(link);

    }

    const width = { xs: '50%', lg: '10%' };

    return <Box width={"100%"} display={'flex'} flexDirection={'row'} justifyContent={'space-around'} bgcolor={'black'}
        paddingBottom={2} paddingTop={2}>
        {props.previousChapterLink ?
            <LeftArrowButton width={width} text="anterior" onClick={() => redirectTo(props.previousChapterLink ?? '/')} /> :
            <Box sx={{ width: "10%" }} />}
        <ListButton width={width} text="Capítulos" onClick={() => redirectTo("/shinzou/")} />
        {props.nextChapterLink ?
            <RightArrowButton width={width} text="siguiente" onClick={() => redirectTo(props.nextChapterLink ?? '/')} /> :
            <Box sx={{ width: width }} />}
    </Box>
}

const VideoViews = (props: { videoViews: VideoViewsProp[] }) => {
    return <RBox display={'flex'} alignItems={'center'} flexDirection={'column'} width={'100%'}>
        <LectureTitle text="Canciones relacionadas" />
        {props.videoViews.map((view) => (
            <Box key={view.videoLink} display="flex" flexDirection="column" alignItems="center" width={'100%'}>
                <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 }, width: '90%' }} />
                <VideoView {...view} />
            </Box>
        ))}
    </RBox>
}

const VideoView = (props: VideoViewsProp) => {
    return <Box display="flex" flexDirection="column" alignItems="center" width={'100%'} gap={2}>
        <LectureTypography variant="h3">
            {props.title}
        </LectureTypography>
        <LectureTypography variant="h5" sx={{ color: '#dddddd !important' }}>
            {props.subtitle}
        </LectureTypography>
        <Video videoLink={props.videoLink} />
    </Box>
}

const useChapter = (props: { chapterFile: string }) => {
    const [paragraphs, setParagraphs] = useState<string[]>([]);
    const [tsukiMessage1, setTsukiMessage1] = useState<string[]>([]);
    const [tsukiMessage2, setTsukiMessage2] = useState<string[]>([]);
    const location = useLocation();

    const init = async () => {
        const fileData = await readFile(props.chapterFile);
        let tsukiMessage1: string[] = [];
        let tsukiMessage2: string[] = [];
        let paragraphIndex = 0;
        const data = fileData.split('-*-').filter(line => line.trim() !== '');
        if (fileData.startsWith('-*-')) {
            tsukiMessage1 = readBodyParagraphs(data[0].split("\n").filter(line => line.trim() !== ''));
            tsukiMessage2 = readBodyParagraphs(data[2].split("\n").filter(line => line.trim() !== ''));
            paragraphIndex = 1;
        }
        const paragraphs = readBodyParagraphs(data[paragraphIndex].split("\n").filter(line => line.trim() !== ''));
        setParagraphs(paragraphs);
        setTsukiMessage1(tsukiMessage1);
        setTsukiMessage2(tsukiMessage2);
    }

    useEffect(() => { init() }, [location]);

    return { paragraphs, tsukiMessage1, tsukiMessage2 };
}