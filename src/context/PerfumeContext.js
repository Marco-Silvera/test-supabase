import { createContext, useContext, useState } from 'react';
import { supabase } from '../supabase/client';

export const PerfumeContext = createContext();

export const usePerfumes = () => {
    const context = useContext(PerfumeContext)
    if (!context) throw Error('usePerfumes must be used within PerfumeContextProvider')
    return context
}

export const PerfumeContextProvider = ({ children }) => {

    const [perfumes, setPerfumes] = useState([])
    const [adding, setAdding] = useState(false)
    const [loading, setLoading] = useState(false)
    const [perfumeToEdit, setPerfumeToEdit] = useState(null)
    const [selectedPerfume, setSelectedPerfume] = useState(null);


    const getPerfumes = async () => {
        setLoading(true)
        const { error, data } = await supabase.from('perfumes').select().order('id', { ascending: true });
        if (error) throw error

        setPerfumes(data)
        setLoading(false)
    }

    const createPerfume = async (perfumeName, perfumeDescription, perfumePath, perfumeVersion, perfumeSize, perfumePrice, perfumeImage,perfumeImageTwo,perfumeImageThree,perfumeImageFour) => {

        setAdding(true)
        try {
            const { error, data } = await supabase.from('perfumes').insert({
                name: perfumeName,
                description: perfumeDescription,
                path: perfumePath,
                version: perfumeVersion,
                size: perfumeSize,
                price: perfumePrice,
                image: perfumeImage,
                imagetwo: perfumeImageTwo,
                imagethree: perfumeImageThree,
                imagefour: perfumeImageFour
            })

            if (error) throw error
            // setPerfumes([...perfumes, ...data])
            await getPerfumes();
        } catch (error) {
            console.error(error)
        } finally { setAdding(false) }

    }

    const deletePerfume = async (id) => {
        const { error, data } = await supabase.from('perfumes').delete().eq('id', id)

        if (error) throw error

        setPerfumes(perfumes.filter(perfume => perfume.id !== id))
        console.log(data)
    }

    const displayPerfume = (perfume) => {
        setSelectedPerfume(perfume);
    }

    const updatePerfume = async (updatedPerfume) => {
        const { id, name, description, path, version, size, price, image, imagetwo, imagethree, imagefour } = updatedPerfume;
        console.log('Updating perfume with ID:', id);  // Para ver si el ID es correcto
        console.log('Updated perfume data:', updatedPerfume);
        const { data, error } = await supabase
            .from('perfumes')
            .update({
                name,
                description,
                path,
                version,
                size,
                price,
                image,
                imagetwo,
                imagethree,
                imagefour
            })
            .eq('id', id);
        if (error) {
            console.error('Error updating perfume:', error);  // Mostrar el error si falla
        } else {
            console.log('Update successful:', data);  // Verificar si el update fue exitoso
            await getPerfumes();  // Refresca la lista de perfumes
        }
    }

    return <PerfumeContext.Provider value={{ perfumes, getPerfumes, createPerfume, adding, loading, deletePerfume, displayPerfume, updatePerfume, perfumeToEdit, setSelectedPerfume, selectedPerfume }}>
        {children}
    </PerfumeContext.Provider>
}