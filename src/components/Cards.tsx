import { useState } from "react"
import type { CardProps } from "../types/Cards"
import { useBoardContext } from "../context/BoardContext"

const Card = ({
    id,
    title,
    description,
    tags, 
    listId
} : CardProps) => {

    const [toggle, setToggle] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(title)

    const { deleteCard, editCard, moveCard } = useBoardContext()

    const handleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleCancel = () => {
        setEditText(title)
        setIsEditing(!isEditing)
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleDelete = () => {
        console.log("Delete", id, listId)
        deleteCard(listId, id)
    }

    const handleUpdate = () => {
        console.log("Update")
        editCard(listId, id, editText)
        setIsEditing(!isEditing)
    }

    const handleMove = (newList: number) => {
        console.log("Move")
        moveCard(listId, newList, id)
    }

    return (
        <div
            className="flex flex-col bg-white text-gray-500 border-0 rounded-lg p-3 space-y-2 shadow-sm hover:shadow-sm transition-shadow duration-200 cursor-pointer"
            onClick={handleToggle}
        >
            {isEditing ? (<div className="flex flex-row justify-between space-x-2">
                <input 
                    className="p-2 w-full"
                    placeholder="Edit Text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    autoFocus
                />
                <button
                    className="border rounded p-2 shadow-sm hover:shadow-sm duration-200 transition-shadow active:scale-95"
                    onClick={(e) => {e.stopPropagation(), handleUpdate()}}
                >
                    SAVE
                </button>
            </div>) : (
                <div
                    className="flex flex-row justify-between"
                >
                    <h1 className="font-medium text-2xl">{title}</h1>
                    <button
                        className="active:scale-95"
                        onClick={(e) => {e.stopPropagation(), handleDelete()}}
                    >
                        X
                    </button>
                </div>
            )}
            
            {toggle && (
                <p className="font-normal">{description}</p>

            )}
            <div
                className="flex flex-wrap"
            >
                {tags.map((tag) => (
                    <div 
                        key={tag}
                        className="border rounded p-2"
                    >
                        {tag.toUpperCase()}
                    </div>
                ))}
            </div>
            <button className="border rounded p-2 w-full uppercase shadow-sm hover:shadow-sm transition-shadow duration-200 active:scale-95"
                onClick={(e) => {
                    e.stopPropagation()
                    if (isEditing) {
                        handleCancel()
                    } else {
                        handleEdit()
                    }
                }}
            >
                {isEditing ? "cancel" : "edit"}
            </button>
            <div className="flex items-center">
                <div className="flex-1 border-t-2 border-gray-500"></div>
                <span className="px-4 text-gray-400">Move To</span>
                <div className="flex-1 border-t-2 border-gray-500"></div>
            </div>
            <div className="flex flex-row justify-between">
                <button 
                    className="border rounded p-2"
                    onClick={() => handleMove(1)}
                >
                    To Do
                </button>
                <button 
                    className="border rounded p-2"
                    onClick={() => handleMove(2)}
                >
                    In Progress
                </button>
                <button 
                    className="border rounded p-2"
                    onClick={() => handleMove(3)}
                >
                    Done
                </button>
            </div>
        </div>
    )
}

export default Card