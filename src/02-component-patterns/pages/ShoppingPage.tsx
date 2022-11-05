import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

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
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}
            >
                <ProductCard className="bg-dark text-white" product={product}>
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="custom-text" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard className="bg-dark text-white" product={product}>
                    <ProductImage className="custom-image" />
                    <ProductTitle className="custom-text" title={'product title'} />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: 'rgb(56, 56, 56)',
                        boxShadow: '1px 1px 2.5px #eaeaea'
                    }}
                >
                    <ProductImage
                        style={{ margin: '0.625rem auto', display: 'block', width: '90%' }}
                    />
                    <ProductTitle title={'product title'} style={{ color: 'white' }} />
                    <ProductButtons className="custom-buttons" style={{ justifyContent: 'end' }} />
                </ProductCard>
            </div>
        </div>
    )
}
