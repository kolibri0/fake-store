import style from '../basket.module.css'


const BasketItem = ({item, add, remove}: any) => {

    return(
        <div className={style.item} key={item.id}>
                <div>
                    <img className={style.img} src={item.image} alt="" />
                </div>
                <div>
                    <div>{item.title}</div> 
                    <div>
                        <div className={style.aa}>Price: ${item.price}</div> 
                        <div>Category: {item.category}</div> 
                    </div>
                </div>
                   
                <div className={style.right}>
                    <button className={style.btn} onClick={() => add(item)}>+</button>
                    <p>{item.count}</p>
                    <button className={style.btn} onClick={() => remove(item)}>-</button>
                </div>
            </div>
    )

}


export default BasketItem