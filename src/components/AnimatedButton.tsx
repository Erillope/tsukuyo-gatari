import { Box, Button, Typography } from "@mui/material";
import "../button.css";
import { useStartTransition } from "../hooks/useStartTransition";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ListIcon from '@mui/icons-material/List';

interface AnimatedButtonProps {
    text?: string;
    marginTop?: string;
    width?: string;
    onClick?: () => void;
}

export default function AnimatedButton(props: Readonly<AnimatedButtonProps>) {
    return <AnimatedButtonBox {...props}>
        <Typography className="text">{props.text}</Typography>
    </AnimatedButtonBox>
}

export interface AnimatedButtonBoxProps {
    onClick?: () => void;
    marginTop?: string;
    width?: string;
    children?: React.ReactNode;
}

export const AnimatedButtonBox = (props: Readonly<AnimatedButtonBoxProps>) => {
    const { ref, visible } = useStartTransition()

    return (
        <Button ref={ref} className="animated-button" variant="contained" 
            onClick={props.onClick}
            sx={{
                marginTop: props.marginTop,
                width: props.width || { xs: '50%', lg: '25%' },
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) !important' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}>
            {props.children}
            <span className="overlay" ></span>
        </Button>
    );
}


export const RightArrowButton = (props: Readonly<AnimatedButtonProps>) => {
    return <AnimatedButtonBox {...props}>
        <Typography className="text" sx={{ marginRight: '8px' }}>{props.text}</Typography>
        <ArrowForwardIcon className="text"/>
    </AnimatedButtonBox>
}

export const LeftArrowButton = (props: Readonly<AnimatedButtonProps>) => {
    return <AnimatedButtonBox {...props}>
        <ArrowForwardIcon className="text" sx={{ transform: 'rotate(180deg)', marginRight: '8px' }}/>
        <Typography className="text">{props.text}</Typography>
    </AnimatedButtonBox>
}

export const ListButton = (props: Readonly<AnimatedButtonProps>) => {
    return <AnimatedButtonBox {...props}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <ListIcon className="text" sx={{ marginRight: '8px' }}/>
            <Typography className="text" sx={{ marginTop: '8px' }}>{props.text}</Typography>
        </Box>
    </AnimatedButtonBox>
}