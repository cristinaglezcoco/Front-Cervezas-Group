import { FiAlignRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavBarMobile } from "../../components/shared/NavBarHeader";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../components/context/cartContext";

export default function NavBarHome() {
  const [active, setActive] = useState(false);
  const handleNav = (active) => setActive(active);
  const { totalItems } = useContext(CartContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect (() => scrollToTop(), []);


  return (
    <nav className="navbar">
      <NavBarMobile active={active} handleNav={handleNav} />
      <div className="navbar-1">
        <ul className="navbar-social">
          <li>
            <a href="#" target="_self">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              <FaInstagram />
            </a>
          </li>
        </ul>
        <div className="navbar-logo">
          <Link to="/" className="logo">
            <img
              className="home-logo"
              src="/images/logo-colmo-cervezas.png"
              alt="Weisber"
            />
          </Link>
        </div>
        <ul className="navbar-icons">
          <li>
            <Link to="/account">
              <FaUser />
            </Link>
          </li>
          <li>
            <div className="cart-navbar">
              <Link to="/cart">
                <span className="cart-contents header-cart-count count">
                  {totalItems}
                </span>
                <FaShoppingBag />
              </Link>
            </div>
          </li>
        </ul>
        <div className="navbar-control">
          <button
            onClick={() => handleNav(true)}
            type="button"
            className="navbar-toggle"
          >
            <FiAlignRight />
          </button>
        </div>
      </div>
      <div className="navbar-2">
        <ul>
          <li>
            <Link className="active" to="/">
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>Quienes Somos</span>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <span>Productos </span>
            </Link>
          </li>
          <li>
            <Link to={"/gallery"}>
              <span>Galeria</span>
            </Link>
          </li>
          <li>
            <Link to="/contacts">
              <span>Contacto</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
