import React, { useReducer } from 'react';
initialstate={
    selectedItems:[],
    Itemcounter:0,
    total:0,
    checkout:false
}


const Selected = () => {
    const [state ,dispatch] =useReducer(productReducer ,initialstate)
    return (
        <div>
            
        </div>
    );
};

export default Selected;