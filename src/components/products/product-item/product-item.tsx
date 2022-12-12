import { IItem } from '../product'
import style from '../product.module.css'


const ProductItem = ({ItemProduct, addInBasket}: any) => {
    return(
        <div className={style.item} key={ItemProduct.id}>
                    <div className="product__top">
                        <div className="product__img">
                            <img className={style.img} src={ItemProduct.image} alt="" />
                        </div>
                    </div>
                    <div className="basket__bottom">
                        <div>{ItemProduct.title}</div> 
                        <div className={style.bottom}>
                            <div>Price: ${ItemProduct.price}</div> 
                            <div>Category: {ItemProduct.category}</div> 
                            <div onClick={() => addInBasket(ItemProduct)}>
                                <img className={style.product__img} 
                                src="https://cdn-icons-png.flaticon.com/512/57/57891.png" alt="" />
                            </div>
                        </div>   
                    </div>
                </div>
    )
}

export default ProductItem