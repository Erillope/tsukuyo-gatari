import { Typography } from "@mui/material"
import { type TypographyProps } from "@mui/material"
import { useRTypography } from "../../hooks/ui/useRTypography";

export interface RTypographyProps extends TypographyProps {
    variant?: 'body1' | 'h3' | 'h5';
}

export const RTypography = (props: TypographyProps) => {
    const { ref, getStyle } = useRTypography({ variant: props.variant });

    return (
        <Typography {...props}
            ref={ref}
            sx={{
                ...getStyle(),
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