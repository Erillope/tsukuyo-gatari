import { Avatar, IconButton, type AvatarProps } from "@mui/material"
import "../styles.css";
import { useStartTransition } from "../hooks/useStartTransition";

export interface IconProps extends AvatarProps {
    href: string;
}

export const Icon = (props: IconProps) => {
    const { ref, visible } = useStartTransition()

    return <IconButton href={props.href} target="_blank" rel="noopener noreferrer" ref={ref}
        sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}>
        <Avatar
            {...props}
            className="icon"
        />
    </IconButton>
}