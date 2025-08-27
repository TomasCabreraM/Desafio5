import { createContext, useState } from "react"

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [token, setToken] = useState(true);
  const [email, setEmail] = useState(null);

  const logout = () => {
    setToken(false);
  }

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        logout
      }}
    >
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider