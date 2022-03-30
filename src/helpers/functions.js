import { BsTrash } from "react-icons/bs";
import styles from './functions.module.css'

export function shorter (data){

const shorttitle=data.split(" ");

return shorttitle[0] + " " + shorttitle[1];
}
export function Isincart (state,productdata,dispatch){
    let element
    const result =state.selectedItems.find(item=> item.id===productdata.id)
    if (!!result){
        if (result.quantity ===1){
            // return "firstitem"
            element =  <div className={styles.buttoncontainer}>
            <button onClick={()=>{dispatch({type:"INCREASE", payload:productdata})}} name="afteradd"><span>+</span></button>
            <p>1</p>
            <button onClick={()=>{dispatch({type:"DELETE", payload:productdata})}} name="afteradd"><span><BsTrash /></span></button>
            </div>
            return element;
            
        }else{
            // return "moreitems"
        const quantity=state.selectedItems.find(item=> item.id===productdata.id).quantity
         element =  <div className={styles.buttoncontainer}>
        <button onClick={()=>{dispatch({type:"INCREASE", payload:productdata})}} name="afteradd"><span>+</span></button>
        <p>{quantity}</p>
        <button onClick={()=>{dispatch({type:"DECREASE", payload:productdata})}} name="afteradd"><span>-</span></button>
        </div>
        return element;

        }
        
    }else{
        // return "add"
        element =<button className={styles.addbutton} onClick={()=>{dispatch({type:"ADD-ITEM", payload:productdata })}}><span>Add To Shop</span></button>
        return element;
    }
   }


   
