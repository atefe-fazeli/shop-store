import React, { useContext } from 'react';
import { Cartcontext } from '../context/Productscontext';
import { Link } from 'react-router-dom';
import styles from  './Cartdetails.module.css';
import { Isincart } from '../helpers/functions';
import { Selectcontext } from '../context/Selectedcontext';

const Cartdetails = (props) => {
    const id =props.match.params.id
    const data =useContext(Cartcontext)
    const matchdata =data[id -1]
    const {state,dispatch}=useContext(Selectcontext);
    const element =Isincart(state,matchdata,dispatch);
    return (
        <div className={styles.parentcontainer}>
            <div className={styles.imagecontainer}>
              <img  src={matchdata.image} alt="image" />
            </div>
            <div className={styles.textcontainer}>
                <h1>{matchdata.title}</h1>
                <p>{matchdata.description}</p>
                <h3>{matchdata.category}</h3>
                <p>{matchdata.price}</p>
            </div>
            <div className={styles.buttoncontainer}>
                {element}
            </div>
            <div className={styles.detaillinkcontainer}>
            <Link className={styles.detaillink} to="/">Back to shop</Link>
            </div>

        </div>
            
        
    );
};

export default Cartdetails;