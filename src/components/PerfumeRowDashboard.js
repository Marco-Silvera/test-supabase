import { usePerfumes } from "../context/PerfumeContext";

function PerfumeRowDashboard({ perfume }) {

    const { deletePerfume, displayPerfume } = usePerfumes()

    const handleDelete = () => {
        deletePerfume(perfume.id)
    }

    const handleDisplay = () => {
        displayPerfume(perfume)
    }

    return (
        <tr className="bg-white border-b hover:bg-gray-100 text-center even:bg-gray-50">
            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap ">
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
            </td>
        </tr>
    )
}

export default PerfumeRowDashboard;