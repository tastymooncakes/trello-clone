import type { CardProps } from "./Cards"

export interface ListProps {
    id: number
    cards?: CardProps[]
    category: string
}