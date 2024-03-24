import Footer from "../../components/shared/Footer";
import NavBarHeader from "../../components/shared/NavBarHeader";
import { useContext, useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Container from "../../components/shared/Container";
import "./_productInfo.scss";
import { BeersContext } from "../../components/context/beersContext";
import { useParams } from "react-router-dom";
import { CartContext } from "../../components/context/cartContext";

export default function ProductInfo() {
  const { finBeerById } = useContext(BeersContext);
  const { id } = useParams();
  const beer = finBeerById(id);
  if (!beer) return;
  return (
    <>
      <NavBarHeader title={beer ? beer.nombre : "Producto No Existe"} />
      <Container>
        <div className="products-space"></div>
        <div className="hs-carousel-1">
          <div className="hs-car-icons">
            <img src="/images/icon-detalle_6.png" alt="" />
            <img src="/images/icon-detalle_5.png" alt="" />
          </div>
          <h1>Descubre Nuestra Cervezas</h1>
          <p>
            Explora un mundo de sabor con nuestras cervezas artesanales únicas.
            Descubre la pasión y la calidad en cada sorbo, disponible ahora para
            tu disfrute.
          </p>
        </div>
        <Product product={beer} />
      </Container>
      <Footer />
    </>
  );
}

export const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  if (!product) return null;
  const ingredientes = product.ingredientes[0];
  const envase = product.envase.reduce(
    (acc, item, i) => acc + item + (product.envase.length - 1 == i ? "" : ","),
    ""
  );
  const cereales = ingredientes.cereales.reduce(
    (acc, item, i) =>
      acc + item + (ingredientes.cereales.length - 1 == i ? "" : ", "),
    ""
  );

  const levadura = ingredientes.levadura;

  const lupulo = ingredientes.lupulo.reduce(
    (acc, item, i) =>
      acc + item + (ingredientes.lupulo.length - 1 == i ? "" : ", "),
    ""
  );
  const otros = ingredientes.otros.reduce(
    (acc, item, i) =>
      acc + item + (ingredientes.otros.length - 1 == i ? "" : ", "),
    ""
  );
  const description =
    product.graduacion + " | " + product.fermentacion + " | " + product.color;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };
  return (
    <div className="product-info">
      <div className="product-info-1">
        <img src={product.picture} alt="" />
      </div>
      <div className="product-info-2">
        <div className="product-info-2-border">
          <h1>{product.nombre}</h1>
          <p className="product-info-2-desc">{description}</p>
        </div>

        <ul>
          {/* ingredientes  */}
          <li>
            <span>Envase: </span> <span>{envase}</span>
          </li>
          <li>
            <span>Cerales: </span> <span>{cereales}</span>
          </li>
          <li>
            <span>Levadura: </span> <span>{levadura}</span>
          </li>
          <li>
            <span>Lúpulo: </span> <span>{lupulo}</span>
          </li>
          <li>
            <span>Otros: </span> <span>{otros}</span>
          </li>
        </ul>
        <p className="product-info-2-price">€ {product.precio.toFixed(2)}</p>
        <div className="product-infor-2-cart">
          <div className="product-info-2-cart_count">
            <span>{quantity}</span>
            <div>
              <button onClick={handleIncrement}>
                <GoChevronUp />
              </button>
              <button onClick={handleDecrement}>
                <GoChevronDown />
              </button>
            </div>
          </div>
          <button onClick={handleAddToCart}>Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
};
