import React from 'react';
import '../Login/indexLogin.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Message from '../../Components/layout/Message/Message';
import axios from 'axios';

const Login = () => {
const Validation= () => {
  const [usernameError, setUsernameError] = useState('');
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);

  const handleUsernameChange = async (event) => {
    const value = event.target.value;
    setUsername(value);
    const isAvailable = await checkUsernameAvailability(value);
    setIsUsernameAvailable(isAvailable);
    setUsernameError(isAvailable ? '' : 'username already taken');
  };


  const checkUsernameAvailability = async (username) => {
    try {
        // make a request to the server to check if the username is available
        const response = await axios.get(`/api/users?username=${username}`);
        if (response.data.length > 0) {
            // username is not available
            return false;
        } else {
            // username is available
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

}
/*--------------são só pra validar ------------------------------------------------------------------------------------ */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Categoria, setCategoria] = useState('');
  // contato com o Message
  const [TypeMsg, setTypeMsg] = useState('');
  const [Msg, setMsg] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };
  // se passar nos testes do validade(return true), ai vai!
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    // Submit the form
  };

  const validate = () => {
    if (!username) {
      setMsg('CPF é requerida');
      setTypeMsg('Error')
      return false;
    }
    if (!password) {
      setMsg('Senha é requerida');
      setTypeMsg('Error')  
      return false;
    }
    if (!Categoria) {
      setMsg('Categoria é requerida');
      setTypeMsg('Error')  
      return false;
    }
    return true;
  };

  
  return (
    <div className='mainL'>
    <form className='container-login' onSubmit={handleSubmit}>
      <label>
        CPF:
        <input type="text" value={username} placeholder='Digite seu CPF' autoComplete='off' onChange={handleUsernameChange} />
      </label>
      <br />
      <div className="campo">
        <label>Categoria: </label>
        <select id="Categoria" required value={Categoria} onChange={handleCategoriaChange}>
           <option selected disabled >Selecione</option>
           <option>Secretário</option>
           <option>Tesoureiro</option>
          <option>Administrador</option>
       </select>
      </div>
      <br />
      <label>
        Senha:
        <input type="password" value={password} placeholder='Digite seu Senha' onChange={handlePasswordChange} />
      </label>
      <br />
      <button className='button-form' type='submit'>
          <a id='submit-entrar' href='#'>Entrar</a>
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
