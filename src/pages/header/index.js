import { Link } from "react-router-dom";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <h1>
        <span>Plan</span>
        <span className="blue">ner</span>
      </h1>
      <nav>
        <Link to="/">
          <button className="underline">Inicio</button>
        </Link>
        <button className="underline">Documentação</button>
        <button className="underline">Recursos</button>

        <Link to="/pagina">
          <button className="underline">Pagina</button>
        </Link>

        <Link to="/recuperar">
          <button className="underline">Recuperar</button>
        </Link>
        <Link to="/cadastro">
          <button className="underline">Cadastrar</button>
        </Link>
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      </nav>
    </Container>
  );
}

export default Header;
