import { supabase } from "../supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PerfumeForm from "../components/PerfumeForm";
import PerfumeFormEdit from "../components/PerfumeFormEdit";
import PerfumeList from "../components/PerfumeList";

function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            
            if (!session) {
                navigate('/login');
            }
        };

        checkUser();
    }, [navigate]);

    return (
        <section className="mx-auto w-full max-w-[1000px] py-20 px-5 flex flex-col gap-5">
            <h1 className="text-3xl font-bold uppercase">Dashboard</h1>
            <PerfumeForm />
            <PerfumeFormEdit />
            <button onClick={() => supabase.auth.signOut()}>
                Logout
            </button>
            <PerfumeList />
        </section>
    );
}

export default Dashboard;