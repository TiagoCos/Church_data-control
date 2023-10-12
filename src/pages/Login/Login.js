import './indexLogin.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Message from '../../Components/layout/Message/Message';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [CPF, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [TypeMsg, setTypeMsg] = useState('');
  const [Msg, setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTypeMsg('erro');
      setMsg('Campos inválidos, confira seus dados!')
    }
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError('');
    
    if (!CPF || !senha || !tipo) {
      setTypeMsg('erro');
      setMsg('Campos obrigatórios');
      setLoading(false);
     
      setTimeout(() => {
        setMsg(null);
        setTypeMsg(null);
      }, 1000);
      
      return ;
    }
     
    axios.post('/http://localhost:5000/Login', { CPF, senha, tipo })
      .then((response) => {
        //lógica para pegar o token do server e usa-lo no localStorage
        const { token } = response.data;
        
        if (token != null) {
          localStorage.setItem('token', token);
          
          if (tipo === 'administrador') {
            navigate('/administrador');
          } else if (tipo === 'secretário') {
            navigate('/secretário');
          } else if (tipo === 'tesoureiro') {
            navigate('/tesoureiro');
          }
        } else {
          setError('Ocorreu um erro ao fazer login');
        }
      })
      .catch((error) => {
        setError('Ocorreu um erro ao fazer login');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  return (
    <div className='mainL'>

    <form  className='container-login' onSubmit={handleSubmit}>
    <h2>Login</h2>

      <label>CPF:</label>
      <input

        type="text"
        placeholder="Digite seu CPF"
        value={CPF}
        autoComplete='off'
        onChange={(e) => setCpf(e.target.value)}
      />
      <label>Tipo:</label>
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option disabled value="inactive">Selecione um tipo</option>
        <option value="secretário">Secretário</option>
        <option value="tesoureiro">Tesoureiro</option>
        <option value="administrador">Administrador</option>
      </select>
      <label>Senha:</label>
      <input

        type="password"
        placeholder="Digite sua Senha"
        value={senha}
        autoComplete='off'
        onChange={(e) => setSenha(e.target.value)}
      />
      <button  className='bt-login'  disabled={loading}>
        {loading ? 'Carregando...' : 'Login'}
      </button>
      <p>Ainda não tem conta?</p>

          <Link to='/Cadastro' id='criar-conta'>Registrar</Link> 
          <Message msg={Msg} type={TypeMsg} />
    </form>

    </div>
  );
};

export default Login;
