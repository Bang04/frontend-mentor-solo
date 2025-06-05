import { DessertList }  from "./components/DessertList";
import { Cart } from "./components/Cart";

import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="container">
        <div className="is-flex">
          <DessertList/>
          <Cart />
        </div>
    </div>
  );
}

export default App;
