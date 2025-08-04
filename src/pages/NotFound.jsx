import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <p className="fs-3"> <span className="text-danger">¡Vaya!</span> Página no encontrada.</p>
      <p className="lead">
        La página que estás buscando no existe o ha sido movida.
      </p>
      <Link className="btn btn-outline-primary" to="/">Home</Link>
    </div>
  );
};