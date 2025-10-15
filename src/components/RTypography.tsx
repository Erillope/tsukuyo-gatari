import { Typography } from "@mui/material"
import { type TypographyProps } from "@mui/material"
import { useStartTransition } from "../hooks/useStartTransition"

export interface RTypographyProps extends TypographyProps {
    variant?: 'body1' | 'h3' | 'h5';
}

export const RTypography = (props: TypographyProps) => {
    const { ref, visible } = useStartTransition()

    const sizes: { [key: string]: number } = {
        'body1': 1,
        'h1': 5,
        'h2': 4,
        'h3': 3,
        'h5': 1.5,
        'h4': 2,
    }

    const getSize = (size: string) => {
        const sizeValue = sizes[size]
        if (size === "body1") {
            return {
                xs: `${sizeValue * 0.8}rem`,
                sm: `${sizeValue * 0.875}rem`,
                md: `${sizeValue}rem`,
                lg: `${sizeValue}rem`,
            }
        }
        return {
            xs: `${sizeValue * 0.5}rem`,
            sm: `${sizeValue * 0.6}rem`,
            md: `${sizeValue * 0.75}rem`,
            lg: `${sizeValue}rem`,
        }
    }

    return (

        <Typography {...props}
            ref={ref}
            sx={{
                fontSize: getSize(props.variant as string),
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                ...props.sx
            }}
        />



    )
}

export const LectureTypography = (props: TypographyProps) => {
    return <RTypography
        {...props}
        sx={{ color: props.color ?? "white !important", textShadow: '1px 1px 2px black', ...props.sx }}>

    </RTypography>
}