import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';

export const Profile = () => {

    const { logout, email, obtenerUsuario } = useContext(UserContext);

    useEffect(() => {
        obtenerUsuario();
    }, []);

    return (
        <div className="container mt-5 text-center">
            <div className="card shadow-sm p-4">
                <h2 className="mb-3">Perfil de Usuario</h2>
                <p className="fs-5"><strong>Email: </strong>{ email || 'No disponible' }</p>
                <button className="btn btn-danger mt-3" onClick={logout}>
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
};
