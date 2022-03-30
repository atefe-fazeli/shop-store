import React, { useReducer } from 'react';
initialstate={
    selectedItems:[],
    Itemcounter:0,
    total:0,
    checkout:false
}
const productReducer=(state,action)=>{
    switch (action.type) {
        case "ADD-ITEM":
        state.selectedItems.push({...action.payload ,quantity:1})
        return  ({...state ,...selectedItems})

        case "INCREASE":
        state.selectedItems.map((item)=> {
            if(item.id===action.payload.id){
            item.quantity++}})
            return({...state ,...selectedItems})
        case "DECREASE":
            state.selectedItems.map((item)=> {
                if(item.id===action.payload.id){
                item.quantity--}})
                return({...state ,...selectedItems})
        
        
    }

}

const Selected = () => {
    const [state ,dispatch] =useReducer(productReducer ,initialstate)
    return (
        <div>
            
        </div>
    );
};

export default Selected;