import './App.css';
import { Route, Routes } from "react-router-dom";
import Cliente from './pages/cliente.js';
import Admin from './pages/admin.js';
import Espera from './pages/espera.js';
import SistemaProvider from './context/sistemaProvider.js';
import Recepcao from './pages/recepcao.js';
import Home from './pages/home.js';
import Avaliacao from './pages/avaliacao.js';
import Relatorio from './pages/relatorio.js';

function App() {
  return (
    <SistemaProvider>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path='avaliacao' element={<Avaliacao/>}/>
        <Route path='relatorio' element={<Relatorio/>}/>
        <Route path='recepcao/'>
          <Route index element={<Recepcao/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='cliente'element={<Cliente/>}/>
          <Route path='espera' element={<Espera/>}/>
        </Route>


      </Route>
    </Routes>
    </SistemaProvider>
  );
}

export default App;
