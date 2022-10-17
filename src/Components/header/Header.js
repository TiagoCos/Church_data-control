import  '../header/indexHeader.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';


function Header(){
    return(
       <header className='header'>
          <div className='list'>
      
                <Link  to= '/' ><img className='logo' src={logo}/> </Link>
                 <Link id='link' to= '/Login' >Conheça a Diretoria</Link> 
                 <Link id='link' to= '/Login' >Igrejas Filiadas</Link>
                 <Link id='link' to= '/Login' >Estatuto</Link>
                 <Link id='link' to= '/Login' >Palavra do presidente</Link> 
                 <Link id='link' to= '/Login' >Fazer Login </Link> 
              
            
           
          </div>
       </header>
    )
}
export default Header