import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const userId = localStorage.getItem("user_id");

  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = userId ? JSON.parse(localStorage.getItem(`cart_${userId}`)) || [] : [];
    setCart(storedCart);
    // console.log(storedCart);
  }, [userId]);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(`cart_${userId}`);
  };

  const isEmpty = () => {
    return cart.length === 0;
  };

  const findItemInCart = (id) => {
    return cart.find((item) => item._id === id);
  };

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart]; // Copiamos el carrito actual
    const existingItem = findItemInCart(product._id);
    if (existingItem) {
      // Si el producto ya está en el carrito, actualizamos la cantidad
      existingItem.quantity += quantity;
    } else {
      // Si el producto no está en el carrito, lo añadimos
      updatedCart.push({ ...product, quantity });
    }
    // Actualizamos el estado del carrito y el almacenamiento local
    setCart(updatedCart);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };
  
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id); // Filtramos el producto a eliminar
    // Actualizamos el estado del carrito y el almacenamiento local
    setCart(updatedCart);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };
  


  const increaseQuantity = (id) => {
    const updatedCartIncremented = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCartIncremented));
    setCart(updatedCartIncremented);
  };


  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    );
    // Actualizamos el estado del carrito y el almacenamiento local
    setCart(updatedCart);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };
  
  useEffect(() => {
    const countTotalItems = () => {
      return cart.reduce((acc, item) => acc + item.quantity, 0);
    };
    setTotalItems(countTotalItems());

    const countSubtotal = () => {
      return cart.reduce(
        (acc, item) => acc + item.precio * item.quantity,
        0
      );
    };
    setSubtotal(countSubtotal());
  }, [cart]);

  useEffect(() => {
    const countTaxes = () => {
      return subtotal * 0.1;
    };
    setTaxes(countTaxes());
  }, [subtotal]);

  useEffect(() => {
    const countTotal = () => {
      return subtotal + taxes;
    };
    setTotal(countTotal());
  }, [subtotal, taxes]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        isEmpty,
        subtotal,
        taxes,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
