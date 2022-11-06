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

export type OnchangeArgs = {
    count: number
    product: Product
}

export type ProductCardProps = {
    children?: React.ReactElement | React.ReactElement[]
    className?: string
    onChange?: (args: OnchangeArgs) => void
    product: Product
    style?: React.CSSProperties
    value?: number
}
export const ProductCard = (props: ProductCardProps) => {
    const { children, className, onChange, product, style, value } = props
    const { counter, increaseBy } = useProduct({ onChange, product, value })

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}
