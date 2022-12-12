import { useAppSelector } from "../../redux/hooks"
import style from './basket.module.css'

const Basket = () => {
    const basketItems = useAppSelector((state) => state.BasketSlice.items)


    return (
        <div className={style.basket}>
            <div className={style.price}>Total price $120</div>
            {basketItems.map((item) => (
                <div className={style.item} key={item.id}>
                <div className="basket__top">
                    <div className="basket__img">
                        <img className={style.img} src={item.image} alt="" />
                    </div>
                </div>
                <div className="basket__bottom">
                    <div>{item.title}</div> 
                    <div>
                        <div className={style.aa}>Price: ${item.price}</div> 
                        <div>Category: {item.category}</div> 
                    </div>   
                </div>
            </div>
            ))}
        </div>
    )
}


export default Basket