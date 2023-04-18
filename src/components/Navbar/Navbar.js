import CartWidget from "./CartWidget/cartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>E-Commerce de numismática</h3>
      <div>
        <button>Monedas</button>
        <button>Billetes</button>
        <button>Exonumismática</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
