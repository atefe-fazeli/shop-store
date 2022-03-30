import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import {FiShoppingCart } from "react-icons/fi";
import { Selectcontext } from '../context/Selectedcontext';

const Navbar = () => {
    const {state,dispatch}=useContext(Selectcontext);
   
    return (
        <div className={styles.container}>
           <div className={styles.countcontainer}><p>{state.Itemcounter}</p></div> 
           <div className={styles.navlinkcontainer}><Link to="/products/shop" className={styles.navbarlink}><FiShoppingCart  className={styles.icon}/></Link></div> 
        </div>
    );
};

export default Navbar;