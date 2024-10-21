import { useState } from "react";
import { supabase } from "../supabase/client";

function PerfumeForm() {
    const [perfumeName, setPerfumeName] = useState('');
    const [perfumeDescription, setPerfumeDescription] = useState('');
    const [perfumePath, setPerfumePath] = useState('');
    const [perfumeVersion, setPerfumeVersion] = useState('');
    const [perfumeSize, setPerfumeSize] = useState('');
    const [perfumePrice, setPerfumePrice] = useState('');
    const [perfumeImage, setPerfumeImage] = useState('');
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const result = await supabase.from('perfumes').insert({
                name: perfumeName,
                description: perfumeDescription,
                path: perfumePath,
                version: perfumeVersion,
                size: perfumeSize,
                price: perfumePrice,
                image: perfumeImage,
            })
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="perfumename" placeholder="Nombre de perfume" onChange={(e) => setPerfumeName(e.target.value)} />
                <input type="text" name="perfumedescription" placeholder="Descripcion de perfume" onChange={(e) => setPerfumeDescription(e.target.value)} />
                <input type="text" name="perfumepath" placeholder="Path de perfume" onChange={(e) => setPerfumePath(e.target.value)} />
                <input type="text" name="perfumeversion" placeholder="Version de perfume" onChange={(e) => setPerfumeVersion(e.target.value)} />
                <input type="number" name="perfumesize" placeholder="Tamaño de perfume" onChange={(e) => setPerfumeSize(e.target.value)} />
                <input type="number" name="perfumeprice" placeholder="Precio de perfume" onChange={(e) => setPerfumePrice(e.target.value)} />
                <input type="text" name="perfumeimage" placeholder="Imagen de perfume" onChange={(e) => setPerfumeImage(e.target.value)} />
                <button>
                    Add
                </button>
            </form>
        </div>
    );
}

export default PerfumeForm;