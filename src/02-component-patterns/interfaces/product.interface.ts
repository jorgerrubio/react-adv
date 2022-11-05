import { ProductButtonsProps } from '../components/ProductButtons'
import { ProductCardProps } from '../components/ProductCard'
import { ProductImageProps } from '../components/ProductImage'
import { ProductTitleProps } from '../components/ProductTitle'

export interface Product {
    id: number
    title: string
    img?: string
}

export interface ProductCardHocProps {
    ({ children, product }: ProductCardProps): JSX.Element
    Buttons: (Props: ProductButtonsProps) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element
    Title: (Props: ProductTitleProps) => JSX.Element
}
