import { LectureTitle } from "../../ui/LectureTitle"
import { RBox } from "../../ui/RBox"
import { Video } from "../../ui/Video"
import { ChapterSection } from "../ChapterSection"
import { sorekamiSummary } from "../../../data/sorekami/sorekamiData"

export const SorekamiChapters = () => {
    return <ChapterSection {...sorekamiSummary} />
}

export const TeaserVideo = () => {
    return <RBox display={'flex'} alignItems={'center'} flexDirection={'column'}>
        <LectureTitle text="Teaser" />
        <Video videoLink="https://www.youtube.com/embed/4aulzXoY6ME?si=_oS7JIWzrimsY-qe" />
    </RBox>
}