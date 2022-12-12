import axios from "axios"
import React from "react"
import { addItem } from "../../redux/basketSlice/basketSlice"
import { useAppDispatch } from "../../redux/hooks"
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

    const addInBasket = (item: any) => {
        dispatch(addItem(item))
    }
    
    React.useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?`).then((res) => {
            setItems(res.data)
        })  
    }, [])

    console.log(items)
    return(
        <div className={style.products}>
            {items.map((item: IItem) => (
                <div className={style.item} key={item.id}>
                    <div className="basket__top">
                        <div className="basket__img">
                            <img className={style.img} src={item.image} alt="" />
                        </div>
                    </div>
                    <div className="basket__bottom">
                        <div>{item.title}</div> 
                        <div className={style.bottom}>
                            <div>Price: ${item.price}</div> 
                            <div>Category: {item.category}</div> 
                            <div onClick={() => addInBasket(item)}>
                                <img className={style.product__img} 
                                src="https://cdn-icons-png.flaticon.com/512/57/57891.png" alt="" />
                            </div>
                        </div>   
                    </div>
                </div>
            ))}
            
        </div>
    )
} 

export default Products