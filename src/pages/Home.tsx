import { Box } from "@mui/material";
import "../styles.css";
import { CatalogoNovelas } from "../components/content/CatalogoNovelas";
import kaisou11BG1 from "../assets/kaisou11_bg1.png"
import { AboutTheTraduction, AboutThisPage, Principal } from "../components/home/Principal";
import { CommentsView } from "../components/comment/CommentsView";
import { useHomeData } from "../hooks/dataReader/homeData";

export const Home = () => {
    const { aboutThisPageMessage, aboutTraductionMessage, catalogoNovelasData } = useHomeData();

    return (
        <Box width="100vw" className="column" component="main">
            <Principal />
            <AboutThisPage message={aboutThisPageMessage} />
            <AboutTheTraduction message={aboutTraductionMessage} />
            <CatalogoNovelas {...catalogoNovelasData} />
            <CommentsView section="home" commentsBG={kaisou11BG1} bgPosition="center" opacity={0.6} opacitySmall={0.5}/>
        </Box>
    );
}