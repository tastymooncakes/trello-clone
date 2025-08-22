export interface AddCard {
    isOpen: boolean
    onClose: () => void
    onSubmit: (cardData: any) => void
}