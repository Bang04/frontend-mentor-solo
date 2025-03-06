import React from 'react';
import { DessertList }  from "./components/DessertList";
import { Cart } from "./components/Cart";

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
