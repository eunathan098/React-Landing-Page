import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// Páginas de acesso
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
// import NaoEncontrado from './components/NaoEncontrado';

function App() {
  return (
    <BrowserRouter basename="/React-Landing-Page">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
        {/* Rota Coringa - Caso não Exista */}
        {/* <Route path="*" element={<NaoEncontrado />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
