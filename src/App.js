import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Cartdetails from './components/Cartdetails';
import Store from './components/Store';
import Productscontext from './context/Productscontext';


function App() {
  return (
   <Productscontext>
     {/* <Routes>
       <Route path="/cart" element={<Cart />} /> 
       <Route path="/cartdetails/:id" element={<Cartdetails />} />
      
     </Routes> */}
     <Store />
   </Productscontext>
     
      
     
    
  );
}

export default App;
