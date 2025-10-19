import { useState, useEffect } from "react";
import { readSummaryFile } from "../hooks/reader";
import { RBox } from "./RBox";
import { RTypography } from "./RTypography";

export interface IntroductionProps {
    summaryFilePath: string;
}

export const Introduction = (props: IntroductionProps) => {
    const [introductionBody, setIntroductionBody] = useState<string>("");

    const initData = async () => {
        const content = await readSummaryFile(props.summaryFilePath);
        setIntroductionBody(content.bodyParagraphs.join("\n"));
    }
    useEffect(() => { initData() }, []);

    return (
        <RBox className="black-bg"
            component="section">
            <RTypography variant="h3" className="title text-center mt-4">
                Introducción
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                {introductionBody}
            </RTypography>
        </RBox>
    )
}