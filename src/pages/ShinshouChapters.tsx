import { Box } from "@mui/material"
import { ChapterTitle, type ChapterTitleProps } from "../components/ChapterTitle"
import { useEffect, useState } from "react"
import { readBodyParagraphs, readFile } from "../hooks/reader"
import { TsukiMessage } from "../components/TsukiMessage"
import { ChapterContent, type ChapterBreakpoints } from "../components/ChapterContent"
import { LeftArrowButton, ListButton, RightArrowButton } from "../components/AnimatedButton"
import { navigateTo } from "../hooks/redirect"
import { useLocation } from "react-router-dom"

export interface ShinshouRokuChapterProps {
    chapterFile: string;
    titleData: ChapterTitleProps;
    tsukiMessage1Data: {
        breakpoint: number;
        moonImageSrc?: string;
    },
    tsukiMessage2Data: {
        breakpoint: number;
        moonImageSrc?: string;
    },
    chapterLargeBreakpoints: ChapterBreakpoints[];
    chapterSmallBreakpoints: ChapterBreakpoints[];
    nextChapterLink?: string;
    previousChapterLink?: string;
}

export const ShinshouRokuChapter = (props: ShinshouRokuChapterProps) => {
    const { paragraphs, tsukiMessage1, tsukiMessage2 } = useShinshouRokuChapter({ chapterFile: props.chapterFile });

    return (
        <Box width="100vw" component="main" display={'flex'} flexDirection={'column'}>
            <ChapterTitle {...props.titleData} />
            {tsukiMessage1.length > 0 && <TsukiMessage paragraphs={tsukiMessage1} {...props.tsukiMessage1Data} />}
            <ChapterContent paragraphs={paragraphs} largeBreakpoints={props.chapterLargeBreakpoints}
                smallBreakpoints={props.chapterSmallBreakpoints} />
            {tsukiMessage2.length > 0 && <TsukiMessage paragraphs={tsukiMessage2} {...props.tsukiMessage2Data} />}
            <ChaptersLink nextChapterLink={props.nextChapterLink} previousChapterLink={props.previousChapterLink} />
        </Box>
    )
}

const ChaptersLink = (props: { nextChapterLink?: string; previousChapterLink?: string }) => {
    const navigate = navigateTo();

    const redirectTo = (link: string) => {
        navigate(link);
        
    }

    return <Box width={"100%"} display={'flex'} flexDirection={'row'} justifyContent={'space-around'} bgcolor={'black'}>
        {props.previousChapterLink ? 
        <LeftArrowButton width="10%" text="anterior" onClick={() => redirectTo(props.previousChapterLink??'/')} /> :
        <div style={{ width: "10%" }} />}
        <ListButton width="10%" text="Capítulos" onClick={() => redirectTo("/shinzou/")} />
        {props.nextChapterLink ? 
        <RightArrowButton width="10%" text="siguiente" onClick={() => redirectTo(props.nextChapterLink??'/')} /> :
        <div style={{ width: "10%" }} />}
    </Box>
}

const useShinshouRokuChapter = (props: { chapterFile: string }) => {
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