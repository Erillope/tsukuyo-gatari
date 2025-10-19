
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