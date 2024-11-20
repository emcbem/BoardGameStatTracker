import { ReactNode } from "react"

export interface ModalController {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: ReactNode,
    title: string,
    onClose: () => void,
    onSubmit: () => void
}

