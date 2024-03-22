import { FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import Container from "./Container";



function NavBarHeader({ title }) {
  
  const [active, setActive] = useState(false);
  const handleNav = (active) => setActive(active);

  return (
    <>
      <Container>
        <div className="nb-header">
          <NavBarMobile active={active} handleNav={handleNav} />
          <div className="nb-logo">
            <Link to={"/"}>
              <img src="/images/logo-cervezas-negro.png" alt="" />
            </Link>
          </div>
          <div className="nb-menu">
            <ul>
              <li>
                <Link className="active" to="/">
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span>Quienes Somos </span>
                </Link>
              </li>
              <li>
                <Link to="/shop">
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
          <div className="nb-icons">
            <ul>
              <li>
                <Link to="/account">
                  <FaUser />
                </Link>
              </li>
              <li>
                <div className="cart-navbar">
                  <Link to="/cart">
                    <span className="cart-contents header-cart-count count">
                      0
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
        </div>
      </Container>
      <div className="h-content">
        <Container>
          <div className="h-content-div">
            <span>{title}</span>
            <p className="h-content-text">
              <Link to="/">Home</Link> / {title}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NavBarHeader;

export function NavBarMobile({ active, handleNav }) {
  return (
    <div className={"mb-nav " + (active ? "active" : "")}>
      <div className="mb-nav-top">
        <Link to={"/"}>
          <img src="/images/logo-colmo-cervezas.png" alt="" />
        </Link>
        <div className="mb-nav-close" onClick={() => handleNav(false)}>
          <FaTimes />
        </div>
      </div>
      <ul className="mb-nav-links">
        <li>
          <Link to="/">
            <span>Inicio</span> <FaAngleRight />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span>Quienes Somos</span>
            <FaAngleRight />
          </Link>
        </li>
        <li>
          <Link to="/shop">
            <span>Productos</span>
            <FaAngleRight />
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <span>Galeria</span>
            <FaAngleRight />
          </Link>
        </li>
        <li>
          <Link to="/contacts">
            <span>Contacto</span>
            <FaAngleRight />
          </Link>
        </li>
      </ul>
      <div className="mb-nav-foot">
        <ul>
          <li>
            <span>0</span>
            <FaShoppingBag />
          </li>
        </ul>
        <Link to={"/account"}>
          <FaUser />
        </Link>
      </div>
    </div>
  );
}
