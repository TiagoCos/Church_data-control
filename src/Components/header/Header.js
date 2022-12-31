import  '../header/indexHeader.css'
import { Anchor } from 'antd';
import { Link } from 'react-router-dom';
import logo02 from '../../assets/icons/logo02.jpg'


function Header(){
    return(
     <Anchor >
       <header className='header'>
        <div className='list'>
          <Link to= '/' ><img className='logo' src={logo02}/> </Link>
            <a id='link' href='#b' >Conheça a Diretoria</a> 
            <a id='link' href='#d' >Igrejas Filiadas</a>
            <a id='link' href='#e' >Estatuto</a>
            <a id='link' href='#c' >Palavra do presidente  </a> 
            <Link  className='Login-btn' to='/Login' ><p>Entrar</p></Link> 
             
         </div>
       </header >
      </Anchor> 
    )
}
export default Header