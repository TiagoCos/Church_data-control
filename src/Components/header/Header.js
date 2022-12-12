import React from 'react';
import  '../header/indexHeader.css'
import { Anchor } from 'antd';
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';


function Header(){
    return(
     <Anchor >
       <header className='header'>
        <div className='list'>
          <Link to= '/' ><img className='logo' src={logo}/> </Link>
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