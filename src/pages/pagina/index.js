import { MainPagina , Aside, Elementos, Right} from "./styles";

function Pagina(){
   return(
       <MainPagina>
          <Aside>
              <Elementos>
                <span className="start">Pefil</span>
                <button>UserName</button>
                <button className="sair">Apagar conta</button>
                <span className="start">Conteúdo</span>
                <button>Calendário</button>
                <button>Add a Page</button>
                <button>Import background</button>
                <button className="sair">Sair</button>
              </Elementos>
          </Aside>
          <Right>
            <h2>Você ainda não Adicionou um página</h2>
            <button>Adicionar Pagina</button>
          </Right>
       </MainPagina> 
   )                                                                                                                                                                                                                                                                                                                                                                                                                     
}

export default Pagina;