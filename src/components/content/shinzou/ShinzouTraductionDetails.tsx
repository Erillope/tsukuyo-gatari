import { RBox } from "../../ui/RBox";
import { RTypography } from "../../ui/RTypography";

export const ShinzouTraductionDetails = () => {
    const shinzouLink = () => <a href="https://sorekami.tsukuyomi2943.com/1ststory_summary/" target="_blank" rel="noopener noreferrer">Tsukuyomi Official Page</a>;
    return (
        <RBox className="black-bg"
            component="section">
            <RTypography variant="h3" className="title text-center mt-4">
                Detalles de la traducción
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                El sitio oficial de la novela es {shinzouLink()}. He traducido la novela de aquí y también del canal y contenido de los albumes de Tsukuyomi / Yurry Canon.
                <br /> Solo hay un pequeño detalle de la traducción que me gustaría aclarar: Los nombres de las protagonistas ユマ(Yuma) y リノ(Rino).
                <br /> En especial el nombre de リノ que en letras romanas se escribe "Rino", sin embargo en español la pronunciación de la letra "R" al inicio de una palabra
                es diferente a la pronunciación de la "R" en japonés (En español es una "R" fuerte, mientras que en japonés es una "R" suave),
                por lo que decidí cambiar la "R" por una "L" para que la pronunciación fuera más cercana a la original. (De todas maneras en el japonés no hay distinción entre "R" y "L").
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                <br /> Así que en esta traducción, el nombre de リノ(Rino) lo verán escrito como "Lino".
                <br /> Espero que disfruten la lectura tanto como yo disfruté traducirla 💖
            </RTypography>
        </RBox>
    )
}