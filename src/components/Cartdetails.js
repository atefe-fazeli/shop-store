import React, { useContext } from 'react';
import { Cartcontext } from '../context/Productscontext';
import { Link } from 'react-router-dom';

const Cartdetails = (props) => {
    const id =props.match.params.id
    const data =useContext(Cartcontext)
    const matchdata =data[id -1]
    return (
        <div>
            <div >
            <img  src={matchdata.image} alt="image" style={{width:"200px"}}/>
            <h1>{matchdata.title}</h1>
            <p>{matchdata.price}</p>
            <div>
                <Link to="/">Back to shop</Link>
                <button>Add To Shop</button>
            </div>

        </div>
            
        </div>
    );
};

export default Cartdetails;