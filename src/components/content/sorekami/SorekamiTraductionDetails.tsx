import { RBox } from "../../ui/RBox";
import { RTypography } from "../../ui/RTypography";

export const SorekamiTraductionDetails = () => {
    const sorekamiLink = () => <a href="https://sorekami.tsukuyomi2943.com/" target="_blank" rel="noopener noreferrer">Tsukuyomi Official Page</a>;
    return (
        <RBox className="black-bg"
            component="section">
            <RTypography variant="h3" className="title text-center mt-4">
                Detalles de la traducción
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                El sitio oficial de la novela es {sorekamiLink()}. He traducido la novela de aquí y también del canal y contenido de los albumes de Tsukuyomi / Yurry Canon, en especial el álbum "Sore wo bokura wa kami sama to yobu".
                <br /> La novela cuenta con 6 episodios, pero los últimos dos episodios (5 y 6) son muy largos en comparación con los demás, así que los he partido en dos, haciendo un total de 8 capítulos traducidos.
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                Para mi sorpresa, solo los capítulos 1, 2, 3 y 2.307 son los únicos titulados. Los demás no tienen título, así que me tomé el atrevimiento de ponerles un título basado en el contenido del capítulo y de las canciones del álbum.
                <br />Espero que disfruten la lectura tanto como yo disfruté traducirla 💖
            </RTypography>
        </RBox>
    )
}