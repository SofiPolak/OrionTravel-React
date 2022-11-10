import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import "./Navbar.css"


export const Navbar = () => {

    const { signOut } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const onSubmit = async (event) => {
      event.preventDefault();
        await signOut();
        navigate('/', { replace: true })
      }

    return <nav className="nav">
        <img 
        src="orion_nav.png"
        className="nav_logo" />
        <a className="dashboard_title">Dashboard</a>
        <button onClick={onSubmit}>Salir</button>
    </nav>
}