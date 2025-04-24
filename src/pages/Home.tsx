import { useEffect } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import Section from "../components/Section"

function Home(){

    useEffect(() => {
        document.title = "Home";
      }, []);

    return(
        <>
            <Header></Header>
            <Section titulo1="Bem-vindo!" titulo2="Veja nossos destaques da semana" />
            <Footer></Footer>
        </>
    );
}
export default Home