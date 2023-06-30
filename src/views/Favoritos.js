import { useContext } from "react";
import { Context } from "../Context";

export default function Favoritos() {
    const { fotos, setFotos } = useContext(Context);

    const deleteFavoritos = (id) => {
        const fotoIndex = fotos.findIndex((foto) => foto.id === id);
        fotos.splice(fotoIndex, 1);
        setFotos([...fotos]);
    };

    return (
        <div>
            <h1>Fotos favoritas</h1>
            <div className="p-3 galeria grid-columns-4">
                {fotos
                    .filter((foto) => foto.favorito)
                    .map((foto) => {
                        return (
                            <img
                                src={foto.src}
                                alt={foto.desc}
                                key={foto.id}
                                onClick={() => deleteFavoritos(foto.id)}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
