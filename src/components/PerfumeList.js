import { useEffect } from "react";
import { usePerfumes } from "../context/PerfumeContext";
import PerfumeCardDashboard from "./PerfumeCardDashboard";

function PerfumeList() {

    const { perfumes, getPerfumes, loading } = usePerfumes()

    console.log(perfumes)
    useEffect(() => {
        getPerfumes()
    }, [])

    function renderPerfumes() {
        if (loading) {
            return <p>Loading...</p>
        } else if (perfumes.length === 0) {
            return <p>No hay perfumes</p>
        } else {
            return (
                <section>
                    {
                        perfumes.map(perfume => (
                            <PerfumeCardDashboard perfume={perfume} />
                        ))
                    }
                </section>
            );
        }
    }
    return <div>
        {renderPerfumes()}
    </div>
}

export default PerfumeList;