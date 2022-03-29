import React, { createContext, useEffect, useReducer, useState } from 'react';
import { Getapi } from '../services/Getapi';
const initialstate ={
    selectedItems:[],
    total:0
}
const reducer=(state,action)=>{
    switch

}

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
    const [data, dispatch]=useReducer(reducer ,initialstate);
    return (
       
           <Cartcontext.Provider value={Data} >
               {children}
           
           </Cartcontext.Provider>
    
    );
};

export default Productscontext;