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
    const [perfumeImageTwo, setPerfumeImageTwo] = useState('');
    const [perfumeImageThree, setPerfumeImageThree] = useState('');
    const [perfumeImageFour, setPerfumeImageFour] = useState('');

    const { createPerfume, adding } = usePerfumes()

    const handleSubmit = async e => {
        e.preventDefault();
        createPerfume(perfumeName, perfumeDescription, perfumePath, perfumeVersion, perfumeSize, perfumePrice, perfumeImage,perfumeImageTwo,perfumeImageThree,perfumeImageFour)
        setPerfumeName('')
        setPerfumeDescription('')
        setPerfumePath('')
        setPerfumeVersion('')
        setPerfumeSize('')
        setPerfumePrice('')
        setPerfumeImage('')
        setPerfumeImageTwo('')
        setPerfumeImageThree('')
        setPerfumeImageFour('')
    }

    return (
        <section className="bg-red-500">
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-5 justify-center">
                <label className="flex flex-col items-start w-full max-w-[280px]"> Nombre
                    <input className="border border-black p-2 rounded-lg w-full" type="text" name="perfumename" placeholder="Nombre de perfume" onChange={(e) => setPerfumeName(e.target.value)} value={perfumeName} />
                </label>
                <label className="flex flex-col items-start w-full max-w-[280px]"> Nombre
                    <input className="border border-black p-2 rounded-lg w-full max-w-[280px]" type="text" name="perfumedescription" placeholder="Descripcion de perfume" onChange={(e) => setPerfumeDescription(e.target.value)} value={perfumeDescription} />
                </label>
                <label className="flex flex-col items-start w-full max-w-[280px]"> Nombre
                    <input className="border border-black p-2 rounded-lg w-full max-w-[280px]" type="text" name="perfumepath" placeholder="Path de perfume" onChange={(e) => setPerfumePath(e.target.value)} value={perfumePath} />
                </label>
                <label className="flex flex-col items-start w-full max-w-[280px]"> Nombre
                    <input className="border border-black p-2 rounded-lg w-full max-w-[280px]" type="text" name="perfumeversion" placeholder="Version de perfume" onChange={(e) => setPerfumeVersion(e.target.value)} value={perfumeVersion} />
                </label>
                <label className="flex flex-col items-start w-full max-w-[280px]"> Nombre
                    <input className="border border-black p-2 rounded-lg w-full max-w-[280px]" type="number" name="perfumesize" placeholder="Tamaño de perfume" onChange={(e) => setPerfumeSize(e.target.value)} value={perfumeSize} />
                </label>
                <label className="flex flex-col items-start w-full max-w-[280px]"> Nombre
                    <input className="border border-black p-2 rounded-lg w-full max-w-[280px]" type="number" name="perfumeprice" placeholder="Precio de perfume" onChange={(e) => setPerfumePrice(e.target.value)} value={perfumePrice} />
                </label>
                <label className="flex flex-col items-start w-full max-w-[280px]"> Nombre
                    <input className="border border-black p-2 rounded-lg w-full max-w-[280px]" type="text" name="perfumeimage" placeholder="Imagen de perfume" onChange={(e) => setPerfumeImage(e.target.value)} value={perfumeImage} />
                </label>
                <label className="flex flex-col items-start w-full max-w-[280px]"> Nombre
                    <input className="border border-black p-2 rounded-lg w-full max-w-[280px]" type="text" name="perfumeimage" placeholder="Imagen de perfume" onChange={(e) => setPerfumeImageTwo(e.target.value)} value={perfumeImageTwo} />
                </label>
                <label className="flex flex-col items-start w-full max-w-[280px]"> Nombre
                    <input className="border border-black p-2 rounded-lg w-full max-w-[280px]" type="text" name="perfumeimage" placeholder="Imagen de perfume" onChange={(e) => setPerfumeImageThree(e.target.value)} value={perfumeImageThree} />
                </label>
                <label className="flex flex-col items-start w-full max-w-[280px]"> Nombre
                    <input className="border border-black p-2 rounded-lg w-full max-w-[280px]" type="text" name="perfumeimage" placeholder="Imagen de perfume" onChange={(e) => setPerfumeImageFour(e.target.value)} value={perfumeImageFour} />
                </label>
                <button disabled={adding}>
                    {adding ? "Adding..." : "Add"}
                </button>
            </form>
        </section>
    );
}

export default PerfumeForm;