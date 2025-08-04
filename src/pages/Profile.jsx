import React from 'react';

export const Profile = () => {
    return (
        <div className="container mt-5 text-center">
            <div className="card shadow-sm p-4">
                <h2 className="mb-3">Perfil de Usuario</h2>
                <p className="fs-5"><strong>Email:</strong> usuario@ejemplo.com</p>
                <button className="btn btn-danger mt-3">
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
};
