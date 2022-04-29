import { Centro, Container, Left, Right } from "./styles";

import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from "react";

import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [userInput, setUserInput] = useState({
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const navigate = useNavigate();

  const updateField = ({ target }) => {
    const input = { ...userInput };
    input[target.name] = target.value.trim();
    setUserInput(input);
  };

  const cadastrar = async (e) => {
    e.preventDefault();
    if (userInput.senha !== userInput.confirmarSenha) {
      alert("As senhas devem ser iguais");
      return;
    }

    const resp = await api.post("/users/cadastros", userInput);
    localStorage.setItem("token", resp.data?.token);
    navigate("/pagina");
  };

  return (
    <Container>
      <Centro>
        <Left>
          <h2>Bem-Vindo !</h2>
          <p>Para ter acesso aos nossos serviços efetue seu Cadastro.</p>
        </Left>
        <Right>
          <h2>Cadastro</h2>
          <h3>Cadastre-se usando e-mail e senha</h3>
          <form>
            <label>Email</label>
            <div className="input-label">
              <FaUserAlt />
              <input
                type="email"
                name="email"
                onChange={updateField}
                value={userInput.email}
                required
              ></input>
            </div>
            <label>Senha</label>
            <div className="input-label">
              <i>
                <FaLock />
              </i>
              <input
                type="password"
                name="senha"
                onChange={updateField}
                value={userInput.senha}
                required
              ></input>
            </div>
            <label>Confirmar senha</label>
            <div className="input-label">
              <i>
                <FaLock />
              </i>
              <input
                type="password"
                name="confirmarSenha"
                onChange={updateField}
                value={userInput.confirmarSenha}
                required
              ></input>
            </div>
            <button className="login-btn" onClick={cadastrar}>
              Cadastrar
            </button>
          </form>
        </Right>
      </Centro>
    </Container>
  );
}

export default Cadastro;
