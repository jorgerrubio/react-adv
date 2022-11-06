import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { Product } from '../interfaces/product.interface'
import { useState } from 'react'
import { OnchangeArgs } from '../components/ProductCard'

const product1 = {
    id: 1,
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: 2,
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2]

type ProductInCard = Product & {
    count: number
}

export const ShoppingPage = () => {
    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCard }>({})

    const onProductCountChange = ({ count, product }: OnchangeArgs) => {
        setShoppingCard((oldShoppingCard) => {
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCard
                return rest
            }
            return {
                ...oldShoppingCard,
                [product.id]: { ...product, count }
            }
        })
    }

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        className="bg-dark text-white"
                        product={product}
                        onChange={onProductCountChange}
                        value={shoppingCard[product.id]?.count || 0}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="custom-text" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>

            <div className="shopping-card">
                {Object.entries(shoppingCard).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        className="bg-dark text-white"
                        product={product}
                        style={{ position: 'relative', width: '6.25rem' }}
                        onChange={onProductCountChange}
                        value={product.count}
                    >
                        <ProductImage className="custom-image" />
                        <ProductButtons className="custom-buttons buttons" />
                    </ProductCard>
                ))}
            </div>
        </div>
    )
}
