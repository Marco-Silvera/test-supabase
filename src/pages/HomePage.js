import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/client';

function HomePage() {
    const [perfumes, setPerfumes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Función para obtener los perfumes desde la base de datos
    const fetchPerfumes = async () => {
        try {
            const { data, error } = await supabase
                .from('perfumes') // Nombre de la tabla
                .select('*');     // Seleccionar todos los campos

            if (error) throw error;

            // Guardamos los datos de perfumes en el estado
            setPerfumes(data);
        } catch (error) {
            console.error('Error fetching perfumes:', error);
        } finally {
            setLoading(false); // Dejamos de mostrar el loading
        }
    };

    // useEffect para cargar los perfumes cuando el componente se monta
    useEffect(() => {
        fetchPerfumes();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut(); // Cierra sesión
        navigate('/login'); // Redirige al login después de cerrar sesión
    };

    // Si está cargando, mostramos un mensaje de carga
    if (loading) {
        return <div>Loading perfumes...</div>;
    }

    return (
        <div>
            <h1>Perfume List</h1>
            <div>
                {perfumes.length > 0 ? (
                    perfumes.map((perfume) => (
                        <div key={perfume.id} className="perfume-item">
                            <h2>{perfume.name}</h2>
                            <p>{perfume.description}</p>
                            <p>Version: {perfume.version}</p>
                            <p>Marca: {perfume.brand}</p>
                            <p>Size: {perfume.size}</p>
                            <p>Price: {perfume.price}</p>
                            <img src={perfume.image} alt={perfume.name} />
                        </div>
                    ))
                ) : (
                    <p>No perfumes available</p>
                )}
            </div>
            <a href='/login'>Login</a>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
}

export default HomePage;
