import { useState } from "react"
import type { ListProps } from "../types/Lists"
import AddCardModal from "./AddCardModal"
import Card from "./Cards"

const Lists = ({
    id,
    cards,
    category
}: ListProps) => {

    const [modalOpen, setModalOpen] = useState(false)

    const handleSubmit = () => {
        console.log("Submitted")
    }

    return (
        <div className="flex flex-col w-80 min-w-80 h-fit rounded p-4 bg-gray-100 space-y-2">
            <div className="flex flex-row justify-between items-center">
                <h1 className="font-medium text-2xl text-gray-500">{category}</h1>
                <button
                    className="bg-color-white flex flex-w p-2 rounded shadow-sm hover:shadow-sm transition-shadow duration-200 active:scale-95"
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    + Add
                </button>
            </div>
            {cards?.map((card) => (
                <Card key={card.id} {...card} listId={id} />
            ))}

            <AddCardModal 
                isOpen={modalOpen}
                onClose={() => setModalOpen(!modalOpen)}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default Lists