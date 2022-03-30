import { Route,Switch ,Redirect } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Cartdetails from './components/Cartdetails';
import Store from './components/Store';
import Productscontext from './context/Productscontext';
import Selectedcontext from './context/Selectedcontext';
import Shop from './components/Shop'
import Navbar from './components/Navbar';


function App() {
  return (
   <Productscontext>
     <Selectedcontext>
       <div>
      < Navbar/>
       </div>
     <Switch>
     <Route path="/products/shop" component={Shop} />
       <Route path="/products/:id" component={Cartdetails} />
      
       <Route path="/" component={Store} />
       <Redirect to="/" />
     </Switch>
     
     </Selectedcontext>
   </Productscontext>
     
      
     
    
  );
}

export default App;
