import React from 'react';

const Cart = ({productdata}) => {
    const {image , title, description} = productdata
    return (
        <div >
            <img  src={image} alt="image" style={{width:"200px"}}/>
            <h1>{title}</h1>
            <p>{description}</p>

        </div>
    );
};

export default Cart;