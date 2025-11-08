import { Box, Divider } from "@mui/material"
import { NovelTitle } from "../components/content/NovelTitle"
import { menuOptionsData, novelTitleData } from "../data/sorekami/sorekamiData"
import sorekamiSumary from "../traducciones/sorekami/sorekami_summary.txt"
import { Introduction } from "../components/content/Introduction"
import { SorekamiTraductionDetails } from "../components/content/sorekami/SorekamiTraductionDetails"
import { SorekamiChapters, TeaserVideo } from "../components/content/sorekami/SorekamiChapters"
import { CommentsView } from "../components/comment/CommentsView"
import sorekamiCommentBG from "../assets/sorekami_comment_bg.jpg"
import { MenuBar } from "../components/layout/MenuBar"

export const Sorekami = () => {
    return <Box width="100vw" component="main" display={'flex'} flexDirection={'column'} id="principal">
        <MenuBar options={menuOptionsData}/>
        <NovelTitle {...novelTitleData} />
        <Introduction summaryFilePath={sorekamiSumary} />
        <SorekamiTraductionDetails />
        <TeaserVideo />
        <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 } }} />
        <SorekamiChapters />
        <CommentsView section="sorekami" includeSubsections commentsBG={sorekamiCommentBG} opacity={0.6} opacitySmall={0.5}/>
    </Box>
}