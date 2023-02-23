import '../Cadastro/indexCadastro.css'
import { Link, useNavigate } from 'react-router-dom'
import Message from  '../../Components/layout/Message/Message.js'
import { useState } from 'react'
import { cpf as validateCpf } from 'cpf-cnpj-validator';
import Configuracoes from '../Configuracoes-ADM/Config-ADM'

// busca no Banco de dados se já tem cadastro
async function verificarCPF(cpf) {
  
  const response = await fetch(`sua_api/cpf/${cpf}`);
  const data = await response.json();
  return data.existe;
}

//usa o validador de cpf
async function verificarCPFValido(cpf) {
  const valido = validateCpf(cpf);
  return  valido ;
}

function Cadastro() {
 
const [TypeMsg, setTypeMsg] = useState('');
const [Msg, setMsg] = useState('');
const [cpfValido, setCpfValido] = useState(false);
const navigate = useNavigate();

async function handleSubmit(event) {
  event.preventDefault();
  const cpf = event.target.cpf.value;

  // verifica se o CPF existe no banco 
  const cpfExiste = await verificarCPF(cpf);
  if (cpfExiste) {
    setTypeMsg('erro');
    setMsg('Seu CPF já possui cadastro!');
    return;
  }

  // verifica se o CPF é válido
  const cpfValido = await verificarCPFValido(cpf);
  if (!cpfValido) {
    setTypeMsg('erro');
    setMsg('CPF inválido!');
    return;
  }
 

  // navega para a tela de configurações se o CPF for válido e não estiver cadastrado
  navigate('/Configuracoes');
}
  return (
    <div className="principal-cadastro">
      <div className="container-cadastro">
        <h1>Cadastro de Usuário</h1>
        <form onSubmit={handleSubmit}>
          <label>CPF: </label>
          <input type="text" name="cpf" placeholder="Digite seu CPF" autoComplete="off" />
          <button className="button-form-cadastro" type="submit">
            Próximo
          </button>
        </form>
        <Message type={TypeMsg} message={Msg} />
      </div>
    </div>
  );
}

export default Cadastro;
