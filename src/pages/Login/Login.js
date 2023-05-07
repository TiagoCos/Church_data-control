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
        const { token, tipo } = response.data;
        
        if (token && tipo) {
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
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="CPF" onChange={(event) => setCpf(event.target.value)} />
        <input type="password" placeholder="Senha" onChange={(event) => setSenha(event.target.value)} />
        <select onChange={(event) => setTipo(event.target.value)}>
          <option value="">Selecione um tipo</option>
          <option value="administrador">Administrador</option>
          <option value="secretário">Secretário</option>
          <option value="tesoureiro">Tesoureiro</option>
        </select>
        {error && <Message type={TypeMsg} message={Msg} />}
        <button type="submit" disabled={loading}>Login</button>
        <Link to="/cadastrar">Criar conta</Link>
      </form>
    </div>
  );
};

export default Login;
