import { useEffect } from "react"
import { addItem, removeItem } from "../../redux/basketSlice/basketSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import BasketItem from "./basket-item/basket-item"
import style from './basket.module.css'

const Basket = () => {
    const dispatch = useAppDispatch()
    const {items, allPrice} = useAppSelector((state) => state.BasketSlice)

    const remove = (item: any) => {
        dispatch(removeItem(item))
    }
    const add = (item: any) => {
        dispatch(addItem(item))
    }

    return (
        <div className={style.basket}>
            {allPrice ? 
                <div className={style.price}>Total price ${allPrice.toFixed(2)}</div>
            :
                <div className={style.price}>Add product in basket</div>    
            }
            {items.map((item) => (
                <BasketItem item={item} add={add} remove={remove} />
            ))}
        </div>
    )
}


export default Basket