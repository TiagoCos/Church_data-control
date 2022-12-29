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
          <form action=''>
              <label for='email'>E-mail: </label>
              <input type='email' name='email' id='email' placehoder='Digite seu email' autoComplete='off'></input>
              <div class="campo">
                <label for="senioridade"><strong>Senioridade</strong></label>
                <select id="senioridade" required>
                  <option selected disabled value="">Selecione</option>
                  <option>Secretário</option>
                  <option>Tesoureiro</option>
                  <option>Adiministrador</option>
                </select>
               </div>

              <label for='password'>Senha</label>
              <input type='password'></input>
          </form>
        </div>
    </main>
  )
}

export default Login;
