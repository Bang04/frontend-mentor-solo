import { DessertList } from "./components/DessertList";
import { Cart } from "./components/Cart";
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="p-6" style={{ backgroundColor: "rgb(252,248,246)" }}>
      <div className="container columns is-flex-widescreen is-flex-direction-row">
        <DessertList />
          <Cart />
      </div>

    </div>
  );
}

export default App;
