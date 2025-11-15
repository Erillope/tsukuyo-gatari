import { Box, Divider } from "@mui/material";
import { MenuBar, type MenuOptionData } from "../components/layout/MenuBar";
import { NovelTitle, type NovelTitleProps } from "../components/content/NovelTitle";
import { Introduction } from "../components/content/Introduction";
import { useNovelResumeData } from "../hooks/dataReader/novelResumeReader";
import { type CommentsViewProps, CommentsView } from "../components/comment/CommentsView";
import { type ChapterSectionProps, ChapterSection } from "../components/content/ChapterSection";
import { TraductionDetails } from "../components/content/TraductionDetails";
import { type VisualNovelProps, TeaserVideo, VisualNovel } from "../components/content/VideoViews";
import { ShinzouInfoChapters } from "../components/content/ShinzouInfoChapters";

export interface NovelSummaryProps {
    menuOptionsData?: MenuOptionData[];
    novelTitleData?: NovelTitleProps;
    summaryFilePath?: string;
    traductionDetailsFilePath?: string;
    infoChaptersComponent?: React.ReactNode;
    teaserVideoLink?: string;
    chapterSections?: ChapterSectionProps[];
    visualNovelVideoLinks?: VisualNovelProps[];
    commentSection?: CommentsViewProps;
}

export const NovelSummary = (props: NovelSummaryProps) => {

    return <Box width="100vw" component="main" display={'flex'} flexDirection={'column'} id="principal">
        <MenuBar options={props.menuOptionsData} />
        <NovelTitle {...props.novelTitleData} />
        {props.summaryFilePath && <Introduction summaryFilePath={props.summaryFilePath} />}
        {props.traductionDetailsFilePath && <TraductionDetails traductionDetailsFilePath={props.traductionDetailsFilePath} />}
        {props.infoChaptersComponent && <>{props.infoChaptersComponent}</>}
        {props.teaserVideoLink && <TeaserVideo videoLink={props.teaserVideoLink} />}
        <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 } }} />
        {props.chapterSections?.map((section) => (
            <ChapterSection key={section.summaryFilePath} {...section} />
        ))}
        {props.visualNovelVideoLinks && <VisualNovel visualNovelData={props.visualNovelVideoLinks} />}
        <CommentsView {...props.commentSection} />
    </Box>
}

export const FileNovelSummary = (props: { sumaryFile: string, infoChaptersComponent?: React.ReactNode }) => {
    const { novelSummary } = useNovelResumeData({ sumaryFile: props.sumaryFile });

    return <NovelSummary {...novelSummary} infoChaptersComponent={props.infoChaptersComponent} />
}

export const ShinzouFileNovelSummary = () => {
    return <FileNovelSummary sumaryFile="shinzou/shinzou_summary" infoChaptersComponent={<ShinzouInfoChapters />} />
}

export const SorekamiFileNovelSummary = () => {
    return <FileNovelSummary sumaryFile="sorekami/sorekami_summary" />
}