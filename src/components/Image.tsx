import { Box, type BoxProps } from "@mui/material";
import { useStartTransition } from "../hooks/useStartTransition";

export interface ImageProps extends BoxProps {
    src?: string;
}

export const Image = (props: ImageProps) => {
    const { ref, visible } = useStartTransition()
    
    return <Box
        component="img"
        ref={ref}
        {...props}
        sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            ...props.sx
        }}
        />  
}