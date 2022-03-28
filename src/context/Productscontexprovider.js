import React, { useEffect, useState } from 'react';
import { Getapi } from '../services/Getapi';

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
          
           
           {Data.map((item)=>item.id)}
            
        </div>
    );
};

export default Productscontexprovider;