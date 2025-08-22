import { useState } from "react"
import type { AddCard } from "../types/AddCard"

const AddCardModal = ({
    onClose,
    isOpen,
    onSubmit
} : AddCard) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    if (!isOpen) return

    return (
        <div className="flex fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-xl w-96 min-w-[90vw] space-y-2 flex flex-col items-center">
                <div className="w-4/5">
                    <h1>Title</h1>
                    <input 
                        placeholder="Enter Title"
                        autoFocus
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-2 border w-full"
                    />
                </div>
                <div className="w-4/5">
                    <h1>Description</h1>
                    <input 
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                </div>
                <div className="flex flex-row w-full items-center justify-center space-x-2">
                    <button
                        className="border rounded p-2"
                    >
                        Submit
                    </button>
                    <button
                        className="border rounded p-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddCardModal