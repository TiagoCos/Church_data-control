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
          <div className='login-box'>
            <input type='text' className='btn-email' placehoder='digite seu email'></input>
            <input type='password'className='btn-senha' placehoder='digite seu senha'></input>
            <input type='submit' className='btn-login'></input>
          </div>
        </div>
    </main>
  )
}

export default Login;
