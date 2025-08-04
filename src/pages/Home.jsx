import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
// import { pizzas } from '../data/pizzas';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  async function consumirAPI() {
    const respuesta = await axios.get("http://localhost:5000/API/pizzas")
    const dataAPI = await respuesta.data
    console.log(dataAPI)
    setPizzas(dataAPI)
  }

  useEffect(() => {
    consumirAPI()
  }, [])
  

  return (
    <div className="container my-4">
      <Header />
      <div className="row">
        {
          pizzas.map(pizza => <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />)
        }
        {/* <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        /> */}
      </div>
    </div>
  );
};

export default Home;
