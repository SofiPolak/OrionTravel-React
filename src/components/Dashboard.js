import React, { Fragment, useEffect, useState } from "react";
import {
  PieChart, 
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, Col, Row } from 'antd';
import '../index.css';
import 'antd/dist/antd.css';
import { getCategorias, getMetodosPago, getGastosAnio } from "../services/Data";

export const Datos = (datosDeApi) => {

  const [datosCategoria, setDataCategorias] = useState();
  const [datosMetodosPago, setDataMetodosPago] = useState();
  //const [datosGastosAnio, setDataGastosAnio] = useState();
  //const [loading, setLoading] = useState(false);
/* es esto
  useEffect(() => {

    const fetchData = async () => {
      const dataArray = await getCategorias();
      setDataCategorias(dataArray);

      const dataArray2 = await getMetodosPago();
      setDataMetodosPago(dataArray2);

      //const dataArray3 = await getGastosAnio();
      //setDataGastosAnio(dataArray3);
      //setLoading(true)
    };
      fetchData();
  }, [])

 */
/*
  const [categorias, setCategorias] = useState([]);

  useEffect(async () => {
    const list = await getCategorias();
    const categoriasList = [];
    list.map(item => categoriasList.push(item));
    list.map(({category, count}) => {
      return{
      name: category,
      value: count
      }
    });
    setCategorias(categoriasList);
  }, []);*/

  /*const fetchCategorias = async () => {
    const response = await getCategorias();
    const data1 = response.results;

    data1 = data1.map(({category, count}) => {
      return{
      name: category,
      value: count
      }
    });
    return data1;
  };*/

  /*
  const promesaCategorias = new Promise (function (myResolve, myReject) {
    myResolve(getCategorias());
  });

  promesaCategorias
    .then((response) => {
      const data1 = response.results;
      console.log(data1)
      data1 = data1.map(({category, count}) => {
        return{
        name: category,
        value: count
        }
      });
      console.log("------")
      console.log(data1)
      return data1;
    });
    */ 

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

  const data1 = [
    {
      year: 2020,
      total: 10,
    },
    {
      year: 2021,
      total: 30,
    },
    {
      year: 2022,
      total: 50,
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

  //const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const COLORS = ['#006175', '#D95032', '#FFEABB', '#FF8042'];

  const renderCrecUsuarios = (
    <div>
    <ResponsiveContainer width={300} height={280}>
          <LineChart
            width={500}
            height={300}
            data={data1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{fontSize: 15}}/>
            <YAxis tick={{fontSize: 15}} width={30}/>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        </div>
  );

  const renderCategorias = (
        <ResponsiveContainer width={300} height={280}>
        <PieChart width={300} height={280} align="center">
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={categorias}
            cx={140}
            cy={110}
            outerRadius={70}
            fill={COLORS[1 % COLORS.length]}
            label={renderLabel}
            fontSize={12}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
  );

  const renderMetodosPago = (
    <ResponsiveContainer width={300} height={280}>
      <PieChart width={300} height={280}>
      <Pie
        data={metodosPago}
        cx={170}
        cy={110}
        innerRadius={50}
        outerRadius={70}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={renderLabel2}
        fontSize={12}
      >
        {metodosPago.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      </PieChart>
      </ResponsiveContainer>
  );

  return (
    console.log(renderCategorias),
    <Fragment>
      <h1>Dashboard</h1>
      <div className="site-card-wrapper">
    <Row gutter={65}>
      <Col span={8}>
        <Card className="card" title="Viajes creados" bordered={true}>
        <h2>{viajes.map((viaje) => (viaje.count)).reduce((a, b) => a + b, 0)}</h2>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="card" title="Usuarios totales" bordered={true}>
        <h2>{usuarios.map((usuario) => (usuario.count)).reduce((a, b) => a + b, 0)}</h2>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="card" title="Gastos registrados" bordered={true}>
        <h2>{gastos.map((gasto) => (gasto.count)).reduce((a, b) => a + b, 0)}</h2>
        </Card>
      </Col>
    </Row>
  </div>
  <div className="site-card-wrapper">
    <Row gutter={65}>
      <Col span={8}>
        <Card className="card2" title="Métodos de pago" bordered={true}>
        {renderMetodosPago}
        </Card>
      </Col>
      <Col span={8}>
        <Card className="card2" title="Usuarios por año" bordered={true}>
          <div className="grafico">
        {renderCrecUsuarios}
        </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="card2" title="Categorías" bordered={true}>
        {renderCategorias}
        </Card>
      </Col>
    </Row>
  </div>
    </Fragment>
);
};
