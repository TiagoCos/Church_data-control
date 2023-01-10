import '../Cadastro/indexCadastro.css'
import { Link } from 'react-router-dom'
import voltar from '../../assets/icons/60577.png'
import Message from  '../../Components/layout/Message/Message.js'

function Cadastro(){
    return(
      <div className='principal-cadastro'>
        <Link to='/Login' className='link-voltar'><img className='img-voltar' src={voltar}></img></Link>
        <div className='container-cadastro'>
            <h1>Cadastro de Usuário</h1>
              <form>
                <label id='label-cd'>CPF: </label>
                <input type='CPF'  placeholder='Digite seu CPF' autoComplete='off'></input>
                <label id='label-cd'>Senha:</label>
                <input type='senha' placeholder='Digite sua senha' autoComplete='off'></input>
                <input type='senha' placeholder='Confirme sua senha' autoComplete='off'></input>

                <button className='button-form-cadastro'>
                <a href='#'>Cadastrar</a>
                </button>
              </form>
              <Message msg='seu usuario foi cadastrado' type='valido' />
        </div>
      </div>
    )
}

export default Cadastro