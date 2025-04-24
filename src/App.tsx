import './App.css';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
