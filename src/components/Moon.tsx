import { Avatar, Box } from "@mui/material"
import MoonIcon from "../assets/moon.png";
import Logo from "../assets/logo.svg";
import "../styles.css";

export const Moon = () => {
    return (
        <Box sx={{
            position: "relative",
            margin: 10
        }}>
            <Box className="moon">
                <Avatar alt="moon" src={MoonIcon} sx={{ width: '145%', height: '145%' }} />
            </Box>
            <img src={Logo} style={{
                position: 'absolute',
                scale: 1.5,
                zIndex: 2,
                top: '50%',
                left: '50%',
                filter: 'invert(1) sepia(1) saturate(10000%) hue-rotate(180deg)',
                animation: 'fadeIn 1s ease-out forwards',
            }} />
            <style>
                {`
                    @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translate(-40%, -30%) scale(0.8);
                    }
                    100% {
                        opacity: 1;
                        transform: translate(-40%, -30%) scale(1);
                    }
                    }
                `}
            </style>
        </Box>

    )
}