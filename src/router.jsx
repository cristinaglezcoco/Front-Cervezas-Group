import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Account from "./pages/Account";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Product from "./pages/Products";
import Checkout from "./pages/Checkout";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import Register from "./pages/Account/Register";


const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/account" element={<Account />} />
    <Route path="/about" element={<About />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/shop" element={<Products />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/register" element={<Register/>} />
  </Routes>
);

export default Router;
