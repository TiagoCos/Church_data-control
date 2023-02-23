import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Dashboard/Home';
import Login from './pages/Login/Login';
import Footer from './Components/layout/Footer/footer';
import Header from './Components/header/Header';
import Cadastro from './pages/Cadastro/Cadastro';
import  Secretario from './pages/Secretário/Secretario';
import Ficha from './Components/Ficha/Ficha-cadastro';
import Configuracoes from './pages/Configuracoes-ADM/Config-ADM';
import Teste from './pages/teste/teste';
function App() {
  //Rotas 
  return (
      <Router>
            
       <Header/>
        <Routes> {/*esse seria o Switch */}
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Cadastro' element={<Cadastro/>}/>
          <Route path='/Secretario' element={<Secretario/>}/>
          <Route path='/Ficha' element={<Ficha/>}/>
          <Route path='/Configuracoes' element={<Configuracoes/>}/>
          <Route path='/Teste' element={<Teste/>}/>
        </Routes>

       <Footer/>
      </Router>
  );
}

export default App;
