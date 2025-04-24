import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
// Páginas de acesso
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
// import NaoEncontrado from './components/NaoEncontrado';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/servicos' element={<Servicos></Servicos>}></Route>
          <Route path='/contato' element={<Contato></Contato>}></Route>
          {/* Rota Coringa - Caso não Exista */}
          {/* <Route path='*' element={<NaoEncontrado></NaoEncontrado>}></Route> */}
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
