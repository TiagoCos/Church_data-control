import '../Cadastro/indexCadastro.css';
import { useNavigate } from 'react-router-dom';
import Message from '../../Components/layout/Message/Message.js';
import { useState } from 'react';
import { cpf as validateCpf } from 'cpf-cnpj-validator';

const ERR_CADASTRO_EXISTENTE = 'Seu CPF já possui cadastro!';
const ERR_CPF_INVALIDO = 'CPF inválido!';
// chama no banco de dados
async function verificarCPF(cpf) {
  const response = await fetch(`sua_api/cpf/${cpf}`);
  const data = await response.json();
  return data.existe;
}
//chama a função validadora de cpf
async function verificarCPFValido(cpf) {
  return validateCpf(cpf);
}

function Cadastro() {
  const [TypeMsg, setTypeMsg] = useState('');
  const [Msg, setMsg] = useState('');
  const navigate = useNavigate();
  // final de tudo, pra passar pra proxima pagina do slid
  const Certo = false;

  async function handleSubmit(event) {
    event.preventDefault();
    const { value: cpf } = event.target.cpf;

    const cpfExiste = await verificarCPF(cpf);
    const cpfValido = await verificarCPFValido(cpf);
    
    if (cpfExiste || !cpfValido) {
    Certo = true;
      setTypeMsg('erro');
      setMsg(cpfExiste ? ERR_CADASTRO_EXISTENTE : ERR_CPF_INVALIDO);
      return;
    }

    navigate('/proxima-pagina'); // Substitua "/proxima-pagina" pelo caminho da página que você deseja navegar
  }
//---------------------------------------------slides---------------------------------
const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

const handleNext = () => {
  setStep((step) => step + 1);
};

const handleRestart = () => {
  setStep(0);
  setUsername('');
};

const [step, setStep] = useState(0);

const renderStep = (step) => {
  switch (step) {
    case 0:
      return (
    <div className="swiper-slide">
      <img src="1.svg" alt="" />
        <h2>Welcome</h2>
          <h3>Let's create your username</h3>
            <form onSubmit={handleSubmit}>
          <label>CPF: </label>
          <input type="text" name="cpf" placeholder="Digite seu CPF" autoComplete="off"
           minLength={6} value={username}/>
        
        </form>
        <Message type={TypeMsg} message={Msg} />
        <button disabled={!username && Certo } type="button" onClick={handleNext}>
            Próximo
          </button>
        </div>
      );
    case 1:
      return (
        <div className="swiper-slide">
          <h2>Step 2</h2>
          <h3>Step 2 subtitle</h3>
          <button type="button" onClick={handleRestart} >
            Restart
          </button>
        </div>
      );
    default:
      return null;
  }
};


  return (
    <div className="principal-cadastro">
      <div className="container-cadastro">
      <div className="card">
        <div className="swiper">{renderStep(step)}</div>
      </div>
        
      </div>
    </div>
  );
}

export default Cadastro;
