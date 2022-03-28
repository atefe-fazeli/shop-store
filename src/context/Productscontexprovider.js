import React, { useEffect, useState } from 'react';
import { Getapi } from '../services/Getapi';
import Cart from '../components/Cart'

const Productscontexprovider = () => {
    const [Data ,setData] =useState([]);
    useEffect(
       ()=>{
         const fetchData =async()=>{
          const data= await Getapi();
           setData(data);
            }
            fetchData();    
     }
     
     ,[]
    )
    
    return (
        <div>
          
           
           {Data.map((item)=>  <Cart key={item.id}  productdata={item}/>)}
            
        </div>
    );
};

export default Productscontexprovider;