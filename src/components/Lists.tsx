import { useState } from "react"
import type { ListProps } from "../types/Lists"
import Card from "./Cards"
import { useBoardContext } from "../context/BoardContext"

const Lists = ({
    id,
    cards,
    category
}: ListProps) => {

    const [addCard, setAddCard] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { addCardToList } = useBoardContext()

    const handleAddCard = (title: string, description: string) => {

        if (!title.trim()) return
        
        const newCard = {
            id: Math.random(),
            title: title.trim(),
            description: description.trim(),
            tags: [],
            listId: id
        }
        addCardToList(id, newCard)
        setAddCard(!addCard)
        setTitle("")
        setDescription("")
    }

    return (
        <div className="flex flex-col w-80 min-w-80 h-fit rounded p-4 bg-gray-100 space-y-2">
            <div className="flex flex-row justify-between items-center">
                <h1 className="font-medium text-2xl text-gray-500">{category}</h1>
                <button
                    className="bg-white flex flex-w p-2 rounded shadow-sm hover:shadow-sm transition-shadow duration-200 active:scale-95"
                    onClick={() => setAddCard(true)}
                >
                    + Add
                </button>
            </div>
            {addCard && (
                <div className="bg-white text-gray-500 rounded space-y-2 shadow-sm transition-shadow duration-200 p-2">
                    <h1 className="uppercase text-md">Title</h1>
                    <input 
                        value={title}
                        className="w-full border rounded p-2"
                        placeholder="Enter Title"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <h1 className="uppercase text-md">Description</h1>
                    <input
                        value={description}
                        className="w-full border rounded p-2"
                        placeholder="Enter Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="mt-2 mb-2 flex flex-row w-full justify-between space-x-2">
                        <button 
                            className="w-1/2 border rounded active:scale-95 p-2"
                            onClick={() => handleAddCard(title, description)}
                        >
                            Submit
                        </button>
                        <button 
                            className="w-1/2 border rounded active:scale-95 p-2"
                            onClick={() => setAddCard(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            
            {cards?.map((card) => (
                <Card key={card.id} {...card} listId={id} />
            ))}

            
        </div>
    )
}

export default Lists