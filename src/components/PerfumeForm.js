import { useState } from "react";
import { usePerfumes } from "../context/PerfumeContext";

function PerfumeForm() {
    const [perfumeName, setPerfumeName] = useState('');
    const [perfumeDescription, setPerfumeDescription] = useState('');
    const [perfumePath, setPerfumePath] = useState('');
    const [perfumeVersion, setPerfumeVersion] = useState('');
    const [perfumeSize, setPerfumeSize] = useState('');
    const [perfumePrice, setPerfumePrice] = useState('');
    const [perfumeImage, setPerfumeImage] = useState('');

    const { createPerfume, adding } = usePerfumes()

    const handleSubmit = async e => {
        e.preventDefault();
        createPerfume(perfumeName, perfumeDescription, perfumePath, perfumeVersion, perfumeSize, perfumePrice, perfumeImage)
        setPerfumeName('')
        setPerfumeDescription('')
        setPerfumePath('')
        setPerfumeVersion('')
        setPerfumeSize('')
        setPerfumePrice('')
        setPerfumeImage('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="perfumename" placeholder="Nombre de perfume" onChange={(e) => setPerfumeName(e.target.value)} value={perfumeName}/>
                <input type="text" name="perfumedescription" placeholder="Descripcion de perfume" onChange={(e) => setPerfumeDescription(e.target.value)} value={perfumeDescription} />
                <input type="text" name="perfumepath" placeholder="Path de perfume" onChange={(e) => setPerfumePath(e.target.value)} value={perfumePath}/>
                <input type="text" name="perfumeversion" placeholder="Version de perfume" onChange={(e) => setPerfumeVersion(e.target.value)} value={perfumeVersion}/>
                <input type="number" name="perfumesize" placeholder="Tamaño de perfume" onChange={(e) => setPerfumeSize(e.target.value)} value={perfumeSize}/>
                <input type="number" name="perfumeprice" placeholder="Precio de perfume" onChange={(e) => setPerfumePrice(e.target.value)} value={perfumePrice}/>
                <input type="text" name="perfumeimage" placeholder="Imagen de perfume" onChange={(e) => setPerfumeImage(e.target.value)} value={perfumeImage}/>
                <button disabled={adding}>
                    {adding ? "Adding..." : "Add"}
                </button>
            </form>
        </div>
    );
}

export default PerfumeForm;