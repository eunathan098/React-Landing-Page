import './NavBar.css';
import iconeLogo from '../assets/icone-logo.png';
import iconeLogoPerfil from '../assets/logo-nathan.jpg';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <>
            <nav>
                <img src={iconeLogo} alt="Logo" height={"40px"}/>
                <ul className="nav-list">
                    <li> <Link to="/home" style={{ color: "#fff", textDecoration: "none", fontSize: "20px" }}> Home </Link></li>
                    <li> <Link to="/servicos" style={{ color: "#fff", textDecoration: "none", fontSize: "20px" }}> Servicos </Link></li>
                    <li> <Link to="/contato" style={{ color: "#fff", textDecoration: "none", fontSize: "20px" }}> Contato </Link></li>
                </ul>

                <img id="logo-perfil" src={iconeLogoPerfil} alt="Logo" />
            </nav>
        </>
    )
}
export default NavBar