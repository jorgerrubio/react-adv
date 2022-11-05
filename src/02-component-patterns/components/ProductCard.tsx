import { ReactElement } from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Product {
    id: number
    title: string
    img?: string
}

type ProductCardProps = {
    children?: ReactElement | ReactElement[]
    product: Product
}

type ProductButtonsProps = {
    counter: number
    increaseBy: (value: number) => void
}
export const ProductButtons = ({ counter, increaseBy }: ProductButtonsProps) => {
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                -
            </button>

            <div className={styles.countLabel}>{counter}</div>

            <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
                +
            </button>
        </div>
    )
}

export const ProductImage = ({ img = '' }) => {
    return <img className={styles.productImg} src={img ? img : noImage} alt="Product" />
}

export const ProductTitle = ({ title }: { title: string }) => {
    return <span className={styles.productDescription}>{title}</span>
}

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct()

    return (
        <div className={styles.productCard}>
            {children}
            {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        </div>
    )
}

ProductCard.Buttons = ProductButtons
ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
