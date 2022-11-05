import { ReactElement } from "react"

export interface Product {
    id: number
    title: string
    img?: string
}

export interface ProductCardProps {
    children?: ReactElement | ReactElement[]
    product: Product
}

export interface ProductCardHocProps {
    ({ children, product }: ProductCardProps): JSX.Element
    Buttons: () => JSX.Element
    Image: ({ img }: { img?: string }) => JSX.Element
    Title: ({ title }: { title?: string }) => JSX.Element
}
