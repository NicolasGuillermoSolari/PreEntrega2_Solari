import ItemCount from "../itemCount/itemCount";

const itemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">categoria: {category}</p>
        <p className="Info">Descripción: {description}</p>
        <p className="Info">precio: {price}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount initial={1} stock={stock} onAdd = (quantify) => console.log("cantidad agregada")/>
      </footer>
    </article>
  );
};
