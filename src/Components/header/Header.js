import  '../header/indexHeader.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/casa.png'


function Header(){
    return(

       <header className='header'>
        <div className='list'>

          <Link to= '/' ><img className='logo' src={logo} alt=''/> </Link>
            <a id='link' href='#b' >Diretoria</a> 
            <a id='link' href='#d' >Filiação</a>
            <a id='link' href='#e' >Estatuto</a>
            <a id='link' href='#c' >Palavra do presidente  </a> 
            <Link  className='Login-btn' to='/Login' ><p>Entrar</p></Link> 
         </div>
       </header >
 
    )
}
export default Header