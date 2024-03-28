import { FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { CartContext } from "../context/cartContext";
import { IoLogOut } from "react-icons/io5";

function NavBarHeader({ title }) {

  const [active, setActive] = useState(false);
  const { totalItems } = useContext(CartContext);
  const [isLogged ,setIsLogged] = useState(false);
  const handleNav = (active) => setActive(active);

  const path = window.location.pathname;
  const createActiveClassName = (givenPath) =>
    path === givenPath ? "active" : "";
    
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    useEffect (() => scrollToTop(), [path]);
    
    const cartContext = useContext(CartContext);

  const handleLogout = () => {
    

    const userId = localStorage.getItem("user_id");

    if (userId) {
      const cartItems = cartContext.cart;
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));

    }
  
  

    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

      
      useEffect(() => {
        if(localStorage.getItem("token")){
          setIsLogged(true);
        }

      },[]
      );

      useEffect (() => scrollToTop(), []);
  

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
                <Link className={createActiveClassName("/")} to="/">
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link className={createActiveClassName("/about")} to="/about">
                  <span>Quienes Somos </span>
                </Link>
              </li>
              <li>
                <Link
                  className={createActiveClassName("/products")}
                  to="/products"
                >
                  <span>Productos </span>
                </Link>
              </li>
              <li>
                <Link
                  className={createActiveClassName("/gallery")}
                  to={"/gallery"}
                >
                  <span>Galeria</span>
                </Link>
              </li>
              <li>
                <Link
                  className={createActiveClassName("/contacts")}
                  to="/contacts"
                >
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
              {
              isLogged ?
              <li className="logout-icons" onClick={handleLogout}>
                  <IoLogOut />
              </li>
              :
              null }
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
        </div>
      </Container>
      <div className="h-content">
        <Container>
          <div className="h-content-div">
            <span>{title}</span>
            <p className="h-content-text">
              {title === "Carrito" || title === "Colmo Teita - Rye Lager" || title === "Colmo Ancares DH Rye IPA" || title === "Colmo Mallega - Hazy Session Rye IPA" ? (
                <Link to="/products">Productos</Link>
              ) : (
                <Link to="/">Home</Link>
              )}
              / {title}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NavBarHeader;

export function NavBarMobile({ active, handleNav }) {
  const { totalItems } = useContext(CartContext);
  const [isLogged ,setIsLogged] = useState(false);

  const cartContext = useContext(CartContext);

  const handleLogout = () => {
    

    const userId = localStorage.getItem("user_id");

    if (userId) {
      const cartItems = cartContext.cart;
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));

    }
  
  

    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

      
      useEffect(() => {
        if(localStorage.getItem("token")){
          setIsLogged(true);
        }

      },[]
      );

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
          <Link to="/products">
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
          <Link to={"/cart"}>
            <span>{totalItems}</span>
            <FaShoppingBag />
          </Link>
        </ul>
        <Link to={"/account"}>
          <FaUser />
        </Link>
        {
        isLogged ?
        <Link className="logout-icons" to="/" onClick={handleLogout}>
            <IoLogOut />
        </Link>
        :
        null }
      </div>
    </div>
  );
}
