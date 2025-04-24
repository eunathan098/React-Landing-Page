import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <>
            <nav>
                <img src="./src/assets/icone-logo.png" alt="header-logo" height={ "40px"} />
                <ul>
                    <li> <Link to="/home" style={
                        { color: "#fff", textDecoration: "none", fontSize: "20px"}}> Home </Link></li>
                    <li> <Link to="/servicos" style={
                        { color: "#fff", textDecoration: "none", fontSize: "20px"}}> Servicos </Link></li>
                    <li> <Link to="/contato" style={
                        { color: "#fff", textDecoration: "none", fontSize: "20px"}}> Contato </Link></li>
                </ul>
            </nav>
        </>
    )
}
export default NavBar