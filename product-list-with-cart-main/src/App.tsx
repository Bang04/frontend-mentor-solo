
import { DessertList }  from "./components/DessertList";
import { Cart } from "./components/Cart";
import './App.css';

function App() {
  return (
    <div className="container">
        <div className='columns'>
          <DessertList/>
          <Cart />
        </div>
    </div>
   
  );
}

export default App;
