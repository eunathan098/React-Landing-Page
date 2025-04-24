import { useEffect } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
// import Section from "../components/Section";
import './Contato.css';
import iconeLogoWhatsApp from '../assets/whatsapp.png';
import iconeLogoFacebook from '../assets/facebook.png';
import iconeLogoInstagram from '../assets/instagram.png';
import iconeLogoGmail from '../assets/gmail.png';
// import Localization from "../components/Mapa";


function Contato(){

    useEffect(() => {
            document.title = "Contato";
          }, []);

    return(
        <>
            <Header></Header>
            <div className="container-redes-sociais">
                <h1> Nossas redes soiais </h1>
                <div className="container">
                    <img src={iconeLogoWhatsApp} alt="Logo" height={"70px"}/>
                    <img src={iconeLogoFacebook} alt="Logo" height={"70px"}/>
                    <img src={iconeLogoInstagram} alt="Logo" height={"70px"}/>
                    <img src={iconeLogoGmail} alt="Logo" height={"70px"}/>
                </div>
            </div>
            <div className="container-logalization">
                    <h1> Nossa Localização </h1>
                <div className="container-maps">
                    {/* <Localization></Localization> */}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Contato