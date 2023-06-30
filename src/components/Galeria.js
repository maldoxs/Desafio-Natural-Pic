import { useContext, useEffect } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import { Context } from "../Context";

export default function Galeria() {
    const { fotos, setFotos } = useContext(Context);

    useEffect(() => {
        console.log(fotos);
    }, []);

    const setFavoritos = (id) => {
        const fotoIndex = fotos.findIndex((foto) => foto.id === id);
        fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
        setFotos([...fotos]);
    };

    return (
        <div className="galeria grid-columns-5 p-3">
            {fotos.map((foto) => (
                <div
                    onClick={() => setFavoritos(foto.id)}
                    className="foto"
                    style={{ backgroundImage: `url(${foto.src})` }}
                    key={foto.id}>
                    <Heart filled={foto.favorito} />
                    <p>{foto.desc}</p>
                </div>
            ))}
        </div>
    );
}
