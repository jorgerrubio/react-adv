import { ProductCard } from '../components/ProductCard'

const product = {
    id: 1,
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'product title'} />
                    <ProductCard.Buttons
                        counter={0}
                        increaseBy={function (value: number): void {
                            throw new Error('Function not implemented.')
                        }}
                    />
                </ProductCard>
            </div>
        </div>
    )
}
