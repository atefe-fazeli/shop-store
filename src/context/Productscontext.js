import React, { createContext, useEffect, useState } from 'react';
import { Getapi } from '../services/Getapi';



 export const Cartcontext =createContext()
const Productscontext = ({children}) => {
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
       
           <Cartcontext.Provider value={Data} >
               {children}
           
           </Cartcontext.Provider>
    
    );
};

export default Productscontext;