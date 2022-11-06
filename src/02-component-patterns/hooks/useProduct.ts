import { useEffect, useRef, useState } from 'react'
import { OnchangeArgs } from '../components/ProductCard'
import { Product } from '../interfaces/product.interface'

type UseProductArgs = {
    onChange?: (args: OnchangeArgs) => void
    product: Product
    value?: number
}
export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {
    const [counter, setCounter] = useState(value)
    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            return onChange!({ product, count: value })
        }
        const count = Math.max(counter + value, 0)
        setCounter(count)
        onChange && onChange({ count, product })
    }

    useEffect(() => {
        setCounter(value)
    }, [setCounter, value])

    return { counter, increaseBy }
}
