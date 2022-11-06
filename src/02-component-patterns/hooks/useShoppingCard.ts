import { useState } from 'react'
import { OnchangeArgs } from '../components/ProductCard'
import { Product } from '../interfaces/product.interface'

type ProductInCard = Product & {
    count: number
}

export const useShoppingCard = () => {
    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCard }>({})

    const onProductCountChange = ({ count, product }: OnchangeArgs) => {
        setShoppingCard((oldShoppingCard) => {
            const productInCard = oldShoppingCard[product.id] || { ...product, count: 0 }

            if (Math.max(productInCard.count + count, 0) > 0) {
                productInCard.count += count
                return {
                    ...oldShoppingCard,
                    [product.id]: productInCard
                }
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCard
            return rest
        })
    }

    return {
        shoppingCard,
        onProductCountChange
    }
}
