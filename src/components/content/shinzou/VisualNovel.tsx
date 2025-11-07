import { Divider } from "@mui/material"
import { LectureTitle } from "../../ui/LectureTitle"
import { RBox } from "../../ui/RBox"
import { LectureTypography } from "../../ui/RTypography"
import { Video } from "../../ui/Video"

export const VisualNovel = () => {
    return <RBox display={'flex'} alignItems={'center'} flexDirection={'column'} width={'100%'} component="section" id="novela">
        <LectureTitle text="Novela Visual" />
        <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 }, width: '90%' }} />
        <LectureTypography variant="h3" className="title text-center mt-4">
            Memorias: Parte 1
        </LectureTypography>
        <Video videoLink="https://www.youtube.com/embed/L8U4OU5580M?si=AhDAKwNCXBh2fdk" />
        <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 }, width: '90%' }} />
        <LectureTypography variant="h3" className="title text-center mt-4">
            Memorias: Parte 2
        </LectureTypography>
        <Video videoLink="https://www.youtube.com/embed/8_-86ObPB5Q?si=QeKF1e-Gqvqjc-sL" />
        <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 }, width: '90%' }} />
        <LectureTypography variant="h3" className="title text-center mt-4">
            Memorias: Parte 3
        </LectureTypography>
        <Video videoLink="https://www.youtube.com/embed/f_ft7MtzQyc?si=yCBkaHQbvGGOGFnH" />
        <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 5 }, width: '90%' }} />
        <LectureTypography variant="h3" className="title text-center mt-4">
            I want to be your heart
        </LectureTypography>
        <Video videoLink="https://www.youtube.com/embed/drux1An59E4?si=lb74pw49pcfSPmWE" />
    </RBox>
}