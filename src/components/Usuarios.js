import React from "react";
import { useNavigate } from "react-router-dom";
import usuariosRegistrados from '../services/Usuarios';

export const ListaUsuarios = () => {

    const navigate = useNavigate();

    return (
    <div>
        {usuariosRegistrados.map((u)=>(
            <div key={u.id}>
                <h2>{u.nombre}</h2>
                <h3>{u.email}</h3>
                <button onClick={() => navigate(`:${u.id}`/*, {replace: true}*/)}> Ver más detalles </button>
            </div>
        ))}
    </div>
    )
}

