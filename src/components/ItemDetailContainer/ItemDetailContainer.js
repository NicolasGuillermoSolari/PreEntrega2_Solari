import { getProductsById } from "../Navbar/asynMock";
import ItemDetail from "../ItemDetail/ItemDetail";

constItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffedt(() => {
    getProductsById("1")
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
