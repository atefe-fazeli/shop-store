import React, { createContext, useReducer } from 'react';
 const initialstate={
    selectedItems:[],
    Itemcounter:0,
    total:0,
    checkout:false,
}
const productReducer=(state,action)=>{
    switch (action.type) {
        case "ADD-ITEM":
           if( !state.selectedItems.find(item => item.id === action.payload.id))
            state.selectedItems.push({...action.payload ,quantity:1})
            const counter =state.Itemcounter+1;
            return  ({...state,Itemcounter:counter ,selectedItems:[...state.selectedItems]} )

         case "DELETE" :
               const newselectedItems = state.selectedItems.filter( item => item.id!==action.payload.id)
                const removed=state.Itemcounter-1;
                return ({...state,Itemcounter:removed,selectedItems:newselectedItems})
    

        case "INCREASE":
        // state.selectedItems.map((item)=> {
        //     if(item.id===action.payload.id){
        //     item.quantity++}})
        //     return({...state,selectedItems:[...state.selectedItems]} )
            const indexI= state.selectedItems.findIndex(item => item.id===action.payload.id);
            state.selectedItems[indexI].quantity++;
            state.Itemcounter++;
            return ({...state ,selectedItems:[...state.selectedItems]}) 

        case "DECREASE":
            // state.selectedItems.map((item)=> {
            //     if(item.id===action.payload.id){
            //         item.quantity--}})
            //         return({...state,selectedItems:[...state.selectedItems]} )
            const indexB= state.selectedItems.findIndex(item => item.id===action.payload.id);
            state.selectedItems[indexB].quantity--;
            state.Itemcounter--;
            return ({...state ,selectedItems:[...state.selectedItems]} ) 
        

        case "CHECKOUT":
         return ({
            selectedItems:[],
            Itemcounter:0,
            total:0,
            checkout:true
        })

        case "CLEAR":
            return ({
               selectedItems:[],
               Itemcounter:0,
               total:0,
               checkout:false
           })
              
        default:
        return   state;
    }

}
export const  Selectcontext = createContext() 

const Selectedcontext = ({children}) => {
    const [state ,dispatch] =useReducer(productReducer ,initialstate)
// console.log(state.selectedItems);

    return (
        <Selectcontext.Provider value={{state:state , dispatch:dispatch}}>
          {children}
        </Selectcontext.Provider>
    );
};

export default Selectedcontext;