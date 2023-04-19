import "./App.css";
import NavBar from "./components/NavBar/Navbar";

import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemCount from "./components/itemCount/itemCount";
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
