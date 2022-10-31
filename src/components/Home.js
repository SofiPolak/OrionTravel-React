import React, { useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { useNavigate , Navigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLogged, setLogged] = useState(false);

  const isIncompleteData = !email || !password;

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isIncompleteData) {
      alert("Acceso inválido, todos los campos son obligatorios");
      return;
    }

    try {
      await signIn(email, password);
      navigate('dashboard', { replace: true })

    } catch (err) {
      alert("Acceso inválido, correo electrónico y/o contraseña incorrecta");
      return;
    }
  };

  return (
    <div>
      {!isLogged ? (
        <div>
          <form onSubmit={onSubmit}>
            <div className='form-inner'>
              <h2>Login</h2>
              <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type="email" name="email" id="email" onChange={e => setEmail({ email: e.target.value })} />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" id="password" onChange={e => setPassword({ password: e.target.value })} />
              </div>
            </div>
            <button >Login</button>
          </form>
        </div>
      ) : (
        <div>
          <Navigate to="/dashboard" replace />
        </div>
      )}
    </div>
  );
}
