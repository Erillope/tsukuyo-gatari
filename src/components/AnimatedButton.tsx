import { Button, Typography } from "@mui/material";
import "../button.css";
import { useStartTransition } from "../hooks/useStartTransition";

interface AnimatedButtonProps {
    text?: string;
    width?: string;
    marginTop?: string;
    onClick?: () => void;
}

export default function AnimatedButton(props: Readonly<AnimatedButtonProps>) {
    const { ref, visible } = useStartTransition()

    return (
        <Button ref={ref} className="animated-button" variant="contained"
            onClick={props.onClick}
            sx={{
                marginTop: props.marginTop,
                width: props.width,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) !important' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}>
            <Typography className="text">{props.text}</Typography>
            <span className="overlay" ></span>
        </Button>
    );
}