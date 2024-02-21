import { useRef, useState, useContext } from "react";
import SistemaContext from "../context/sistemaContext";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";
function Admin(){
  const sistema = useContext(SistemaContext);
  const [permitido, setPermitido] = useState(false);
  const [atendimento, setAtendimento] = useState(false);
  const senhaAdmin = "123";
  const senhaAdminRef = useRef('');
  const setorRef = useRef();
  const guicheRef = useRef("");
  return(
    <div className="tela">
      <Link to="../">
        <ArrowLeftCircle color="black"/>
      </Link>
      {permitido === true ?
      <div className="container">
        <div className="coluna">
        <span><strong>Clientes na fila</strong></span>
            <div className="linha">
            {sistema.setores.map((setor) => {
              return(
                <span key={setor.nome}>{setor.nome}: {setor.clientesEspera}</span>
              )
            })}
            </div>
          </div>
          {
            atendimento === false ?
            <div className="container">
              <div style={{marginTop: 32}} className="linha">
              <label>Selecione o setor:</label>
              <select ref={setorRef}>
                {sistema.setores.map((setor, index) => {
                  return(
                    <option key={setor.nome} value={index}>{setor.nome}</option>
                  )
                })}
            
              </select>
              </div>
              <div className="linha">
                <label>Guichê:</label>
                <input type="text" placeholder="Digite o Guichê" ref={guicheRef} onChange={(e) => guicheRef.current.value = e.target.value}/>
              </div>
              <button className="botao" disabled={atendimento} onClick={() => {
                if(guicheRef.current.value !== ""){
                  if(sistema.setores[setorRef.current.value].clientesEspera > 0){
                    sistema.chamarCliente(sistema.setores[setorRef.current.value].nome, guicheRef.current.value);
                    setAtendimento(true);
                    guicheRef.current.value = "";
                  }
                  else{
                    alert("Sem Clientes");
                  }
                }
                else{
                  alert("Digite o número do Guichê");
                }
              }}>Chamar Cliente</button>
            </div>
            :
            <div className="coluna">
              <h4 style={{marginTop: 32}}>Cliente</h4>
              <span>Setor: {sistema.setores[setorRef.current.value].nome}</span>
              <span>Senha: {sistema.setores[setorRef.current.value].ultimaChamada}</span>
              <span>Guichê: {sistema.setores[setorRef.current.value].guiche}</span>
              <button className="botao" style={{marginTop: 16}} onClick={() => setAtendimento(false)}>Concluído</button>
            </div> 
          }
      </div>
      :
      <div className="linha">
        <label>Senha de Administrador: </label>
        <input style={{padding: 4}} type="password" value={senhaAdminRef.current.value} ref={senhaAdminRef}/>
        <button className="botao" onClick={() => {
          if(senhaAdmin === senhaAdminRef.current.value){
            setPermitido(true);
          }
          else{
            alert("Senha Incorreta");
          }
        }}>OK</button>
      </div>
      
    }
  </div>
  );
}

export default Admin;