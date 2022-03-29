import './App.css';
import Store from './components/Store';
import Productscontext from './context/Productscontext';


function App() {
  return (
   <Productscontext>
      <Store />
   </Productscontext>
     
      
     
    
  );
}

export default App;
