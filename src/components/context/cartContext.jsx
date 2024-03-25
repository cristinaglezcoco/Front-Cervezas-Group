// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {

//   const cartUser = localStorage.getItem("user_id");
//   // console.log(cartUser);
//   const initialCart = cartUser ? JSON.parse(localStorage.getItem(`cart_${cartUser}`)) || [] : [];

//   const [cart, setCart] = useState(initialCart);
//   const [totalItems, setTotalItems] = useState(0);
//   const [subtotal, setSubtotal] = useState(0);
//   const [taxes, setTaxes] = useState(0);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     if (cartUser) {
//       localStorage.setItem(`cart_${cartUser}`, JSON.stringify(cart));
//     }
//   }, [cartUser, cart]);

//   // console.log("User ID:", cartUser);

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem(`cart_${cartUser}`);
//     console.log("Cart cleared");
//   };

//   const isEmpty = () => {
//     return cart.length === 0;
//   };

//   const findItemInCart = (id) => {
//     return cart.find((item) => item._id === id);
//   };

//   const addToCart = (product, quantity) => {
//     const updatedCart = cartUser ? JSON.parse(localStorage.getItem(`cart_${cartUser}`)) || [] : [];
//     if (findItemInCart(product._id)) {
//       increaseQuantity(product._id);
//       return;
//     }
//     const newProduct = { ...product, quantity };
//     updatedCart.push(newProduct);
//     localStorage.setItem(`cart_${cartUser}`, JSON.stringify(updatedCart));
//     setCart(updatedCart);
//     // console.log(updatedCart);
//     // console.log("Product added to cart:", newProduct);
//   };

//   const removeFromCart = (id) => {
//     const updatedCart = cartUser ? JSON.parse(localStorage.getItem(`cart_${cartUser}`)) || [] : [];
//     const updatedCartFiltered = updatedCart.filter((item) => item._id !== id);
//     localStorage.setItem(`cart_${cartUser}`, JSON.stringify(updatedCartFiltered));
//     setCart(updatedCartFiltered);
//   };

//   const increaseQuantity = (id) => {
//     const updatedCart = cartUser ? JSON.parse(localStorage.getItem(`cart_${cartUser}`)) || [] : [];
//     const updatedCartIncremented = updatedCart.map((item) =>
//       item._id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     localStorage.setItem(`cart_${cartUser}`, JSON.stringify(updatedCartIncremented));
//     setCart(updatedCartIncremented);
//   };

//   const decreaseQuantity = (id) => {
//     const updatedCart = cartUser ? JSON.parse(localStorage.getItem(`cart_${cartUser}`)) || [] : [];
//     const updatedCartDecremented = updatedCart.map((item) =>
//       item._id === id ? { ...item, quantity: item.quantity - 1 } : item
//     );
//     localStorage.setItem(`cart_${cartUser}`, JSON.stringify(updatedCartDecremented));
//     setCart(updatedCartDecremented);
//   };

//   useEffect(() => {
//     const countTotalItems = () => {
//       return cart.reduce((acc, item) => acc + item.quantity, 0);
//     };
//     setTotalItems(countTotalItems());

//     const countSubtotal = () => {
//       return cart.reduce(
//         (acc, item) => acc + item.precio * item.quantity,
//         0
//       );
//     };
//     setSubtotal(countSubtotal());
//   }, [cart]);

//   useEffect(() => {
//     const countTaxes = () => {
//       return subtotal * 0.1;
//     };
//     setTaxes(countTaxes());
//   }, [subtotal]);

//   useEffect(() => {
//     const countTotal = () => {
//       return subtotal + taxes;
//     };
//     setTotal(countTotal());
//   }, [subtotal, taxes]);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         increaseQuantity,
//         decreaseQuantity,
//         clearCart,
//         totalItems,
//         isEmpty,
//         subtotal,
//         taxes,
//         total,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      const storedCart = localStorage.getItem(`cart_${userId}`);
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  const saveCartToLocalStorage = (cartData) => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cartData));
    }
  };

  const clearCart = () => {
    setCart([]);
    saveCartToLocalStorage([]);
  };

  const isEmpty = () => {
    return cart.length === 0;
  };

  const findItemInCart = (id) => {
    return cart.find((item) => item._id === id);
  };

  const addToCart = (product, quantity) => {
    const existingItem = findItemInCart(product._id);
    if (existingItem) {
      increaseQuantity(existingItem._id);
    } else {
      const newProduct = { ...product, quantity };
      setCart([...cart, newProduct]);
      saveCartToLocalStorage([...cart, newProduct]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const existingItem = findItemInCart(id);
    if (existingItem.quantity === 1) {
      removeFromCart(id);
    } else {
      const updatedCart = cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    }
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

    const countTaxes = () => {
      return subtotal * 0.1;
    };
    setTaxes(countTaxes());

    const countTotal = () => {
      return subtotal + taxes;
    };
    setTotal(countTotal());
  }, [cart, subtotal, taxes]);

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

