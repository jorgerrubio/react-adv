import { useContext } from 'react'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { ProductContext } from './ProductCard'

export type ProductImageProps = {
    className?: string
    img?: string
    style?: React.CSSProperties
}
export const ProductImage = ({ className, img, style }: ProductImageProps) => {
    const { product } = useContext(ProductContext)
    const imgToShow = img ? img : product.img ? product.img : noImage

    return (
        <img
            className={`${styles.productImg} ${className}`}
            src={imgToShow}
            alt="Product"
            style={style}
        />
    )
}
