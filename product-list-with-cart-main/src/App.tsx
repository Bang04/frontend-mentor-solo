import { DessertList } from "./pages/DessertList";
import { Cart } from "./pages/Cart";

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
