import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Selectcontext } from '../context/Selectedcontext';
import { Isincart } from '../helpers/functions'
import styles from './Cart.module.css'


const Cart = ({productdata}) => {
    const {state, dispatch}=useContext(Selectcontext)
    const {image, title, price} = productdata
    console.log(state);
    const element =Isincart(state, productdata,dispatch)
    
  
    return (
        <div className={styles.divcontainer} >
            <div className={styles.secondcontainer}>
                <div className={styles.imagecontainer}>
                 <img  src={image} alt="image" />
                </div>
            <h1>{title}</h1>
            <p>{price}$</p>
            <Link to={`/products/${productdata.id}`} className={styles.link}>details</Link>
            </div>
            <div className={styles.thiredcontainer}>
            {element}
             </div>

        </div>
    );
};

export default Cart;