import axios from 'axios';
import { shorter } from '../helpers/functions';
const URL ="https://fakestoreapi.com/products"
 export const Getapi = async() => {
    const products = await axios.get(URL);
    products.data.map(product=> {product.title=shorter(product.title)})
    console.log(products)
    return products.data; 
};
