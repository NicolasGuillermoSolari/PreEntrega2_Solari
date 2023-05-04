import { GetProductById } from "../NavBar/asynMock";
import ItemDetail from "./ItemDetail/itemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    GetProductById("1")
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
