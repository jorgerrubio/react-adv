import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Product {
    id: number
    title: string
    img?: string
}

type ProductCardProps = {
    product: Product
}
export const ProductCard = ({ product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct()

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src={product.img ? product.img : noImage} alt={ product.title } />

            <span className={styles.productDescription}>{ product.title }</span>
            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                    -
                </button>

                <div className={styles.countLabel}>{counter}</div>

                <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
                    +
                </button>
            </div>
        </div>
    )
}
