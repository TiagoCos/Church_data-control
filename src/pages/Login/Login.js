import '../Login/indexLogin.css'

function Login() {
/*const teste ={
  height: '160px',
  color: '#fff',
  textAlign: 'center',
  background: '#a52a2a',
}*/


  return (
    <main className='main'>
        <div className='container'>   
          <h1>Login</h1>
          <form action='value'>
              <label for='CPF'>CPF: </label>
              <input type='CPF' name='CPF' id='CPF' placehoder='Digite seu CPF' autoComplete='off'></input>
              <div className="campo">
                <label for="Categoria">Categoria: </label>
                <select id="Categoria" required>
                  <option selected disabled value="value">Selecione</option>
                  <option>Secretário</option>
                  <option>Tesoureiro</option>
                  <option>Administrador</option>
                </select>
               </div>
              <button></button>
              <label for='password'>Senha: </label>
              <input type='password'></input>
          </form>
          <button className='button-form'>
              <a id='submit' href='#'>Entrar</a>
          </button>
        </div>
    </main>
  )
}

export default Login;
