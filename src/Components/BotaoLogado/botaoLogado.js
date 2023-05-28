import React from 'react';
import { useNavigate } from 'react-router-dom';
import './botaoLogado.css'
const BotaoLogado = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover o token e a hora do último login do armazenamento local
    localStorage.removeItem('token');
    localStorage.removeItem('lastLoginTime');

    // Redirecionar para a página de login
    navigate('/Login');
  };

  return (
    <div>
      <button className='botao-logado' onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default BotaoLogado;
