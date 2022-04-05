import {Centro, Container, Left, Right} from "./styles";

import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function Login(){
    return(
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
                            <FaUserAlt/>
                            <input type="email"></input>
                       </div>
                       <label>Senha</label>
                       <div className="input-label">
                            <i><FaLock/></i>
                            <input type="password"></input>
                       </div>
                        <div className="password">
                            <button>Esqueceu sua senha ?</button>
                        </div>
                        <button className="login-btn">Login</button>
                   </form>
               </Right>
           </Centro>
        </Container>
    )
}

export default Login;