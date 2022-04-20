import React, {useContext} from 'react';
import { Isincart } from '../helpers/functions';
import { Selectcontext } from '../context/Selectedcontext';
import { Cartcontext } from '../context/Productscontext';
import { Link } from 'react-router-dom';
import styles from './shoplist.module.css';

const Shoplist = (props) => {
const Data=props.Data;
    const {title, price, image}=props.Data;
    const {state,dispatch}=useContext(Selectcontext);
    const element =Isincart(state,Data,dispatch);
    console.log(state.total);
   
    return (
       <div className={styles.shoplistcontainer}>
        <div className={styles.chooscontainer}>
            <img src={image} /> 
            <h1 >{title}</h1>
            <h1>{price}</h1>
            <div className={styles.elementcintainer}>
            {element}
            </div>
        </div>  

        </div>
    );
};

export default Shoplist;