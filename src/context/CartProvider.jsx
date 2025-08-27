import { createContext, useState } from "react"

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const totalPrice = cart.reduce(
    (acc, pizza) => acc + (pizza.price * pizza.count),
    0
  );

  const actulizarCant = (id, action) => {
    const nuevoCarrito = cart.map(item => {
      if (item.id === id) {
        const newCount = action === 'incrementar' ? item.count + 1 : item.count - 1;
        return { ...item, count: newCount };
      }
      return item
    })
      .filter(item => item.count > 0)
    console.log(nuevoCarrito)
    setCart(nuevoCarrito)
  }

  const actualizarCarrito = (pizza) => {
    const existePizza = cart.find( item => item.id === pizza.id );

    if (existePizza) {

      const nuevoCarrito = cart.map(item => {
        if (item.id === pizza.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });

      setCart(nuevoCarrito);

    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }

  }

  const limpiarCarrito = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalPrice,
        actulizarCant,
        actualizarCarrito,
        limpiarCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
