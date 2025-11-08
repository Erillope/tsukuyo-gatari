import { Box, Divider } from "@mui/material";
import "../styles.css";
import { novelTitleData, menuOptionsData } from "../data/shinzou/shinzouData"
import { NovelTitle } from "../components/content/NovelTitle";
import shinzouSummary from "../traducciones/shinzou/shinzou_summary.txt";
import { Introduction } from "../components/content/Introduction";
import {MenuBar} from "../components/layout/MenuBar";
import shinzouCommentBG from "../assets/shinzou_comment_bg.jpg"
import { CommentsView } from "../components/comment/CommentsView";
import { InfoChapters } from "../components/content/shinzou/InfoChapters";
import { ShinzouTraductionDetails } from "../components/content/shinzou/ShinzouTraductionDetails";
import { VisualNovel } from "../components/content/shinzou/VisualNovel";
import { ShinzouChapters, TeaserVideo } from "../components/content/shinzou/ShinzouChapters";

export const Shinzou = () => {
    return (
        <Box width="100vw" component="main" display={'flex'} flexDirection={'column'} id="principal">
            <MenuBar options={menuOptionsData}/>
            <NovelTitle {...novelTitleData} />
            <Introduction summaryFilePath={shinzouSummary} />
            <ShinzouTraductionDetails />
            <InfoChapters />
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 } }} />
            <TeaserVideo />
            <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 } }} />
            <ShinzouChapters />
            <VisualNovel />
            <CommentsView section="shinzou" includeSubsections commentsBG={shinzouCommentBG} />
        </Box>
    )
}