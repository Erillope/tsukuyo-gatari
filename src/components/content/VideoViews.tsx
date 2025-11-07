import { Box, Divider } from "@mui/material"
import { LectureTitle } from "../ui/LectureTitle"
import { RBox } from "../ui/RBox"
import { LectureTypography } from "../ui/RTypography"
import { Video } from "../ui/Video"

export interface VideoViewsProp {
    videoLink: string;
    title: string;
    subtitle?: string;
}

export const VideoViews = (props: { videoViews: VideoViewsProp[] }) => {
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