import React from 'react';
import { Link } from 'react-router-dom';
import style from './App.module.css'
import Products from './components/products/product';
import { useAppSelector } from './redux/hooks';

function App() {
  const countInBasket = useAppSelector(state => state.BasketSlice.items).reduce((prev, item) => prev + item.count, 0)

  return (
    <div className={style.App}>
      <Link to={'/basket'}>
      <div>
        <img className={style.img} src="https://i.pinimg.com/originals/aa/a6/26/aaa6266907cac568af35c0e068c8288a.png" alt="" />
       {countInBasket? <div className={style.count}>{countInBasket}</div>: null}
      </div>
      </Link>
      <Link className={style.fake} to={'/'}>Store</Link>
    </div>
  );
}

export default App;
