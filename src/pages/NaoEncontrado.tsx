import { useEffect } from "react";
import Footer from "../components/Footer"

function NaoEncontrado() {

  useEffect(() => {
          document.title = "Não encontrado";
        }, []);

  return (
        <>
            <NaoEncontrado></NaoEncontrado>
            <Footer></Footer>
        </>
  )
}

export default NaoEncontrado