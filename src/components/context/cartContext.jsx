import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado para almacenar los elementos del carrito
  const [totalItems, setTotalItems] = useState(0); // Estado para almacenar el total de elementos en el carrito
  const [subtotal, setSubtotal] = useState(0); // Estado para almacenar el subtotal del carrito
  const [taxes, setTaxes] = useState(0); // Estado para almacenar los impuestos del carrito
  const [total, setTotal] = useState(0); // Estado para almacenar el total del carrito

  const clearCart = () => {
    setCart([]);
  };
  // Verifica si el carrito está vacío
  const isEmpty = () => {
    if (cart.length === 0) {
      return true;
    }
    return false;
  };

  // Busca un elemento en el carrito por su id
  const findItemInCart = (id) => {
    return cart.find((item) => item._id === id);
  };

  // Agrega un producto al carrito
  const addToCart = (product, quantity) => {
    if (findItemInCart(product._id)) {
      increaseQuantity(product._id);
      return;
    }
    const newProduct = { ...product, quantity };
    setCart((prevCart) => [...prevCart, newProduct]);
  };

  // Remueve un producto del carrito por su id
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // Incrementa la cantidad de un producto en el carrito por su id
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrementa la cantidad de un producto en el carrito por su id
  const decreaseQuantity = (id) => {
    if (findItemInCart(id).quantity === 1) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Actualiza el total de elementos en el carrito cuando cambia el carrito
  useEffect(() => {
    const countTotalItems = () => {
      return cart.reduce((acc, item) => acc + item.quantity, 0);
    };
    setTotalItems(countTotalItems());

    // Actualiza el subtotal cada vez que cambia el carrito
    const countSubtotal = () => {
      return cart.reduce(
        (acc, item) => acc + (item?.price ?? 0) * item.quantity,
        0
      );
    };
    setSubtotal(countSubtotal());
  }, [cart]);

  useEffect(() => {
    //para calcular los impuestos cuando cambie el subtotal.
    const countTaxes = () => {
      return subtotal * 0.1;
    };
    setTaxes(countTaxes());
  }, [subtotal]);

  useEffect(() => {
    //para calcular el total cuando cambie el subtotal o los impuestos.
    const countTotal = () => {
      return subtotal + taxes;
    };

    setTotal(countTotal()); //actualiza el total
  }, [subtotal, taxes]);

  //retorna el provider con los valores y funciones necesarios
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
