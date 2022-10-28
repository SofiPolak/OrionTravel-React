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
/*
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class DetalleUsuario extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi';
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }
  */
