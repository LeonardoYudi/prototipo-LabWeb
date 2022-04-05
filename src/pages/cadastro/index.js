import {Centro, Container, Left, Right} from "./styles";

import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function Cadastro(){
    return(
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
                            <FaUserAlt/>
                            <input type="email"></input>
                       </div>
                       <label>Senha</label>
                       <div className="input-label">
                            <i><FaLock/></i>
                            <input type="password"></input>
                       </div>
                       <label>Confirmar senha</label>
                       <div className="input-label">
                            <i><FaLock/></i>
                            <input type="password"></input>
                       </div>
                        <button className="login-btn">Cadastrar</button>
                   </form>
               </Right>
           </Centro>
        </Container>
    )
}

export default Cadastro;