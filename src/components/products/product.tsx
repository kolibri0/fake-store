import axios from "axios"
import React from "react"
import { addItem } from "../../redux/basketSlice/basketSlice"
import { useAppDispatch } from "../../redux/hooks"
import ProductItem from "./product-item"

import style from './product.module.css'

export interface IRating{
    count: number
    rate: number
}

export interface IItem {
    category: string
    image: string
    id: number
    price: number
    title: string
    rating: IRating
    count: number 
}

const Products = () => {

    const dispatch = useAppDispatch()
    const [items, setItems] = React.useState<IItem[] | []>([])

    const addInBasket = (item: IItem) => {
        dispatch(addItem(item))
    }
    
    React.useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`).then((res) => {
            setItems(res.data)
        })  
    }, [])

    return(
        <div className={style.products}>
            {items && items.map((item: IItem) => (
                <ProductItem ItemProduct={item} addInBasket={addInBasket} />
            ))}
        </div>
    )
} 

export default Products