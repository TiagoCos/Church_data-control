import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Dashboard/Home';
import Login from './pages/Login/Login';
import Footer from './Components/layout/Footer/footer';
import Header from './Components/header/Header';
import Cadastro from './pages/Cadastro/Cadastro';
import Secretario from './pages/Secretario/secretario'
import NewUser from './pages/Usuarios/NewUser'
import Configuracoes from './pages/Configuracoes-ADM/Config-ADM';
import NotFound from './pages/NotFound/NotFound';
import Tesoureiro from './pages/Tesoureiro/Tesoureiro';
import Administrador from './pages/Admin/Admin';

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
       

          {/*páginas bloqueadas pelo acesso direto*/ }

          <Route path="/secretario" 
          element={<PrivateRoute  >
               <Secretario/>
              </PrivateRoute>
          } />

          <Route path="/configuracoes" 
          element={<PrivateRoute  >
               <Configuracoes/>
              </PrivateRoute>
          } />
          
          <Route path="/tesoureiro" 
          element={<PrivateRoute  >
               <Tesoureiro/>
              </PrivateRoute>
          } />
              
           <Route path="/administrador" 
          element={<PrivateRoute  >
               <Administrador/>
              </PrivateRoute>
          } />
           <Route path="/Usuarios" 
          element={<PrivateRoute  >
               <NewUser/>
              </PrivateRoute>
          } />

        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
