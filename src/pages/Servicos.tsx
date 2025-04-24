import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";

function Servicos(){

    useEffect(() => {
            document.title = "Servicos";
          }, []);
    return(
        <>
            <Header></Header>
            <Section titulo1="Conheça nossos serviços" titulo2="Um atendente irá te atender..." />
            <Footer></Footer>
        </>
    )
}
export default Servicos;