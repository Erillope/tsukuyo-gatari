import type { CommentProps } from "../components/CommentsSection";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, push, ref } from "firebase/database";
import { useEffect, useState } from "react";

export const readFile = async (file: string): Promise<string> => {
    let content: string = "";

    try {
        const res = await fetch(file);
        content = await res.text()
    } catch (err) {
        console.error('Error al leer el archivo:', err);
    }

    return content;
}

export interface SumaryInfo {
    engTitle: string;
    jpTitle: string;
    esTitle: string;
    romajiTitle: string;
    bodyParagraphs: string[];
}

export const readSummaryFile = async (file: string): Promise<SumaryInfo> => {
    const data = await readFile(file);
    const content = data.split('\n').map(l => l.replace('\r', ''));

    return {
        engTitle: content[0] || '',
        jpTitle: content[1] || '',
        romajiTitle: content[2] || '',
        esTitle: content[3] || '',
        bodyParagraphs: content.slice(4).filter(line => line.trim() !== '')
    }
}

export const readBodyParagraphs = (chapterSections: string[]): string[] => {
    const paragraphs: string[] = [];
    let newParagraph = "";
    let concatMode = false;
    for (let chapterSection of chapterSections) {
        if (concatMode) {
            if (chapterSection.includes(">>>")) { concatMode = false; paragraphs.push(newParagraph); newParagraph = ""; }
            else if (newParagraph.trim() === "") { newParagraph = chapterSection.trim(); }
            else { newParagraph += "\n" + chapterSection.trim(); }
        }
        else if (chapterSection.includes(">>>")) {
            concatMode = true; continue
        } else {
            paragraphs.push(chapterSection.trim());
        }
    }
    return paragraphs;
}

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        signInAnonymously(auth);
    }
});

interface FireBaseComment {
    datetime: string;
    nickName: string;
    commentText: string;
    iconLink: string;
}

export const useReadComments = () => {
    const [comments, setComments] = useState<CommentProps[]>([]);
    const commentsRef = ref(db, 'comments');

    const addComment = async (comment: CommentProps) => {
        const firebaseComment: FireBaseComment = {
            datetime: new Date().toISOString(),
            nickName: comment.nickName,
            commentText: comment.commentText,
            iconLink: comment.iconLink
        };
        await push(commentsRef, firebaseComment);
    };

    const readComments = () => {
        const unsubscribe = onValue(commentsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedComments: FireBaseComment[] = Object.values(data);
                const normalizedComments: CommentProps[] = loadedComments.map((c) => {
                    const rawDatetime = (c as any).datetime;
                    return {
                        ...c,
                        datetime: rawDatetime ? new Date(rawDatetime) : rawDatetime
                    };
                });
                normalizedComments.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());
                setComments(normalizedComments);
            }
        });
        return () => unsubscribe();
    }

    useEffect(readComments, []);

    return { addComment, comments };
};