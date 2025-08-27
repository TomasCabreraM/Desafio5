import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CardPizza = ({ pizza }) => {

  const { actualizarCarrito } = useContext(CartContext);

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={pizza.img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
          <p><strong>Precio:</strong> ${pizza.price.toLocaleString('es-CL') || 0}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-sm btn-info">Ver más</button>
            <button
              className="btn btn-sm btn-success"
              onClick={ () => actualizarCarrito(pizza) }
            >Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
