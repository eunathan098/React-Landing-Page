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
                <h1 className="contato-title"> Nossas redes sociais </h1>
                <div className="container">
                    <img src={iconeLogoWhatsApp} alt="Logo" height={"70px"}/>
                    <img src={iconeLogoFacebook} alt="Logo" height={"70px"}/>
                    <img src={iconeLogoInstagram} alt="Logo" height={"70px"}/>
                    <img src={iconeLogoGmail} alt="Logo" height={"70px"}/>
                </div>
            </div>
            <div className="container-logalization">
                    <h1 className="contato-title"> Nossa Localização </h1>
                <div className="container-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1209357416667!2d-46.6333089!3d-23.5505208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a1c2e08f97%3A0x9d32a2437c4266bb!2sPra%C3%A7a%20da%20Rep%C3%BAblica%2C%20São%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1645123406763!5m2!1spt-BR!2sbr"
                            width="600" height="450" style={{ border: 0 }}>
                    </iframe>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Contato