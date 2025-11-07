import { useStartTransition } from "../useStartTransition"

export const useRTypography = (props: { variant?: string }) => {
    const { ref, visible } = useStartTransition()

    const sizes: { [key: string]: number } = {
        'body1': 1,
        'h1': 5,
        'h2': 4,
        'h3': 3,
        'h5': 1.5,
        'h4': 2,
        'h6': 1,
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

    const getStyle = () => {
        return {
            fontSize: getSize(props.variant as string),
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }
    }

    return { ref, getStyle }
}