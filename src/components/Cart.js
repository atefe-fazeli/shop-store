import React from 'react';
import { Link } from 'react-router-dom';


const Cart = ({productdata}) => {
    const {image , title, price} = productdata
    return (
        <div style={{width:"400px"}} >
            <img  src={image} alt="image" style={{width:"200px"}}/>
            <h1>{title}</h1>
            <p>{price}</p>
            <div>
                <Link to={`/products/${productdata.id}`}>details</Link>
                <button>Add To Shop</button>
            </div>

        </div>
    );
};

export default Cart;