import { useState } from "react";

export const Registro = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        // Validaciones
        if ( email.length <= 0 || password.length <= 0 || confirmPassword.length <= 0 ) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if ( password.length < 6 ) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if ( password !== confirmPassword ) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        alert("Usuario registrado exitosamente!");

    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Crear Cuenta</h2>
            <form id="FormularioRegistro" onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="ejemplo@correo.com"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Crea una contraseña"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Repite tu contraseña"
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
};
