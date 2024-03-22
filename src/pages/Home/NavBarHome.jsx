import { FiAlignRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavBarMobile } from "../../components/shared/NavBarHeader";
import { useState } from "react";

export default function NavBarHome() {
  const [active, setActive] = useState(false);
  const handleNav = (active) => setActive(active);

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
                <span className="cart-contents header-cart-count count">0</span>
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
            <Link to="/">
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>Quienes Somos</span>
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <span>Productos </span>
            </Link>
          </li>
          <li>
            <Link to={"/products-gallery"}>
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
