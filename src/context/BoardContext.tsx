import { createContext, useContext, type ReactNode } from 'react'
import type { CardProps } from '../types/Cards'
import { useBoard } from '../hooks/useBoard'
import type { ListProps } from '../types/Lists'

// Define what the context provides
interface BoardContextType {
  lists: ListProps[]
  addCardToList: (listId: number, newCard: CardProps) => void
  deleteCard: (listId: number, cardId: number) => void
  editCard: (listId: number, cardId: number, newTitle: string) => void
  moveCard: (initialList: number, newList: number, cardId: number) => void
  addList: (newCard: ListProps) => void
}

// Create the contex
const BoardContext = createContext<BoardContextType | undefined>(undefined)

// Provider component
export function BoardProvider({ children }: { children: ReactNode }) {
  const boardState = useBoard()

  return (
    <BoardContext.Provider value={boardState}>
      {children}
    </BoardContext.Provider>
  )
}

// Custom hook to use the context
export function useBoardContext() {
  const context = useContext(BoardContext)
  if (!context) {
    throw new Error('useBoardContext must be used within a BoardProvider')
  }
  return context
}