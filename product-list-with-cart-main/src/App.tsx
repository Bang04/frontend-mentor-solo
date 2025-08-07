import { DessertList } from "./components/DessertList";
import { Cart } from "./components/Cart";

function App() {
  return (
    <div className="container mx-auto" >
      <div className="is-flex-desktop is-flex-wrap">
        <DessertList />
        <Cart />
      </div>
      
    </div>
  );
}

export default App;
