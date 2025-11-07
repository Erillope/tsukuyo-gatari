import { Box } from "@mui/material";
import "../styles.css";
import { CatalogoNovelas } from "../components/content/CatalogoNovelas";
import kaisou11BG1 from "../assets/kaisou11_bg1.png"
import { catalogoNovelaData } from "../data/homeData";
import { AboutTheTraduction, AboutThisPage, Principal } from "../components/home/Principal";
import { CommentsView } from "../components/comment/CommentsView";

export const Home = () => {
    return (
        <Box width="100vw" className="column" component="main">
            <Principal />
            <AboutThisPage />
            <AboutTheTraduction />
            <CatalogoNovelas {...catalogoNovelaData} />
            <CommentsView section="home" commentsBG={kaisou11BG1} bgPosition="center" opacity={0.6} opacitySmall={0.5}/>
        </Box>
    );
}