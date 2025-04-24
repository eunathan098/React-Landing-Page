import { useEffect } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import Section from "../components/Section"

function Contato(){

    useEffect(() => {
            document.title = "Contato";
          }, []);

    return(
        <>
            <Header></Header>
            <Section titulo1="Entre em contato" titulo2="Responderemos em breve" />
            <Footer></Footer>
        </>
    )
}
export default Contato