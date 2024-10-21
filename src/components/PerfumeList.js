import { useEffect } from "react";
import { usePerfumes } from "../context/PerfumeContext";
import PerfumeCard from "./PerfumeCard";

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
                <div>
                    {
                        perfumes.map(perfume => (
                            <PerfumeCard perfume={perfume} />
                        ))
                    }
                </div>
            );
        }
    }
    return <div>
        {renderPerfumes()}
    </div>
}

export default PerfumeList;