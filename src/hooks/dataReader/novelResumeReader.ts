import { useEffect, useState } from "react"
import { publicFileReader } from "./publicFileReader"
import type { ChapterSectionProps } from "../../components/content/ChapterSection"
import type { CommentsViewProps } from "../../components/comment/CommentsView"
import type { NovelTitleProps } from "../../components/content/NovelTitle"
import type { NovelSummaryProps } from "../../pages/NovelSummary"

export const useNovelResumeData = (props: { sumaryFile?: string }) => {
    const [novelSummary, setNovelSummary] = useState<NovelSummaryProps>({})
    const { getFromNovelImageFolder, getFromTraductionsFolder, readJsonFolder } = publicFileReader()

    const init = async () => {
        const data = await readJsonFolder(props.sumaryFile ?? '')
        const novelSummaryData = buildNovelSummaryData(data)
        setNovelSummary(novelSummaryData)
    }

    const buildNovelSummaryData = (data: any): NovelSummaryProps => {
        const { bgImageFolderName, traductionsFolderName } = data.resourceData
        const summaryData = data.summaryData

        return {
            menuOptionsData: summaryData.menuOptionsData,
            novelTitleData: getNovelTitleData(summaryData.novelTitleData, bgImageFolderName),
            summaryFilePath: getFromTraductionsFolder(traductionsFolderName + summaryData.summaryFilePath),
            traductionDetailsFilePath: getFromTraductionsFolder(traductionsFolderName + summaryData.traductionDetailsFilePath),
            teaserVideoLink: summaryData.teaserVideoLink,
            chapterSections: summaryData.chapterSections.map((section: any) => getChapterSection(section, bgImageFolderName, traductionsFolderName)),
            visualNovelVideoLinks: summaryData.visualNovelVideoLinks,
            commentSection: getCommentSection(summaryData.commentSection),
        }
    }

    const getNovelTitleData = (data: any, bgImageFolderName: string): NovelTitleProps => {
        return {
            smallTitleImg: getFromNovelImageFolder(bgImageFolderName + data.smallTitleImg),
            largeTitleImg: getFromNovelImageFolder(bgImageFolderName + data.largeTitleImg),
            engTitle: data.engTitle,
            romajiTitle: data.romajiTitle,
            jpTitle: data.jpTitle,
            esTitle: data.esTitle,
            videoLink: data.videoLink
        }
    }

    const getChapterSection = (data: any, bgImageFolderName: string, traductionsFolderName: string): ChapterSectionProps => {
        return {
            summaryFilePath: getFromTraductionsFolder(traductionsFolderName + data.summaryFilePath),
            chaptersImages: data.chaptersImages.map((imgPath: string) => getFromNovelImageFolder(bgImageFolderName + imgPath)),
            chaptersVideos: data.chaptersVideos,
            novelTitle: data.novelTitle,
            romajiTitle: data.romajiTitle,
            jpTitle: data.jpTitle,
            esTitle: data.esTitle,
            sectionId: data.sectionId,
            chaptersLinks: data.chaptersLinks,
            subsectionsLinks: data.subsectionsLinks,
        }
    }

    const getCommentSection = (data: any): CommentsViewProps => {
        return {
            section: data.section,
            commentsBG: getFromNovelImageFolder(data.commentsBG),
            includeSubsections: data.includeSubsections,
        }
    }

    useEffect(() => { init() }, [])

    return { novelSummary }
}