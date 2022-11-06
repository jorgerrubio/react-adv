import { useState } from "react"
import { OnchangeArgs } from "../components/ProductCard"
import { Product } from "../interfaces/product.interface"

type ProductInCard = Product & {
    count: number
}

export const useShoppingCard = () => {
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

    return { 
        shoppingCard,
        onProductCountChange
    }
}