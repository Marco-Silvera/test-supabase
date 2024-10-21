import { useEffect, useState } from "react";
import { usePerfumes } from "../context/PerfumeContext";

function PerfumeFormEdit() {
    const initialFormState = {
        name: '',
        description: '',
        path: '',
        version: '',
        size: '',
        price: '',
        image: ''
    };

    const { selectedPerfume, updatePerfume } = usePerfumes();
    const [formData, setFormData] = useState(initialFormState);

    // Actualiza los inputs con los datos del perfume seleccionado para editar
    useEffect(() => {
        if (selectedPerfume) {
            setFormData({
                name: selectedPerfume.name || '',
                description: selectedPerfume.description || '',
                path: selectedPerfume.path || '',
                version: selectedPerfume.version || '',
                size: selectedPerfume.size || '',
                price: selectedPerfume.price || '',
                image: selectedPerfume.image || ''
            });
        }
    }, [selectedPerfume]);

    // Maneja el evento de submit y actualiza el perfume
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedPerfume) {
            await updatePerfume({ ...selectedPerfume, ...formData });
            setFormData(initialFormState);
        }
    };

    // Actualiza el estado de formData cuando cambian los inputs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="path">Path</label>
                <input
                    type="text"
                    name="path"
                    id="path"
                    value={formData.path}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="version">Version</label>
                <input
                    type="text"
                    name="version"
                    id="version"
                    value={formData.version}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="size">Size</label>
                <input
                    type="text"
                    name="size"
                    id="size"
                    value={formData.size}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    value={formData.image}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Save Changes</button>
        </form>
    );
}

export default PerfumeFormEdit;
