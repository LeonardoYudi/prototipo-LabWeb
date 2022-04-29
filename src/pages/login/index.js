import { Centro, Container, Left, Right } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import api from "../../services/api";

function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    senha: "",
  });

  const navigate = useNavigate();

  const updateField = ({ target }) => {
    const input = { ...userInput };
    input[target.name] = target.value.trim();
    setUserInput(input);
  };

  const login = async (e) => {
    
    e.preventDefault();
    const resp = await api.post("/users/login", userInput);
    localStorage.setItem("token", resp.data?.token);
    navigate("/pagina");
    
  };

  return (
    <Container>
      <Centro>
        <Left>
          <h2>Bem-Vindo !</h2>
          <p>Para ter acesso aos nossos serviços efetue seu Login.</p>
        </Left>
        <Right>
          <h2>Login</h2>
          <h3>Entre usando e-mail e senha</h3>
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
            <div className="password">
              <button>Esqueceu sua senha ?</button>
            </div>
            <button className="login-btn" onClick={login}>
              Login
            </button>
          </form>
          <div className="cadastrar">
            <p>Não possui conta ?</p>
            <Link to="/cadastro">
              <button className="underline">Cadastrar-se</button>
            </Link>
          </div>
        </Right>
      </Centro>
    </Container>
  );
}

export default Login;
