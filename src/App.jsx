import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Registro } from './pages/Registro';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Pizza } from './pages/Pizza';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Registro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/pizza/p001" element={<Pizza/>}/>
        <Route path="/profile" element={<Profile/>}/>
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
