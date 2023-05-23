import "../Cadastro/indexCadastro.css";
import { useNavigate } from "react-router-dom";
import Message from "../../Components/layout/Message/Message.js";
import { useState } from "react";
import { cpf, cpf as validateCpf } from "cpf-cnpj-validator";
import axios from "axios";

const ERR_CADASTRO_EXISTENTE = "Seu CPF já possui cadastro!";
const ERR_CPF_INVALIDO = "CPF inválido!";

async function verificarCPF(cpf) {
  return true;
  /*try {
    const response = await axios.post('http://localhost:5000/Login', { CPF: cpf });
    const data = response.data;
    return data.existe;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao verificar o CPF');
  }
  */
}

async function verificarCPFValido(cpf) {
  return true;
  //return validateCpf(cpf);
}

function Cadastro() {
  const [TypeMsg, setTypeMsg] = useState("");
  const [Msg, setMsg] = useState("");
  const navigate = useNavigate();

  const [Certo, setCerto] = useState(false);

  async function handleSubmit(cpfInput) {
    setTimeout(() => {
      setMsg(null);
      setTypeMsg(null);
    }, 3000);

    const cpf = cpfInput;

    const cpfExiste = await verificarCPF(cpf);
    const cpfValido = await verificarCPFValido(cpf);

    if (!cpfExiste && cpfValido) {
      setTypeMsg("erro");
      setMsg(ERR_CADASTRO_EXISTENTE);
      return;
    } else if (!cpfValido) {
      setTypeMsg("erro");
      setMsg(ERR_CPF_INVALIDO);
      return;
    } else {
      setCerto(true);
      const cpf_Cadastro = cpf;
     
    }
  }


  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handleCadastrar = async (event) => {
      event.preventDefault()
    //reseta valores da mensagem
    setTimeout(() => {
      setMsg(null);
      setTypeMsg(null);
    }, 3000);

    if (senha === confirmSenha) {
      try {
        const response = await axios.get('http://localhost:5000/Login', {
          cpf: cpf,
          senha: senha
        });
                    
        if (response.status === 200) {
          // cadastro feito
         
          navigate('/Login');
          alert("cadastro feito")
        } else if(response === null){
          alert("Erro ao cadastrar senha")
         
        }
      } catch (error) {
        console.error(error);
      }
    } else {
       setTypeMsg('erro');
        setMsg('As senhas não são iguais!');
    }
  };

  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [step, setStep] = useState(0);

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="swiper-slide">
            <img className="image-cadastro" src="1.svg" alt="" />
            <h2>Bem-vindo</h2>
            <h3>Vamos criar seu usuário</h3>

            <form onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(event.target.elements.cpfInput.value);
            }}>
              <label>CPF:</label>
              <input
                className="Cdt-input"
                type="text"
                id="cpf"
                name="cpfInput"
                placeholder="Digite seu CPF"
                autoComplete="off"
                minLength={10}
              />
              <button className="btn-verificar" type="submit">Verificar</button>
              <Message type={TypeMsg} message={Msg} />
              <button
                className="btn-cadastro"
                type="button"
                id="bt"
                disabled={!Certo}
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
            <h2>Quase lá</h2>
            <h3>Digite sua senha</h3>
            <form onSubmit={handleCadastrar}>
              <label>
                Senha:
                <input
                  className="Cdt-input"
                  type="password"
                  value={senha}
                  minLength={6}
                  onChange={(event) => setSenha(event.target.value)}
                />
              </label>
              <br />
              <label>
                Confirmar senha:
                <input
                  className="Cdt-input"
                  type="password"
                  value={confirmSenha}
                  minLength={6}
                  onChange={(event) => setConfirmSenha(event.target.value)}
                />
              </label>
              <br />
              <button type="submit">Cadastrar</button>
              <Message type={TypeMsg} message={Msg} />
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="principal-cadastro">
      <div className="card">
        <div className="swiper">{renderStep(step)}</div>
      </div>
    </div>
  );
}




export default Cadastro;
