import React, { useContext } from 'react';
import { Cartcontext } from '../context/Productscontext';
import Cart from './Cart';

const Store = () => {
    const Data =useContext(Cartcontext)
    return (
       
            <div style={{display:"flex" , flexDirection:"row" , flexWrap:"wrap"}}>
           {Data.map((item)=>  <Cart key={item.id}   productdata={item}/>)}
           </div>
            
      
    );
};

export default Store;