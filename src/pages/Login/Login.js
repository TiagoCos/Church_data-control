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
          <h2 className='title-login'>Login</h2>
            <details>
              <summary>ADM</summary>
            </details>
          <div className='login-box'>
            <input type='email' className='btn-email' placehoder='digite seu email'></input>
            <input type='password'className='btn-senha' placehoder='digite seu senha'></input>
            <input type='submit' className='btn-login'></input>
          </div>
        </div>

    </main>
  )
}

export default Login;
