// import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Account/Register";
import { UserProvider } from "../components/context/userContext";
import Home from "../pages/Home";
import Account from "../pages/Account";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contacts from "../pages/Contacts";
import Products from "../pages/Products";
import Gallery from "../pages/Gallery";

function App() {

    return (
        <>
            <UserProvider>
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
            </UserProvider>
        </>
    )
  
}

export default App;