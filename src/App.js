import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Dashboard/Home';
import Login from './pages/Login/Login';
import Footer from './Components/layout/Footer/footer';
import Header from './Components/header/Header';

function App() {
  //Rotas 
  return (
      <Router>
            
         <Header/>
      
        <Routes> {/*esse seria o Switch */}
          <Route  path='/' element={<Home />}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>

       
      </Router>
  );
}

export default App;
