import { useEffect } from "react"
import { removeItem } from "../../redux/basketSlice/basketSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import style from './basket.module.css'

const Basket = () => {
    const dispatch = useAppDispatch()
    const {items, allPrice} = useAppSelector((state) => state.BasketSlice)

    const remove = (item: any) => {
        dispatch(removeItem(item))
    }

    return (
        <div className={style.basket}>
            <div className={style.price}>Total price ${allPrice}</div>
            {items.map((item) => (
                <div className={style.item} key={item.id}>
                <div>
                    <div>
                        <img className={style.img} src={item.image} alt="" />
                    </div>
                </div>
                <div>
                    <div>{item.title}</div> 
                    <div>
                        <div className={style.aa}>Price: ${item.price}</div> 
                        <div>Category: {item.category}</div> 
                    </div>   
                </div>
                <div className={style.right}>
                    <button className={style.btn}>+</button>
                    <p>{item.count}</p>
                    <button className={style.btn} onClick={() => remove(item)}>-</button>
                </div>
            </div>
            ))}
        </div>
    )
}


export default Basket