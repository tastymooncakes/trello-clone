import { useState } from "react";
import type { CardProps } from "../types/Cards";

export function useBoard() {

    const initialList = [
        { 
            id: 1, 
            category: "To Do", 
            cards: [
                {id: 1, title: "Learn React", description: "Master useState", tags: ["learning"]},
                {id: 2, title: "Build Trello", description: "Create project", tags: ["coding"]}
            ]
        },
        { 
            id: 2, 
            category: "In Progress", 
            cards: [
                {id: 3, title: "Debug Code", description: "Fix the bugs", tags: ["debugging"]}
            ]
        },
        { 
            id: 3, 
            category: "Done", 
            cards: []
        }
    ]

    const [lists, setLists] = useState(initialList)

    const addCardToList = (listsId: number, newCard: CardProps) => {
        const updatedList = lists.map((list) => {
            if (list.id === listsId) {
                return {...list, cards: [...list.cards, newCard]}
            }
            return list
        })
        setLists(updatedList)
    }

    const deleteCard = (listId: number, cardId: number) => {
        const updatedList = lists.map((list) => {
            if (list.id === listId) {
                const updatedCard = list.cards.filter(card => card.id !== cardId)
                return {...list, cards: updatedCard}
            }
            return list
        })
        setLists(updatedList)
    }

    const editCard = (listId: number, cardId: number, newTitle: string) => {
        const updatedList = lists.map((list) => {
            if (list.id === listId) {
                const updatedCard = list.cards.map((card) => {
                    if (card.id === cardId) {
                        return {...card, title: newTitle}
                    }
                    return card
                })
                return {...list, cards: updatedCard}
            }
            return list
        })
        setLists(updatedList)
    }

    const moveCard = (initialList: number, newList: number, cardId: number) => {
        if (initialList === newList) return
        const getList = lists.find(list => initialList === list.id)
        const getCard = getList?.cards.find(card => card.id === cardId)

        if (!getCard) return

        const updatedList = lists.map((list) => {
            if (list.id === initialList) {
                const updatedCard = list.cards.filter(card => card.id !== cardId)
                return {...list, cards: updatedCard}
            }
            else if (list.id === newList) {
                return {...list, cards: [...list.cards, getCard]}
            }
            else {
                return list
            }
        })
        setLists(updatedList)
    }

    return {
        lists,
        editCard,
        addCardToList,
        deleteCard,
        moveCard
    }

}