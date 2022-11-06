import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { products } from '../data/products'
import { useShoppingCard } from '../hooks/useShoppingCard'

export const ShoppingPage = () => {
    const { shoppingCard, onProductCountChange } = useShoppingCard()

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
