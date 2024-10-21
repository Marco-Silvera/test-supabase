import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import PerfumeForm from "../components/PerfumeForm";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!supabase.auth.getUser()) {
            navigate('/login')
        }
    }, [navigate])
    return (
        <div>
            <h1>Home</h1>
            <PerfumeForm />
            <button onClick={() => supabase.auth.signOut()}>
                Logout
            </button>
        </div>
    );
}

export default Home;