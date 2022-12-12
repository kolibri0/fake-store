import React from 'react';
import { Link } from 'react-router-dom';
import style from './App.module.css'
import Products from './components/products/product';

function App() {
  return (
    <div className={style.App}>
      <Link to={'/basket'}>
      <img className={style.img} src="https://i.pinimg.com/originals/aa/a6/26/aaa6266907cac568af35c0e068c8288a.png" alt="" />
      </Link>
      <Link className={style.fake} to={'/'}>Store</Link>
    </div>
  );
}

export default App;
