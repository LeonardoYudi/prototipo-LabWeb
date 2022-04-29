import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainPagina, Aside, Elementos, Right } from "./styles";
import api from "../../services/api";
import UserConfigs from "../UserConfigs";

function Pagina() {
  const navigate = useNavigate();

  const verificarLogin = async () => {
    if (!localStorage.getItem("token")) navigate("/login");
  };

  const logoutAux = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const sair = async () => {
    try {
      await api.post("/users/logout");
      logoutAux();
    } catch (error) {
      if (error.response.status === 401) {
        logoutAux();
      }
    }
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

  useEffect(() => {
    verificarLogin();
  });

  return (
    <MainPagina>
      <Aside>
        <Elementos>
          <span className="start">Usuário</span>
          <button>Perfil</button>
          <button className="sair" onClick={apagarConta}>
            Apagar conta
          </button>
          <span className="start">Conteúdo</span>
          <button>Calendário</button>
          <button>Add a Page</button>
          <button>Import background</button>
          <button className="sair" onClick={sair}>
            Sair
          </button>
        </Elementos>
      </Aside>
      <Right>
        <UserConfigs/>
      </Right>
    </MainPagina>
  );
}

export default Pagina;
