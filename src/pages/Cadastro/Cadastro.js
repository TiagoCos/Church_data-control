import '../Cadastro/indexCadastro.css'
import { Link, useNavigate } from 'react-router-dom'
import Message from  '../../Components/layout/Message/Message.js'
import { useState } from 'react'
import { validate } from 'cpf-cnpj-validator';
import Configuracoes from '../Configuracoes-ADM/Config-ADM'

// busca no Banco de dados se já tem cadastro
async function verificarCPF(cpf) {
  const response = await fetch(`sua_api/cpf/${cpf}`);
  const data = await response.json();
  return data.existe;
}
//usa o validador de cpf
/*async function verificarCPFValido(cpf) {
  const valido = validate(cpf);
  return  valido ;
}
*/
function Cadastro() {
  const [cpfValido, setCpfValido] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const cpf = event.target.cpf.value;
    //ver se o cpf existe no banco 
    const cpfExiste = await verificarCPF(cpf);

    if (!cpfExiste) {
      //chama o validate
      const cpfValido = verificarCPF(cpf).existe;
      setCpfValido(cpfValido);
    
      if (cpfValido) {
        navigate('/Configuracoes');
      }
    }
  }


  return (
    <div className="principal-cadastro">
      <div className="container-cadastro">
        <h1>Cadastro de Usuário</h1>
        <form onSubmit={handleSubmit}>
          <label>CPF: </label>
          <input type="text" name="cpf" placeholder="Digite seu CPF" autoComplete="off" />
          <button className="button-form-cadastro" type="submit">
            Cadastrar
          </button>
        </form>
        {cpfValido === false && <Message type="error" message="CPF inválido." />}
      </div>
    </div>
  );
}

export default Cadastro;
