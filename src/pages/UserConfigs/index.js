import { Configs, Campos } from "./styles";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UserConfigs() {
  const [passInput, setPassInput] = useState({
    senhaAtual: "",
    novaSenha: "",
    confirmSenha: "",
  });

  const navigate = useNavigate();

  const updateField = ({ target }) => {
    const input = { ...passInput };
    input[target.name] = target.value.trim();
    setPassInput(input);
  };

  const logoutAux = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const apagarConta = async () => {
    const confirmation = window.confirm("Deseja realmente apagar sua conta?");

    if (confirmation === true) {
      try {
        await api.delete("/users");
        logoutAux();
      } catch (error) {
        if (error.response.status === 401) logoutAux();
      }
    }
  };

  const alterarSenha = async (e) => {
    e.preventDefault();

    if (passInput.senhaAtual === "" || passInput.novaSenha === "" || passInput.confirmSenha === "") {
      alert("Preencha todos os campos");
      return;
    }

    if (passInput.novaSenha !== passInput.confirmSenha) {
      alert("As senhas devem ser iguais");
      return;
    }

    try {
      await api.post("/users/senhas", passInput);
      alert("Senha alterada com sucesso!");
    } catch (error) {
      alert("Ops! Não foi possível alterar a senha");
    }
  };

  return (
    <Configs>
      <h2>Configurações</h2>
      <Campos>
        <div>
          <form>
            <div className="inp">
              <label>Digite a senha Atual:</label>
              <input
                type="password"
                name="senhaAtual"
                onChange={updateField}
                value={passInput.senhaAtual}
                required
              ></input>
            </div>
            <div className="inp">
              <label>Digite a nova senha:</label>
              <input
                type="password"
                name="novaSenha"
                onChange={updateField}
                value={passInput.novaSenha}
                required
              ></input>
            </div>
            <div className="inp">
              <label>Confirme a nova Atual:</label>
              <input
                type="password"
                name="confirmSenha"
                onChange={updateField}
                value={passInput.confirmSenha}
                required
              ></input>
            </div>
            <button onClick={alterarSenha}>Alterar senha</button>
          </form>
        </div>
        <div className="apagar-C">
          <button className="apagar" onClick={apagarConta}>
            Apagar Conta
          </button>
        </div>
      </Campos>
    </Configs>
  );
}

export default UserConfigs;
