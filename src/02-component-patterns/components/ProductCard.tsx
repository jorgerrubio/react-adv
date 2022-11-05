import { createContext, ReactElement } from 'react'
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

type ProductCardProps = {
    children?: ReactElement | ReactElement[]
    product: Product
}
export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}
