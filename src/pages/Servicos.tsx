import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Section from "../components/Section";
import './Servicos.css';
import CoracaoVermelho from '../assets/coracao-vermelho.png'
import CoracaoBranco from '../assets/coracao-branco.png'
import IconeCompartilhar from '../assets/icone-compartilhar.png'
import IconeComentar from '../assets/icone-comentar.png'

function Servicos(){

    useEffect(() => {
                document.title = "Servicos";
            }, []);
        return(
        <>
            <Header></Header>
            <div className="container-servicos">
                <div className="servicos">
                    <div className="servicos-projetos">
                        <p> conteudo </p>
                        <div className="container-interacoes">
                            <img src={IconeCompartilhar} alt=""id="icone-compartilhar"/>
                            <img src={IconeComentar} alt=""id="icone-comentar"/>
                            <img src={CoracaoVermelho} alt=""id="icone-coracao-red"/>
                            <img src={CoracaoBranco} alt=""id="icone-coracao-white"/>
                        </div>
                    </div>

                    <div className="servicos-projetos">
                    <p> conteudo </p>
                        <div className="container-interacoes">
                            <img src={IconeCompartilhar} alt=""id="icone-compartilhar"/>
                            <img src={IconeComentar} alt=""id="icone-comentar"/>
                            <img src={CoracaoVermelho} alt=""id="icone-coracao-red"/>
                            <img src={CoracaoBranco} alt=""id="icone-coracao-white"/>
                        </div>
                    </div>

                    <div className="servicos-projetos">
                    <p> conteudo </p>
                        <div className="container-interacoes">
                            <img src={IconeCompartilhar} alt=""id="icone-compartilhar"/>
                            <img src={IconeComentar} alt=""id="icone-comentar"/>
                            <img src={CoracaoVermelho} alt=""id="icone-coracao-red"/>
                            <img src={CoracaoBranco} alt=""id="icone-coracao-white"/>
                        </div>
                    </div>

                    <div className="servicos-projetos">
                    <p> conteudo </p>
                        <div className="container-interacoes">
                            <img src={IconeCompartilhar} alt=""id="icone-compartilhar"/>
                            <img src={IconeComentar} alt=""id="icone-comentar"/>
                            <img src={CoracaoVermelho} alt=""id="icone-coracao-red"/>
                            <img src={CoracaoBranco} alt=""id="icone-coracao-white"/>
                        </div>
                    </div>
                </div>

                <div className="servicos">
                <div className="servicos-projetos">
                        <p> conteudo </p>
                        <div className="container-interacoes">
                            <img src={IconeCompartilhar} alt=""id="icone-compartilhar"/>
                            <img src={IconeComentar} alt=""id="icone-comentar"/>
                            <img src={CoracaoVermelho} alt=""id="icone-coracao-red"/>
                            <img src={CoracaoBranco} alt=""id="icone-coracao-white"/>
                        </div>
                    </div>

                    <div className="servicos-projetos">
                        <p> conteudo </p>
                        <div className="container-interacoes">
                            <img src={IconeCompartilhar} alt=""id="icone-compartilhar"/>
                            <img src={IconeComentar} alt=""id="icone-comentar"/>
                            <img src={CoracaoVermelho} alt=""id="icone-coracao-red"/>
                            <img src={CoracaoBranco} alt=""id="icone-coracao-white"/>
                        </div>
                    </div>

                    <div className="servicos-projetos">
                        <p> conteudo </p>
                        <div className="container-interacoes">
                            <img src={IconeCompartilhar} alt=""id="icone-compartilhar"/>
                            <img src={IconeComentar} alt=""id="icone-comentar"/>
                            <img src={CoracaoVermelho} alt=""id="icone-coracao-red"/>
                            <img src={CoracaoBranco} alt=""id="icone-coracao-white"/>
                        </div>
                    </div>

                    <div className="servicos-projetos">
                        <p> conteudo </p>
                        <div className="container-interacoes">
                            <img src={IconeCompartilhar} alt=""id="icone-compartilhar"/>
                            <img src={IconeComentar} alt=""id="icone-comentar"/>
                            <img src={CoracaoVermelho} alt=""id="icone-coracao-red"/>
                            <img src={CoracaoBranco} alt=""id="icone-coracao-white"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Servicos;