import { supabase } from "../supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PerfumeForm from "../components/PerfumeForm";
import PerfumeFormEdit from "../components/PerfumeFormEdit";
import PerfumeTable from "../components/PerfumeTable";

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

    const handleLogout = async () => {
        await supabase.auth.signOut();  // Cierra sesión con Supabase
        navigate('/');  // Redirige a la página principal o cualquier otra URL
    };

    return (
        <section className="mx-auto w-full max-w-[1500px] py-10 px-5 flex flex-col gap-5">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">Dashboard</h2>
            <PerfumeForm />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">Edición</h2>
            <PerfumeFormEdit />
            <button onClick={handleLogout} className="bg-red-500 rounded-lg w-fit py-2 px-5 self-center  font-bold hover:scale-95 uppercase transition-transform text-white shadow-sm hover:bg-white border hover:border-red-500 hover:text-red-500">
                Logout
            </button>
            <PerfumeTable />
            {/* <PerfumeList /> */}
        </section>
    );
}

export default Dashboard;