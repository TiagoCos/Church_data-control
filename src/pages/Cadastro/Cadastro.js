import "../Cadastro/indexCadastro.css";
import { useNavigate } from "react-router-dom";
import Message from "../../Components/layout/Message/Message.js";
import { useState } from "react";
import { cpf as validateCpf } from "cpf-cnpj-validator";

const ERR_CADASTRO_EXISTENTE = "Seu CPF já possui cadastro!";
const ERR_CPF_INVALIDO = "CPF inválido!";
// aqui ele busca no banco de dados se há algum casdastro ja feito
async function verificarCPF(cpf) {
  const response = await fetch(`sua_api/cpf/${cpf}`);
  const data = await response.json();
  return data.existe;
}
// chama o validador de cpf, para saber se o numero digitado é realmente um cpf valido
async function verificarCPFValido(cpf) {
  return validateCpf(cpf);
}

function Cadastro() {
  const [TypeMsg, setTypeMsg] = useState("");
  const [Msg, setMsg] = useState("");
  const navigate = useNavigate();

// função do form que valida os valores
  async function handleSubmit(event) {
    console.log('deu certo submit')
    setCerto(true);
   /* event.preventDefault();
    const { value: cpf } = event.target.cpf;

    const cpfExiste = await verificarCPF(cpf);
    const cpfValido = await verificarCPFValido(cpf);

    if (cpfExiste || !cpfValido) {
      setTypeMsg("erro");
      setMsg(cpfExiste ? ERR_CADASTRO_EXISTENTE : ERR_CPF_INVALIDO);
      return;
    } else {
      setCerto(true);
    }*/
  }

  const [length, setLength] = useState(false);
// um evento para saber se o numero do cpf está completo
  const handleLength = (event) => {
    const valor = event.target.value;
    if (valor.length === 11) {
      console.log('deu certo ')
      setLength(true);
    }
  };

  const [Certo, setCerto] = useState(false);
//passa de pagina no slid
  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handleRestart = () => {
    setStep(0);
    setCerto(false);
  };
// --------slid 1--------------------------------------------------------------
const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleCadastrar = (event) => {
    event.preventDefault();
    if (senha === confirmSenha) {
      fetch('/api/cadastrar-senha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senha: senha })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    } else {
      console.log('As senhas não conferem!');
    }
  }
  const [step, setStep] = useState(0);

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="swiper-slide">
            <img className="image-cadastro" src="1.svg" alt="" />
            <h2>Welcome</h2>
            <h3>Let's create your username</h3>
            <form onSubmit={handleSubmit}>
              <label>CPF: </label>
              <input
                type="text"
                className="cpf"
                id="cpf"
                placeholder="Digite seu CPF"
                autoComplete="off"
                maxLength={11}
                onInput={handleLength}
              />
            <button onClick={(event) => {
              event.preventDefault();
              handleSubmit();
              handleLength();
            }}>verificar</button>


              <Message type={TypeMsg} message={Msg} />
              <button
                className="btn-cadastro"
                type="button"
                id="bt"
                disabled={!Certo || !length}
                onClick={handleNext}
              >
                Próximo
              </button>
            </form>
          </div>
        );
      case 1:
        return (
          <div className="swiper-slide">
            <h2>Step 2</h2>
            <h3>Step 2 subtitle</h3>
          <form onSubmit={handleCadastrar}>
            <label>
              Senha:
              <input
                type="password"
                value={senha}
                onChange={event => setSenha(event.target.value)}
              />
            </label>
            <br />
            <label>
              Confirmar senha:
              <input
                type="password"
                value={confirmSenha}
                onChange={event => setConfirmSenha(event.target.value)}
              />
            </label>
            <br />
            <button type="submit">Cadastrar</button>
          </form>

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
