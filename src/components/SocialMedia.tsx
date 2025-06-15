import YoutubeIcon from "../assets/youtube.svg";
import TwitterIcon from "../assets/twitter.svg";
import TikTokIcon from "../assets/tiktok.svg";
import { Box} from "@mui/material";
import { Icon } from "./Icon";

export interface SocialMediaProps {
    youtube?: string;
    twitter?: string;
    tiktok?: string;
}

export const SocialMedia = (props: SocialMediaProps) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection={"row"}>
            <Icon src={YoutubeIcon} href={props.youtube??'#'}/>
            <Icon src={TwitterIcon} href={props.twitter??'#'}/>
            <Icon src={TikTokIcon} href={props.tiktok??'#'}/>
        </Box>
    )
}

export const YurryCanonSocialMedia = () => {
    return (
        <SocialMedia
            youtube="https://www.youtube.com/@GabrielLopez-io5cv"
            twitter="https://x.com/Tsukuyomi_JP"
            tiktok="https://www.tiktok.com/@tsukuyomi_project"
        />
    )
}

export const MySocialMedia = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection={"row"}>
            <Icon src={YoutubeIcon} href="https://www.youtube.com/c/YurryCanon/featured"/>
            <Icon src={TikTokIcon} href="https://www.tiktok.com/@aka.ito7?_t=ZM-8x2VLDSWCSk&_r=1"/>
        </Box>
    )
}