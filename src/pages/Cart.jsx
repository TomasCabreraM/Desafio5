import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { UserContext } from "../context/UserProvider";
import axios from "axios";
//import { pizzaCart, pizzas } from "../data/pizzas";


export const Cart = () => {
    //const [cart, setCart] = useState(pizzaCart);

    const { cart, totalPrice, actulizarCant, limpiarCarrito } = useContext(CartContext);
    const { token } = useContext(UserContext);

    const procesarCarrito = async () => {
        try {

            if (!token) {
                alert('No se ha iniciado sesión. No puede procesar su carrito.');
                return;
            }

            if (cart.length === 0) {
                alert('No hay productos en su carrito.');
                return;
            }

            const response = await axios({
                url: 'http://localhost:5000/api/checkouts',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                data: { cart }
            });

            const data = await response.data;
            if (!data?.message) {
                alert('Error procesando carrito, intente nuevamente');
                return;
            }

            alert('Compra realizada con éxito!');
            limpiarCarrito();
            return;
        
        } catch (error) {
            console.log('Error procesando carrito: ', error);
            alert('Error procesando carrito, intente nuevamente');
        }
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
                            <button onClick={ () => actulizarCant(pizza.id, "disminuir")} className="btn btn-outline-danger btn-sm me-2">
                                -
                            </button>
                            <span>{pizza.count}</span>
                            <button onClick={ () => actulizarCant(pizza.id, "incrementar")} className="btn btn-outline-primary btn-sm ms-2">
                                +
                            </button>
                        </div>
                    </div>)
            }
            <h5 className="mt-4">Total: ${totalPrice}</h5>
            <button
                className="btn btn-dark mt-2"
                disabled={!token}
                onClick={ procesarCarrito }
            >
                Pagar
            </button>
        </div>
    );
};