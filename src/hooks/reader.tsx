
export const readFile = async(file: string) => {
    let content: string[] = [];

    try {
        const res = await fetch(file);
        const data = await res.text();
        const lines = data.split('\n').map(l => l.replace('\r', ''));
        content = lines;
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

export const readSumaryFile = async(file: string): Promise<SumaryInfo> => {
    const content = await readFile(file);

    return {
        engTitle: content[0] || '',
        jpTitle: content[1] || '',
        romajiTitle: content[2] || '',
        esTitle: content[3] || '',
        bodyParagraphs: content.slice(4).filter(line => line.trim() !== '')
    }
}