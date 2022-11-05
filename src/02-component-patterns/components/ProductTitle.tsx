import { useContext } from 'react'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export type ProductTitleProps = {
    className?: string
    title?: string
    style?: React.CSSProperties
}
export const ProductTitle = ({ className, title, style }: ProductTitleProps) => {
    const { product } = useContext(ProductContext)
    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>
            {title ? title : product.title}
        </span>
    )
}
