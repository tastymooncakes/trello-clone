import { useState } from "react"
import Lists from "./Lists"
import { useBoardContext } from "../context/BoardContext"

const Board = () => {

    const [isAdding, setIsAdding] = useState(false)
    const [listName, setListName] = useState("")

    const { lists, addList } = useBoardContext()

    const handleAddClick = () => {
        console.log("clicked")
        setIsAdding(!isAdding)
    }

    const handleAddList = () => {

        if (!listName.trim()) return

        const newList = {
            id: Math.random(),
            category: listName,
            cards: []
        }

        addList(newList)

        setListName("")
        setIsAdding(false)
    }

    return (
        <div className="flex flex-row space-x-2">
            <div className='overflow-x-auto flex flex-row space-x-2 '>
                {lists.map((list) => (
                    <Lists key={list.id} {...list} />
                    ))}
                <div className="border-2 border-dotted border-gray-300 rounded w-80 min-w-80 h-fit p-4 bg-gray-100">
                    <div>
                        {isAdding ? (
                            <div className="space-y-2">
                                <input
                                    autoFocus
                                    placeholder="Enter List Name"
                                    value={listName}
                                    onChange={(e) => setListName(e.target.value)}
                                    className="w-full p-4 border rounded shadow-sm"
                                />
                                <div className="justify-between flex flex-row gap-2">
                                    <button 
                                        className="border rounded p-4 w-1/2 shadow-sm duration-200 transition-shadow active:scale-95"
                                        onClick={handleAddList}
                                    >
                                        Submit
                                    </button>
                                    <button 
                                        className="border rounded p-4 w-1/2 shadow-sm duration-200 transition-shadow active:scale-95"
                                        onClick={handleAddClick}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>) : (<button 
                        className="text-gray-500 text-2xl font medium flex flex-row items-center justify-center w-full active:scale-95"
                        onClick={handleAddClick}
                    >
                        Add List
                    </button>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board