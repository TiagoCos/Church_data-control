import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Dashboard/Home';
import Login from './pages/Login/Login';
import Footer from './Components/layout/Footer/footer';
import Header from './Components/header/Header';
import Cadastro from './pages/Cadastro/Cadastro';
import Secretario from './pages/Secretário/Secretario';
import Ficha from './Components/Ficha/Ficha-cadastro';
import Configuracoes from './pages/Configuracoes-ADM/Config-ADM';
import NotFound from './pages/NotFound/NotFound';
import Tesoureiro from './pages/Tesoureiro/Tesoureiro';
import Administrador from './pages/Admin/Admin';

import { isAuthenticated } from './Components/auth';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  
  //Rotas 
  return (
      <Router>
            
       <Header/>
        <Routes> {/*esse seria o Switch */}
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/Cadastro-de-membros' element={<Ficha />} />

          {/*páginas bloqueadas pelo acesso direto*/ }

          <Route path='/secretario' element={<Navigate to="/" />} />
      
          <Route path="/secretario" element={<PrivateRoute 
           path="/secretario"
           component={Secretario} 
           isAuthenticated={isAuthenticated}/>} />

            
          <Route path='/Configuracoes' element={<Navigate to="/" />} />
          <Route path="/configuracoes" element={<PrivateRoute 
           path="/configuracoes"
           component={Configuracoes} 
           isAuthenticated={isAuthenticated}/>} />

          <Route path='/Tesoureiro' element={<Navigate to="/" />} />
          <Route path="/tesoureiro" element={<PrivateRoute 
           path="/tesoureiro"
           component={Tesoureiro} 
           isAuthenticated={isAuthenticated}/>} />

          <Route path='/Administrador' element={<Navigate to="/" />} />
          <Route path="/administrador" element={<PrivateRoute 
           path="/administrador"
           component={Administrador} 
           isAuthenticated={isAuthenticated}/>} />  {/*Amém , isso nunca tinha fim */}
         
        </Routes>

       <Footer/>
      </Router>
  );
}

export default App;
