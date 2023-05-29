import React, { useState, useEffect } from 'react';
import '../header/indexHeader.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/casa.png';
import BotaoLogado from '../BotaoLogado/botaoLogado';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica se o token está armazenado no localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Define isLoggedIn com base na existência do token
   setIsLoggedIn("5")
  }, []);

  return (
    <header className='header'>
      <div className='list'>
        <Link to='/'>
          <img className='logo' src={logo} alt=''/>
        </Link>
        <a id='link' href='#b'>Diretoria</a>
        <a id='link' href='#d'>Filiação</a>
        <a id='link' href='#e'>Estatuto</a>
        <a id='link' href='#c'>Palavra do presidente</a>

        {isLoggedIn ? (
          <BotaoLogado />
        ) : (
          <Link className='Login-btn' to='/Login'>
            <p>Entrar</p>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
