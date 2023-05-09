import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos al mundo de la numismática"} />
      <ItemDetailContainer />

      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quality) => console.log("Cantidad Agregada", quality)}
      />
    </div>
  );
}

export default App;
