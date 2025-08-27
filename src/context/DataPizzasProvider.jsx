import axios from "axios";
import { createContext, useState } from "react"

export const DataPizzaContext = createContext();

const DataPizzasProvider = ({ children }) => {

  const [pizzas, setPizzas] = useState([]);

  async function consumirAPI() {
    const respuesta = await axios.get("http://localhost:5000/API/pizzas")
    const dataAPI = await respuesta.data
    setPizzas(dataAPI)
  }
  
  return (
    <DataPizzaContext.Provider
      value={{
        pizzas,
        consumirAPI
      }}
    >
      { children }
    </DataPizzaContext.Provider>
  )
}

export default DataPizzasProvider;