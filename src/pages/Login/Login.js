import './indexLogin.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Message from '../../Components/layout/Message/Message';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');
  const [error, setError] = useState(''); // só quero usar o estado do error, 
  const [loading, setLoading] = useState(false);

  const [TypeMsg, setTypeMsg] = useState('');
  const [Msg, setMsg] = useState('');

  useEffect(() => {
    if (error) {
      setTypeMsg('erro');
      setMsg('campos inválidos, confira seus dados!')
    }
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    if (!cpf || !senha || !tipo) {
      setTypeMsg('campos');
      setMsg('CAMPOS OBRIGATORIOS!')
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/login', { cpf, senha, tipo });
      console.log(response.data);
    } catch (e) {
      setError('Ocorreu um erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className='mainL'>
      
    <form  className='container-login' onSubmit={handleSubmit}>
    <h1>Tela de Login</h1>
      <label>CPF:</label>
      <input
       
        type="text"
        placeholder="Digite seu CPF"
        value={cpf}
        autoComplete='off'
        onChange={(e) => setCpf(e.target.value)}
      />
      <label>Tipo:</label>
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option disabled value="inactive">Selecione um tipo</option>
        <option value="secretario">Secretário</option>
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
      <button type="submit" className='bt-login' disabled={loading}>
        {loading ? 'Carregando...' : 'Login'}
      </button>
      <p>Ainda não tem conta?</p>
          <button>
          <Link to='/Cadastro' id='criar-conta'>Registrar</Link> 
          </button>
          <Message msg={Msg} type={TypeMsg} />
    </form>
    
    </div>
  );
};

export default Login;
