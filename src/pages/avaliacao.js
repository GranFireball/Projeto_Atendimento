import { ArrowLeftCircle, CheckCircle, Star } from "lucide-react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SistemaContext from "../context/sistemaContext";
import BoxOpcao from "../components/boxOpcao";

function Avaliacao(){
  const sistema = useContext(SistemaContext);
  const [setorSelecionado, setSetorSelecionado] = useState();
  const [avaliado, setAvaliado] = useState(false);
  const [estrelas, setEstrelas] = useState();
  const navigate = useNavigate();
  return(
    <div className="tela">
      <Link to="../">
        <ArrowLeftCircle color="black"/>
      </Link>
      <header className="headerContainer">
        <h1>AVALIAÇÃO</h1>
      </header> 
      <main className="container">
      <h2>Escolha um dos setores:</h2>
        <div className="boxOpcoes">
          {sistema.setores.map((setor) => {
            return(
              <BoxOpcao key={setor.nome} item={setor} setSelecionado={setSetorSelecionado}/>
            )
          })}
        </div>
        <span>Selecionado: {setorSelecionado}</span>
        <div className="linha">
          <h3>Nota: </h3>
          <div className="boxAvaliacao">
          {sistema.setores[0].avaliacao.map((setor, index) => {
              return(
                <Star key={index} style={{cursor: "pointer"}} color={index <= estrelas ? "yellow" : "white"} onClick={() => setEstrelas(index)}/>
              )
            })}
          </div>
        </div>
        
        {(setorSelecionado && estrelas >= 0) &&
          <button className="botao" onClick={() => {
            sistema.avaliarSetor(setorSelecionado, estrelas);
            setAvaliado(true);
          }}>Avaliar</button>
        }
       
        <dialog open={avaliado}>
          <div className="coluna">
            <h4>Avaliação realizada com sucesso!</h4>
            <CheckCircle/>
            <button style={{marginTop: 16}} className="botao" onClick={() => {
              setAvaliado(false);
              navigate('../');
              }}>OK</button>
          </div>
        </dialog>
      </main>
    </div>
  );
}

export default Avaliacao;