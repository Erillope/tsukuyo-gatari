import { ChapterSection } from "../ChapterSection"
import { shinshouSectionData, tsuisouSectionData, kaisouSectionData, extraSectionData } from "../../../data/shinzouData"
import { LectureTitle } from "../../ui/LectureTitle"
import { RBox } from "../../ui/RBox"
import { Video } from "../../ui/Video"

export const ShinzouChapters = () => {
    return <>
        <ChapterSection {...shinshouSectionData} />
        <ChapterSection {...tsuisouSectionData} />
        <ChapterSection {...kaisouSectionData} />
        <ChapterSection {...extraSectionData} />
    </>
}

export const TeaserVideo = () => {
    return <RBox display={'flex'} alignItems={'center'} flexDirection={'column'}>
        <LectureTitle text="Teaser" />
        <Video videoLink="https://www.youtube.com/embed/jS-Ws3x-39o?si=--aSE4Ayuw-vd51o" />
    </RBox>
}