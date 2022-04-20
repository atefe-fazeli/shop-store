import React,{useContext} from 'react';
import { Selectcontext } from '../context/Selectedcontext';
import { Link } from 'react-router-dom';
import styles from './Checkout.module.css'


const Checkout = () => {

    const {state,dispatch}=useContext(Selectcontext);

    return (
        <div className={styles.checkoutcontainer}>
         <h1>{state.total}</h1>
         <button onClick={()=>{dispatch({type:"CHECKOUT", payload:state.selectedItems})}}>Checkout</button>
         <button  onClick={()=>{dispatch({type:"CLEAR", payload:state.selectedItems})}}>Clear</button>
         <div ><Link to="/" className={styles.shoplinkcontainer}>Back To Shop </Link></div>
            
        </div>
    );
};

export default Checkout;