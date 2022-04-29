import {Centro, Container, Left, Right} from "./styles";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
function Recuperar(){
    return(
        <Container>
           <Centro>
               <Left>
                   <h2>Bem-Vindo !</h2>
                   <p>Para ter acesso aos nossos serviços efetue seu Login.</p>
               </Left>
               <Right>
                   <h2>Recuperar Senha</h2>
                   <h3>Digite seu Email</h3>
                   <form>
                       <label>Email</label>
                       <div className="input-label">
                            <FaUserAlt/>
                            <input type="email"></input>
                       </div>
                        <button className="login-btn">Enviar</button>
                   </form>
                   <div className="cadastrar">
                    <Link to="/"><button className='underline'>Voltar ao Início</button></Link>
                   </div>
               </Right>
           </Centro>
        </Container>
    )
}

export default Recuperar;