import axios from 'axios';
const URL ="https://fakestoreapi.com/products"
 export const Getapi = async() => {
    const product = await axios.get(URL);
    console.log(product)
    return product.data; 
};
