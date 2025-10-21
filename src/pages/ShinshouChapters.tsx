import { Box } from "@mui/material"
import { ChapterTitle, type ChapterTitleProps } from "../components/ChapterTitle"
import { useEffect, useState } from "react"
import { readBodyParagraphs, readFile } from "../hooks/reader"
import { TsukiMessage } from "../components/TsukiMessage"
import { ChapterContent, type ChapterBreakpoints } from "../components/ChapterContent"

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
}

export const ShinshouRokuChapter = ( props: ShinshouRokuChapterProps ) => {
    const [paragraphs, setParagraphs] = useState<string[]>([]);
    const [tsukiMessage1, setTsukiMessage1] = useState<string[]>([]);
    const [tsukiMessage2, setTsukiMessage2] = useState<string[]>([]);

    const init = async () => {
        const fileData = await readFile(props.chapterFile);
        const data = fileData.split('-*-').filter(line => line.trim() !== '');
        const tsukiMessage1 = readBodyParagraphs(data[0].split("\n").filter(line => line.trim() !== ''));
        const tsukiMessage2 = readBodyParagraphs(data[2].split("\n").filter(line => line.trim() !== ''));
        const paragraphs = readBodyParagraphs(data[1].split("\n").filter(line => line.trim() !== ''));
        setParagraphs(paragraphs);
        setTsukiMessage1(tsukiMessage1);
        setTsukiMessage2(tsukiMessage2);
    }

    useEffect(() => { init() }, []);

    return (
        <Box width="100vw" component="main" display={'flex'} flexDirection={'column'}>
            <ChapterTitle {...props.titleData} />
            <TsukiMessage paragraphs={tsukiMessage1} {...props.tsukiMessage1Data} />
            <ChapterContent paragraphs={paragraphs} largeBreakpoints={ props.chapterLargeBreakpoints }
                smallBreakpoints={ props.chapterSmallBreakpoints } />
            <TsukiMessage paragraphs={tsukiMessage2} {...props.tsukiMessage2Data} />
        </Box>
    )
}