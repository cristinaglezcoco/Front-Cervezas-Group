import NavBarHeader from "../../components/shared/NavBarHeader";
import Footer from "../../components/shared/Footer";
import "./_cart.scss";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Container from "../../components/shared/Container";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../components/context/cartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { isEmpty } = useContext(CartContext);
  return (
    <>
      <NavBarHeader title="Carrito" />

      <Container>
        {isEmpty() ? (
          <EmptyCart />
        ) : (
          <div className="cart-content">
            <CartList />
            <CartSubtotal />
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Cart;

export const CartList = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <div className="cart-list">
      <div className="cart-list-header">
        <span>PRODUCTO</span>
        <span>PRECIO</span>
        <span>CANTIDAD</span>
        <span>TOTAL</span>
      </div>
      {cart.map((item) => {
        return <CartItem key={item._id} item={item} />;
      })}
    </div>
  );
};

export const CartItem = ({ item }) => {
  const { decreaseQuantity, increaseQuantity, removeFromCart } =
    useContext(CartContext);
  const handleDecrease = () => {
    decreaseQuantity(item._id);
  };
  const handleIncrease = () => {
    increaseQuantity(item._id);
  };
  const handleRemove = () => {
    removeFromCart(item._id);
  };
  return (
    <div className="cart-item">
      <div className="cart-item-product">
        <div className="cart-item-remove">
          <button onClick={handleRemove}>
            <FaTimes />
          </button>
        </div>
        <div className="cart-item-image">
          <img src={item.picture} alt="" />
        </div>
        <div className="cart-item-name">
          <span>Producto: </span>
          <span>{item.nombre}</span>
        </div>
      </div>
      <div className="cart-item-price">
        <span>Precio: </span>
        <span>€ {item.precio.toFixed(2)}</span>
      </div>
      <div className="cart-item-quantity">
        <span>Cantidad</span>
        <div className="cart-item-q-box">
          <span>{item.quantity}</span>
          <div>
            <button onClick={handleIncrease}>
              <GoChevronUp />
            </button>
            <button onClick={handleDecrease}>
              <GoChevronDown />
            </button>
          </div>
        </div>
      </div>
      <div className="cart-item-total">
        <span>Total: </span>
        <span>
          € {((item.precio.toFixed(2)) * item.quantity).toFixed(2) ?? "0.00"}
        </span>
      </div>
    </div>
  );
};

export const CartSubtotal = () => {

  const cartContext = useContext(CartContext);
  const { subtotal, taxes, total } = cartContext;

  const handleLogout = () => {

    const userId = localStorage.getItem("user_id");

    if (userId) {
      const cartItems = cartContext.cart;
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));

    }
  
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user");

    setTimeout(() => {
      window.location.href = "/";
    }, 100); 
  };


  return (
    <div className="cart-subtotal">
      <div>
        <span>Subtotal:</span> <span>€ {subtotal.toFixed(2)}</span>
      </div>
      <div>
        <span>Impuestos</span>
        <span>€ {taxes.toFixed(2)}</span>
      </div>
      <div>
        <span>Total</span>
        <span>
          <strong>€ {total.toFixed(2)}</strong>
        </span>
      </div>

      {/* <div>
        <Link className="checkout-btn" to="/checkout">
          <span>Checkout</span>
        </Link>
      </div> */}

      <div>
        <button className="checkout-btn"><Link to="/checkout">Checkout</Link></button>
      </div>

      <div>
        <button type="button" onClick={handleLogout} className="checkout-btn">Log Out</button>
      </div>

    </div>
  );
};

export const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <div className="hs-carousel-1">
        <div className="hs-car-icons">
          <img src="/images/icon-detalle_6.png" alt="" />
          <img src="/images/icon-detalle_5.png" alt="" />
        </div>
        <h1>Tu carrito esta vacío</h1>
        <Link className="empty-cart-btn" to={"/products"}>
          Ir a Productos
        </Link>
      </div>
    </div>
  );
};
