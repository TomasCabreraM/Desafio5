const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p><strong>Ingredientes:</strong> {ingredients.join(', ')}</p>
          <p><strong>Precio:</strong> ${price.toLocaleString('es-CL')}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-sm btn-info">Ver más</button>
            <button className="btn btn-sm btn-success">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
