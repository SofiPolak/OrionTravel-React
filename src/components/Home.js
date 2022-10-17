import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

export const Home = ({ setIsLoading }) => {

  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isIncompleteData = !email || !password;

  const onSubmit = async () => {
    console.log(email);
    console.log(password);
    if (isIncompleteData) {
      console.log("Acceso inválido", "Todos los campos son obligatorios");
      return;
    }

    try {
      setIsLoading(true);
      await signIn(email, password);
      navigate('usuarios', {replace: true})
    } catch (err) {
      console.log(
        "Acceso inválido",
        "Correo electrónico y/o contraseña incorrecta"
      );
      setIsLoading(false);

      return;
    }
  };

    return (
        <form onSubmit= {onSubmit}>
            <div className='form-inner'>
                <h2>Login</h2>
            {/*(error != "") ? (<div className='error'>{error}</div>) : ""*/}
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type="email" name="email" id="email" onChange={e => setEmail({email: e.target.value})}  />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" id="password" onChange={e => setPassword({password: e.target.value})}  />
            </div>
            <input type="submit" value="LOGIN funciona mal" />
            </div>
            <button onClick={onSubmit}>el boton login</button>
       </form>
    )
}

export default function LoginScreen() {
    const [isLoading, setIsLoading] = useState(false);
  
    return (
  <div>
        {isLoading ? (
          <div>
            <label>Hola</label>
            </div>
        ) : (
          <div>
            <label>Iniciar sesión</label>
            <Home setIsLoading={setIsLoading} />
            </div>
        )}
        </div>
    );
  }

/*
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";

//Para loguearse de manera exitosa usar email = admin@admin.com, password = admin
export function LoginForm({ setIsLoading }) {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isIncompleteData = !email || !password;

  const onSubmit = async () => {
    if (isIncompleteData) {
      console.log("Acceso inválido", "Todos los campos son obligatorios");
      return;
    }

    try {
      setIsLoading(true);
      await signIn(email, password);
    } catch (err) {
      console.log(
        "Acceso inválido",
        "Correo electrónico y/o contraseña incorrecta"
      );
      setIsLoading(false);

      return;
    }
  };

  return (
        <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType={"email-address"} />

      <input
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        isPassword
      />
      <button
        onClick={onSubmit}
        title="Iniciar sesión"
        disabled={isIncompleteData}
        inverted
      />
        </div>
  );
}

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  return (
<div>
      {isLoading ? (
        <div>
          <label>Hola</label>
          </div>
      ) : (
        <div>
          <label>Iniciar sesión</label>
          <LoginForm setIsLoading={setIsLoading} />
          </div>
      )}
      </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    paddingTop: "10%",
    paddingHorizontal: "10%",
  },
  formView: {
    marginBottom: 20,
    alignContent: "center",
  },
  title: {
    fontSize: 30,
    alignContent: "center",
    textAlign: "center",
    color: "white",
    margin: 30,
  },
});
*/