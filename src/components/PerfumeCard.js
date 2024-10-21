import { usePerfumes } from "../context/PerfumeContext";

function PerfumeCard({perfume}){

    const {deletePerfume, displayPerfume} = usePerfumes()

    const handleDelete = () =>{
        deletePerfume(perfume.id)
    }

    const handleDisplay = () =>{
        displayPerfume(perfume)
    }

    return (
        <div>
        <h1>{perfume.name}</h1>
        <p>{perfume.description}</p>
        <p>{perfume.path}</p>
        <strong>{perfume.version}</strong>
        <strong>{perfume.size}</strong>
        <strong>{perfume.price}</strong>
        <img src={perfume.image} alt={perfume.name}/>
        <div>
            <button onClick={()=>handleDelete()}>
                Delete
            </button>
            <button onClick={()=>handleDisplay()}>
                Edit
            </button>
        </div>
    </div>
    )
}

export default PerfumeCard;