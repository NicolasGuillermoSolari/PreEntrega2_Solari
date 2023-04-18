import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos al mundo de la numismática"} />
    </div>
  );
}

export default App;
