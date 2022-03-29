import { Route,Switch ,Redirect } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Cartdetails from './components/Cartdetails';
import Store from './components/Store';
import Productscontext from './context/Productscontext';


function App() {
  return (
   <Productscontext>
     <Switch>
       <Route path="/products/:id" component={Cartdetails} />
       <Route path="/products" component={Store} />
       <Redirect to="/products" />
     </Switch>
     
     <Store />
   </Productscontext>
     
      
     
    
  );
}

export default App;
