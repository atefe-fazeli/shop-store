import React, { useContext } from 'react';
import Shoplist from './Shoplist';
import { Selectcontext } from '../context/Selectedcontext';
import { Link } from 'react-router-dom';
import styles from './Shop.module.css'


const Shop = () => {
    const {state,dispatch}=useContext(Selectcontext);
    
  
    return (
      <div>
        <div>
          {state.selectedItems.map(data=> <Shoplist key={data.id} Data={data}  />)}
        </div>
         <div ><Link to="/" className={styles.shoplinkcontainer}>Back To Shop </Link></div>
      </div>
    );
};

export default Shop;