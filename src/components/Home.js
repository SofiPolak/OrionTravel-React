import React, { useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { useNavigate , Navigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLogged, setLogged] = useState(false); //

  const isIncompleteData = !email || !password;

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isIncompleteData) {
      console.log("Acceso inválido", "Todos los campos son obligatorios");
      return;
    }

    try {
      await signIn(email, password);
      navigate('grafico', { replace: true })

    } catch (err) {
      console.log(
        "Acceso inválido",
        "Correo electrónico y/o contraseña incorrecta"
      );
      setLogged(true);
    }
  };

  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
  );
  
  const Form = props => (
    <div>
      <FormInput description="Username" placeholder="Ingresá tu email" type="email" name="email" id="email" onChange={e => setEmail({ email: e.target.value })}/>
      <FormInput description="Password" placeholder="Ingresá tu contraseña" type="password" name="password" id="password" onChange={e => setPassword({ password: e.target.value })}/>
      <FormButton title="Ingresar"/>
    </div>
  );
  
  const FormButton = props => (
    <div id="button" class="row">
      <button>{props.title}</button>
    </div>
  );
  
  const FormInput = props => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );

  return (
    <div id="loginform">
      {!isLogged ? (
        <div>
          <FormHeader title="Login" />
          <Form onSubmit={onSubmit}/>
        </div>
      ) : (
        <div>
          <Navigate to="/grafico" replace />
        </div>
      )}
    </div>
  
  );
}

