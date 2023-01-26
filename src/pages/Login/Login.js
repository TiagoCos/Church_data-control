import React from 'react';
import '../Login/indexLogin.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);

  const handleUsernameChange = async (event) => {
    const value = event.target.value;
    setUsername(value);
    const isAvailable = await checkUsernameAvailability(value);
    setIsUsernameAvailable(isAvailable);
    setUsernameError(isAvailable ? '' : 'username already taken');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    // Submit the form
  };

  const checkUsernameAvailability = async (username) => {
    // make a request to the server to check if the
  }
}
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    // Submit the form
  };

  const validate = () => {
    if (!username) {
      setError('Username is required');
      return false;
    }
    if (!password) {
      setError('Password is required');
      return false;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <div className='mainL'>
    <form className='container-login' onSubmit={handleSubmit}>
      <label>
        CPF:
        <input type="text" value={username} placeholder='Digite seu CPF' autoComplete='' onChange={handleUsernameChange} />
      </label>
      <br />
      <div className="campo">
        <label>Categoria: </label>
        <select id="Categoria" required>
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
      {error && <p>{error}</p>}
      <button className='button-form' type='submit'>
          <a id='submit-entrar' href='#'>Entrar</a>
          </button>

          <p>Ainda não tem conta?</p>
          <button>
          <Link to='/Cadastro' id='criar-conta'>Registrar</Link> 
          </button>
    </form>
    </div>
  );
};


export default Login;
