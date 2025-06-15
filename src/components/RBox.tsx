import { Box } from "@mui/material"
import { type BoxProps } from "@mui/material"

export interface RBoxProps extends BoxProps {
    component?: "section" | "div" | "article" | "main" | "aside" | "nav";
    ignorePadding?: boolean;
}

export const RBox = (props: RBoxProps) => {
    const padding = props.ignorePadding ? {} : {
        paddingLeft: {
            xs: 5,
            sm: 6,
            md: 7.5,
            lg: 10,
        },
        paddingRight: {
            xs: 5,
            sm: 6,
            md: 7.5,
            lg: 10,
        },
        paddingTop: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
        },
        paddingBottom: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
        },
    };
    return (
        <Box {...props}
            width={props.width ?? "100%"}
            component={props.component ?? "div"}
            sx={{
                ...props.sx,
                ...padding,
            }}/>
    )
}