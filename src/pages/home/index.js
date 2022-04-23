
import { MainHome } from './styles';
import Foto from "../image/not.jpg"
import { Link } from "react-router-dom";
function Home(){

    return(   
        <MainHome>
            <div>
                <div className='centro'>
                    <h2>Gerencie aqui seu Workspace</h2>
                    <h3>Rotina, calendário e agenda tudo no navegador - com o Planner</h3>
                    <Link to="/cadastro"><button>Experimente Planner de graça</button></Link>
                </div>
            </div>
            <div className='right'>
                <img src={Foto} alt="img"></img>
            </div>
        </MainHome>       
    )
}


export default Home;