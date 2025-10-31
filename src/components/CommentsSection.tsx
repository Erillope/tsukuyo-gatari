import { Avatar, Box, Divider, TextField, type TextFieldProps } from "@mui/material"
import { LectureTypography } from "./RTypography"
import { useStartTransition } from "../hooks/useStartTransition"
import commentBG from '../assets/comment_bg.jpg'
import AnimatedButton from "./AnimatedButton"
import icon1 from "../assets/icon1.jpg"
import icon2 from "../assets/icon2.jpg"
import icon3 from "../assets/icon3.jpg"
import icon4 from "../assets/icon4.png"
import icon5 from "../assets/icon5.png"
import icon6 from "../assets/icon6.png"
import icon7 from "../assets/icon7.png"
import icon8 from "../assets/icon8.png"
import icon9 from "../assets/icon9.png"
import { useEffect, useState } from "react"
import { LectureTitle } from "./LectureTitle"
import { useReadComments } from "../hooks/reader"

export const CommentsView = () => {
    const { comments, addComment } = useReadComments();
    
    return <Box display={'flex'} alignItems={'center'} flexDirection={'column'} width={'100%'} gap={2}
        paddingLeft={{ xs: 1, lg: 10 }} paddingRight={{ xs: 1, lg: 10 }} marginBottom={5}>
        <LectureTitle text="Comentarios" />
        <CommentsSection addComment={addComment} comments={comments} />
    </Box>
}

export const CommentsSection = (props: { addComment?: (comment: CommentProps) => void, comments: CommentProps[] }) => {
    const opacity = 0.7;
    const [comments, setComments] = useState<CommentProps[]>(props.comments || []);
    
    useEffect(() => setComments(props.comments || []), [props.comments]);

    const submitComment = (comment: CommentProps) => {
        setComments((prevComments) => [comment, ...prevComments]);
        props.addComment?.(comment);
    }

    return <Box width={'100%'} border={1} borderRadius={'20px'} gap={2} display={'flex'} flexDirection={'column'}
        paddingBottom={5}
        sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url(${commentBG})`,
            borderTopRightRadius: '20px', borderTopLeftRadius: '20px',
        }}>
        <WriteComment submit={submitComment} />
        {comments.length === 0 ?
            <Box><LectureTypography>No hay comentarios aún. Sé el primero en comentar :).</LectureTypography></Box> :
            comments.map((comment) => (
                <Comment key={comment.datetime.toISOString()} {...comment} />
            ))}
    </Box>
}

const WriteComment = (props: { submit?: (comment: CommentProps) => void }) => {
    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];
    const [nickName, setNickName] = useState('');
    const [comment, setComment] = useState('');
    const [icon, setIcon] = useState(icons[0]);
    const [disabled, setDisabled] = useState(true);

    const validateInputs = () => {
        if (nickName.trim() === '' || comment.trim() === '') {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    const submitComment = () => {
        const commentData: CommentProps = {
            nickName: nickName,
            commentText: comment,
            iconLink: icon,
            datetime: new Date(),
        }
        setNickName('');
        setComment('');
        props.submit?.(commentData);
    }

    useEffect(validateInputs, [nickName, comment]);

    return <Box bgcolor={'rgba(0, 0, 0, 0.2)'} display={'flex'} flexDirection={'column'} gap={2} alignItems="flex-start"
        paddingLeft={{ xs: 3, lg: 10 }} paddingRight={{ xs: 3, lg: 10 }} paddingTop={2} paddingBottom={2} sx={{ borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }}>
        <LectureTypography>
            NickName
        </LectureTypography>
        <InputText maxLength={50} placeholder="Escribe un NickName" value={nickName} onChange={(e) => setNickName(e.target.value)} />
        <LectureTypography>
            Comentario
        </LectureTypography>
        <InputText multiline rows={4} placeholder="Escribe un comentario o review :)" value={comment} onChange={(e) => setComment(e.target.value)} />
        <IconSelect icons={icons} icon={icon} setIcon={setIcon} />
        <AnimatedButton text="Comentar" onClick={submitComment} width={{ xs: "50%", lg: "10%" }} disabled={disabled} />
    </Box>
}

const IconSelect = (props: { icons: string[], icon: string, setIcon: (icon: string) => void }) => {
    return <Box display={'flex'} flexDirection={{ xs: "column", lg: "row" }} gap={2} alignItems={'center'}>
        <LectureTypography>
            Elije un ícono:
        </LectureTypography>
        <Box display={'flex'} flexDirection={'row'} gap={2} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
            {props.icons.map((iconLink) => (
                <IconAvatar key={iconLink} iconLink={iconLink} selected={iconLink === props.icon} onClick={() => props.setIcon(iconLink)} />
            ))}
        </Box>
    </Box>
}

export interface CommentProps {
    datetime: Date;
    nickName: string;
    commentText: string;
    iconLink: string;
}

const Comment = (props: CommentProps) => {
    return <Box display={'flex'} flexDirection={'row'} gap={2} alignItems={'flex-start'} width={'100%'} paddingLeft={{ xs: 2, lg: 5 }} paddingRight={5}>
        <IconAvatar iconLink={props.iconLink} />
        <Box bgcolor={'rgba(255, 255, 255, 0.05)'} display={'flex'} flexDirection={'column'} gap={2} alignItems="flex-start" width={'100%'} borderRadius={'20px'} paddingBottom={2}>
            <Box paddingTop={2} display={'flex'} flexDirection={'row'} gap={2} alignItems={'center'} width={'100%'} paddingLeft={{ xs: 2, lg: 5 }} paddingRight={{ xs: 2, lg: 5 }}>
                <LectureTypography variant="body1">{props.nickName}</LectureTypography>
                <LectureTypography variant="h6" sx={{ color: 'gray !important' }}>{props.datetime.toLocaleString()}</LectureTypography>
            </Box>
            <Box width={'100%'}>
                <Divider sx={{ borderColor: 'white', borderBottomWidth: 1, mx: { xs: 2, lg: 5 } }} />
            </Box>
            <LectureTypography variant="body1" align="left" whiteSpace="pre-line" sx={{ paddingLeft: { xs: 2, lg: 5 }, paddingRight: { xs: 1, lg: 5 } }}>
                {props.commentText}
            </LectureTypography>
        </Box>
    </Box>
}

type InputTextProps = TextFieldProps & {
    maxLength?: number;
};

const InputText = (props: InputTextProps) => {
    const { ref, visible } = useStartTransition()

    return <TextField fullWidth variant="outlined" slotProps={{
        input: {
            inputProps: { maxLength: props.maxLength },
        },
    }}
        ref={ref}
        sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) !important' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.2)",
                },
                "&:hover fieldset": {
                    borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                    borderColor: "white",
                },
                "& .MuiInputBase-input::placeholder": {
                    color: "gray",
                    opacity: 0.5,
                },
                "& .MuiInputBase-input": {
                    color: "white",
                    fontFamily: "Marcellus, Roboto, sans-serif",
                    textShadow: '1px 1px 2px black'
                },
            }
        }
        }
        {...props}
    />
}

const IconAvatar = (props: { iconLink: string; selected?: boolean, onClick?: () => void, width?: number | string | any, height?: number | string | any }) => {
    const { ref, visible } = useStartTransition()

    return <Avatar ref={ref} onClick={props.onClick} src={props.iconLink} sx={{
        width: props.width || 56, height: props.height || 56, cursor: props.onClick ? 'pointer' : 'default',
        border: props.selected ? '3px solid red' : 'none',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) !important' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    }} />
}