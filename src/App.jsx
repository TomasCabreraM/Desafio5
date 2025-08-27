import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Registro } from './pages/Registro';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Pizza } from './pages/Pizza';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';
import DataPizzasProvider from './context/DataPizzasProvider';
import { UserContext } from './context/UserProvider';
import { useContext } from 'react';

function App() {

  const { token } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <DataPizzasProvider>
            <Home/>
          </DataPizzasProvider>
        }/>

        <Route path="/register" element={
          !token ? <Registro /> : <Navigate to="/" />
        }/>

        <Route path="/login" element={
          !token ? <Login /> : <Navigate to="/" />
        }/>

        <Route path="/cart" element={<Cart/>}/>

        <Route path="/pizza/:id" element={<Pizza/>}/>

        <Route path="/profile" element={
          token ? <Profile /> : <Navigate to="/login" /> 
        }/>

        <Route path="/404" element={<NotFound/>}/>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
      {/* <Pizza/> */}
      {/* <Home /> */}
      {/* <Cart/> */}
      {/* <Registro /> */}
      {/* <Login/> */}
      <Footer />
    </>
  );
}

export default App;
