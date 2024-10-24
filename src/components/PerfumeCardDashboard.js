import { usePerfumes } from "../context/PerfumeContext";

function PerfumeCard({ perfume }) {

    const { deletePerfume, displayPerfume } = usePerfumes()

    const handleDelete = () => {
        deletePerfume(perfume.id)
    }

    const handleDisplay = () => {
        displayPerfume(perfume)
    }

    return (
        // <article className="w-full bg-red-700 py-2 flex items-center gap-5 text-sm">
        //     <div className="flex gap-5 w-full xl:flex-row flex-col">
        //         <div className="flex items-center gap-5 w-full">
        //             <h1 className="w-full max-w-52">{perfume.name}</h1>
        //             <p className="w-full max-w-96 text-xs">{perfume.description}</p>
        //             <p className="w-full max-w-52">{perfume.path}</p>
        //         </div>
        //         <div className="flex items-center gap-5 w-full max-w-[520px]">
        //             <p className="w-full max-w-20">{perfume.version}</p>
        //             <p className="w-full max-w-20">{perfume.brand}</p>
        //             <p className="w-full max-w-20">{perfume.size}</p>
        //             <p className="w-full max-w-20">{perfume.price}</p>
        //             <div className="grid grid-cols-2 gap-2 content-center w-20 min-w-20 md:w-[120px] md:min-w-[120px]">
        //                 <img className="w-full h-full object-cover aspect-square" src={perfume.image} alt={perfume.name} />
        //                 <img className="aspect-square" src={perfume.imagetwo} alt={perfume.name} />
        //                 <img className="aspect-square" src={perfume.imagethree} alt={perfume.name} />
        //                 <img className="aspect-square" src={perfume.imagefour} alt={perfume.name} />
        //             </div>
        //         </div>
        //     </div>

        <tr className="bg-white border-b hover:bg-gray-50 text-center">
            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap">
                {perfume.name}
            </th>
            <td className="px-2 py-4 text-xs w-full min-w-[400px]">
                {perfume.description}
            </td>
            <td className="px-2 py-4 text-xs">
                {perfume.path}
            </td>
            <td className="px-2 py-4">
                {perfume.brand}
            </td>
            <td className="px-2 py-4">
                {perfume.concentration}
            </td>
            <td className="px-2 py-4">
                {perfume.version}
            </td>
            <td className="px-2 py-4">
                {perfume.gender}
            </td>
            <td className="px-2 py-4">
                {perfume.size} ml
            </td>
            <td className="px-2 py-4">
                {perfume.price}
            </td>
            <td className="px-2 py-4 grid grid-cols-2 gap-2 content-center w-20 min-w-20 md:w-[120px] md:min-w-[120px]">
                <img className="w-full h-full object-cover aspect-square" src={perfume.image} alt={perfume.name} />
                <img className="aspect-square" src={perfume.imagetwo} alt={perfume.name} />
                <img className="aspect-square" src={perfume.imagethree} alt={perfume.name} />
                <img className="aspect-square" src={perfume.imagefour} alt={perfume.name} />

            </td>
            <td className="px-2 py-4">
                <div className="flex flex-col gap-5 justify-center">
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleDisplay()}>
                        Edit
                    </button>
                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => handleDelete()}>
                        Delete
                    </button>
                </div>
                {/* <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a> */}
            </td>









        </tr>
        // </article>
    )
}

export default PerfumeCard;