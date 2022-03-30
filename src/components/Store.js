import React, { useContext } from 'react';
import { Cartcontext } from '../context/Productscontext';
import Cart from './Cart';
import styles from './Store.module.css';

const Store = () => {
   
    const Data =useContext(Cartcontext)
    return (
       
            <div className={styles.divcontainer }>
           {Data.map((item)=>  <Cart key={item.id}   productdata={item}/>)}
           
           </div>
            
      
    );
};

export default Store;