import axios from "axios";
import { createContext, useState } from "react"

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [token, setToken] = useState(false);
  const [email, setEmail] = useState(null);

  const login = async ({ email, password}) => {
    try {

      const response = await axios({
        url: 'http://localhost:5000/api/auth/login',
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ email, password })
      });

      const data = await response.data;
      setEmail(data.email);
      setToken(data.token);

      alert("Inicio de sesion exitoso!");
      return;
      
    } catch (error) {
      console.log('Error realizando login: ', error);
      alert('Error realizando login, intente nuevamente');
    }
  }

  const register = async ({ email, password}) => {
    try {

      const response = await axios({
        url: 'http://localhost:5000/api/auth/register',
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ email, password })
      });

      const data = await response.data;
      setEmail(data.email);
      setToken(data.token);

      alert("Registro de usuario exitoso!");
      return;
      
    } catch (error) {
      console.log('Error registrando usuario: ', error);
      alert('Error registrando usuario, intente nuevamente');
    }
  }

  const obtenerUsuario = async () => {
    try {

      if (!token) {
        alert('No se ha iniciado sesión');
        return;
      }

      const response = await axios({
        url: 'http://localhost:5000/api/auth/me',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.data;
      setEmail(data.email);
      return;
      
    } catch (error) {
      console.log('Error obteniendo usuario: ', error);
      alert('Error obteniendo usuario, intente nuevamente');
    }
  }

  const logout = () => {
    setToken(false);
    setEmail(null);
  }

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        obtenerUsuario,
        logout
      }}
    >
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider