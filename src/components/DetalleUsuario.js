/*import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import datosUsuario from '../services/DetalleUsuario';
import usuariosRegistrados from '../services/Usuarios';

export const DetalleUsuario = () => {

    const { usuarioId } = useParams();
    const usuId = usuarioId.slice(1);
    const navigate = useNavigate();

    //usuariosRegistrados.map((u)=>())
    //const soloGastos = datosUsuario.map((viaje) => (viaje.expenses)).reduce((a,v) =>  a = a + viaje.amount , 0)
    const soloGastos = datosUsuario.map((viaje) => (viaje.expenses))
    console.log(soloGastos);
    const soloValorGasto = soloGastos.map((gastos) => (gastos.amount))
    console.log(soloValorGasto);
    //const promGastos = soloValorGasto.reduce((a, b) => a + b) / soloValorGasto.length;

    return (
    <div>
        <div>El usuario {usuariosRegistrados.find(u => u.id == usuId).nombre} tiene {datosUsuario.length} viajes registrados.</div>
        <div>Su presupuesto promedio es de {datosUsuario.map((viaje) => (viaje.budget)).reduce((a, b) => a + b, 0) / datosUsuario.length}.</div>
        <div>El promedio de gastos es sus viajes es de ...{}</div>
        <div>La categoria mas utilizada es sus viajes es ...</div>
        <div>La forma de pago preferida es ...</div>
        <div>Grafico formas de pago y categorias</div>
        <button onClick={() => navigate(-1)}>Volver</button>
    </div>
    )
}*/
