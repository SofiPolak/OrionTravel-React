import React from "react";
import {
  PieChart, 
  Pie,
  Sector, 
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Datos = () => {

  const viajes =[
    {
      year: 2016,
      count: 1
    },
    {
      year: 2021,
      count: 1
    },
    {
      year: 2022,
      count: 2
    }
  ]

  const usuarios = [
      {
        year: 2022,
        count: 3
      }
    ]

    const gastos = [
      {
        year: 2022,
        count: 5
      }
    ]

   const categorias = [
      {
        name: "Alojamiento",
        value: 1
      },
      {
        name: "Comida",
        value: 2
      },
      {
        name: "Entretenimiento",
        value: 1
      },
      {
        name: "Otros",
        value: 1
      }
    ]

   const metodosPago = [
      {
        name: "Cash",
        value: 2
      },
      {
        name: "CreditCard",
        value: 1
      },
      {
        name: "Efectivo",
        value: 2
      }
    ]

  const data = [
    {
      year: 2020,
      userCount: 10,
    },
    {
      year: 2021,
      userCount: 30,
    },
    {
      year: 2022,
      userCount: 50,
    }
  ];

  let renderLabel = function(categorias) {
    let string = "";
    return string.concat(categorias.name, ": ", categorias.value);
  }

  let renderLabel2 = function(metodosPago) {
    let string = "";
    return string.concat(metodosPago.name, ": ", metodosPago.value);
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>La cantidad de viajes totales es: {viajes.map((viaje) => (viaje.count)).reduce((a, b) => a + b, 0)}</h2>
      <h2>La cantidad de usuarios totales es: {usuarios.map((usuario) => (usuario.count)).reduce((a, b) => a + b, 0)}</h2>
      <h2>La cantidad de gastos registrados es: {gastos.map((gasto) => (gasto.count)).reduce((a, b) => a + b, 0)}</h2>
      <div>
        <ResponsiveContainer width={400} height={400}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="userCount"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        </div>
        <div>
        <ResponsiveContainer width={400} height={400}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={categorias}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label={renderLabel}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div>
      <PieChart width={800} height={400}>
      <Pie
        data={metodosPago}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={renderLabel2}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      </PieChart>
      </div>
      </div>
  );
};
