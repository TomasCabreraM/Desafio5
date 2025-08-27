import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {

  const { totalPrice } = useContext( CartContext );
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="#">🍕 Mamma Mía</a>
      <div className="ml-auto d-flex gap-2">
        <Link className="btn btn-outline-primary" to="/">Home</Link>
        {token ? (
          <>
          <Link className="btn btn-outline-primary" to="/profile">Profile</Link>
            <button className="btn btn-outline-danger" onClick={ logout }>
              🔒 Logout
            </button>
          </>
        ) : (
          <>
                    <Link className="btn btn-outline-primary" to="/login">Login</Link>
                    <Link className="btn btn-outline-primary" to="/register">Registro</Link>
          </>
        )}
        <Link className="btn btn-outline-dark" to="/cart">🛒 Total: ${totalPrice.toLocaleString('es-CL')}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
