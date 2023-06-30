import "./styles.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { Context } from "./Context";

export default function App() {
    const [fotos, setFotos] = useState([]);
    const endpoint = "/fotos.json";

    const getFotos = async () => {
        const response = await fetch(endpoint);
        let { photos } = await response.json();

        const newPhotos = photos.map((photo) => ({
            id: photo.id,
            src: photo.src.tiny,
            desc: photo.alt,
            favorito: false,
        }));

        setFotos(newPhotos);
    };

    useEffect(() => {
        getFotos();
    }, []);

    return (
        <div className="App">
            <Context.Provider value={{ fotos, setFotos }}>
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
}
