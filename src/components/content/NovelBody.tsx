import { Box } from "@mui/material"
import { LectureTypography } from "../ui/RTypography"

export const NovelBody = (props: { bodyParagraphs: string[] }) => {
    return (
        <Box display={"flex"} flexDirection="column" width={'100%'}>
            {props.bodyParagraphs.map((paragraph) => (
                <LectureTypography key={paragraph} variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                    {paragraph}
                </LectureTypography>
            ))}
        </Box>
    )
}