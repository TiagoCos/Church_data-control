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
          <form>
            <label >CPF: </label>
              <input type='CPF' name='CPF' id='CPF' placeholder='Digite seu CPF' autoComplete='off'></input>
                  <div className="campo">
                    <label>Categoria: </label>
                    <select id="Categoria" required>
                      <option selected disabled>Selecione</option>
                      <option>Secretário</option>
                      <option>Tesoureiro</option>
                      <option>Administrador</option>
                    </select>
                  </div>
              <button></button>
              <label >Senha: </label>
              <input type='password' placeholder='Digite sua senha'></input>
          </form>
          <button className='button-form'>
          <a id='submit-entrar' href='#'>Entrar</a>
          </button>

          <p>Ainda não tem conta?</p>
          <button>
          <a id='criar-conta' href='#'>Registrar</a>
          </button>
        </div>
    </main>
  )
}

export default Login;
