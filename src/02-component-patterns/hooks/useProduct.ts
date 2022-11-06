import { useEffect, useState } from 'react'
import { OnchangeArgs } from '../components/ProductCard'
import { Product } from '../interfaces/product.interface'

type UseProductArgs = {
    onChange?: (args: OnchangeArgs) => void
    product: Product
    value?: number
}
export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {
    const [counter, setCounter] = useState(value)

    const increaseBy = (value: number) => {
        const count = Math.max(counter + value, 0)
        setCounter(count)
        onChange && onChange({ count, product })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    return { counter, increaseBy }
}
