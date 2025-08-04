import { useState } from "react";
import { pizzaCart, pizzas } from "../data/pizzas";


export const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);
    
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
        .filter( item => item.count > 0 )
        console.log(nuevoCarrito)
        setCart(nuevoCarrito)
    }

    return (
        <div className="container my-4">
            <h5>Detalles del pedido:</h5>
            {
                cart.map(pizza =>
                    <div key={pizza.id} className="d-flex align-items-center my-2">
                        <img
                            src={pizza.img}
                            alt={pizza.name}
                            className="rounded"
                            style={{ width: '40px', height: '40px' }}
                        />
                        <div className="ms-2 flex-grow-1">
                            {pizza.name}
                        </div>
                        <div className="me-2">{pizza.price}</div>
                        <div className="d-flex align-items-center">
                            <button onClick={ () => actulizarCant(pizza.id, "disminuir")} className="btn btn-outline-danger btn-sm me-2">-</button>
                            <span>{pizza.count}</span>
                            <button onClick={ () => actulizarCant(pizza.id, "incrementar")} className="btn btn-outline-primary btn-sm ms-2">+</button>
                        </div>
                    </div>)
            }
            <h5 className="mt-4">Total: ${totalPrice}</h5>
            <button className="btn btn-dark mt-2">Pagar</button>
        </div>
    );
};