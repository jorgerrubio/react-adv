import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { Product } from '../interfaces/product.interface'

type ProductContextProps = {
    counter: number
    increaseBy: (value: number) => void
    product: Product
}
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export type ProductCardProps = {
    children?: React.ReactElement | React.ReactElement[]
    className?: string
    product: Product
    style?: React.CSSProperties
}
export const ProductCard = ({ children, className, product, style }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}
