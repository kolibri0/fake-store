import axios from "axios"
import React, { useEffect } from "react"
import styles from './Basket.css'

interface IRating{
    count: number
    rate: number
}

interface IItem {
    category: string
    image: string
    id: number
    price: number
    title: string
    rating: IRating
}

const Basket = () => {

    const [items, setItems] = React.useState<IItem[] | []>([])

    
    React.useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?`).then((res) => {
            setItems(res.data)
        })  
    }, [])

    console.log(items)
    return(
        <div className={styles.basket}>
            {items.map((item: IItem) => (
                <div className="basket__item">
                    <div className="basket__top">
                        <div className="basket__img">
                            <img src={item.image} alt="" />
                        </div>
                    </div>
                    <div className="basket__bottom">
                        <div>{item.title}</div> 
                        <div className="bottom">
                            <div>Price: ${item.price}</div> 
                            <div>Category: {item.category}</div> 
                        </div>   
                    </div>
                </div>
            ))}
            
        </div>
    )
} 

export default Basket