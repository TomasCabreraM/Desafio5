import axios from "axios";
import { useState, useEffect } from "react";

export const Pizza = () => {
    const [pizza, setPizza] = useState([]);

    async function consumirAPI() {
        const respuesta = await axios.get("http://localhost:5000/API/pizzas/P001")
        const dataAPI = await respuesta.data
        console.log(dataAPI.ingredients)
        setPizza(dataAPI)
    }

    useEffect(() => {
        consumirAPI()

    }, [])

    return (
        <div className="card m-3 shadow-sm" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={pizza.img}
                        className="img-fluid rounded-start"
                        alt={pizza.name}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex flex-column h-100">
                        <h5 className="card-title">{pizza.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            ${pizza.price}
                        </h6>
                        <p className="card-text fw-bold mb-1">Ingredientes:</p>
                        <ul className="mb-2">
                            {pizza.ingredients && pizza.ingredients.map((ing, index) => (
                                <li key={index}>{ing}</li>
                            ))}
                        </ul>
                        <p className="card-text flex-grow-1">{pizza.desc}</p>
                        <button className="btn btn-primary mt-2">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
