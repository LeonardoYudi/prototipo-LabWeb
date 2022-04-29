import { Configs ,Campos} from "./styles";



function UserConfigs(){
    return(
        <Configs>
            <h2>Configurações</h2>
            <Campos>
                <div>
                    <form>
                        <div className="inp">
                            <label>Digite a senha Atual:</label>
                            <input></input>
                        </div>
                        <div className="inp">
                            <label>Digite a nova senha:</label>
                            <input></input>
                        </div>
                        <div className="inp">
                            <label>Confirme a nova Atual:</label>
                            <input></input>
                        </div>
                    </form>
                    <button>Alterar senha</button>
                </div>
                <div className="apagar-C">
                    <button className="apagar" onClick>Apagar Conta</button>
                </div>
            </Campos>
        </Configs>

    )
}

export default UserConfigs;