import { useContext, useState } from "react";
import BoxOpcao from "../components/boxOpcao";
import SistemaContext from "../context/sistemaContext";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

function Cliente(){
  const sistema = useContext(SistemaContext);
  const [setorSelecionado, setSetorSelecionado] = useState();
  const [senhaGerada, setSenhaGerada] = useState(false);
  const navigate = useNavigate();

  return(
    <div className="tela">
      <Link to="../">
        <ArrowLeftCircle color="black"/>
      </Link>
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
        {setorSelecionado &&  
          <u className="gerarSenha" onClick={() => {
            sistema.gerarSenha(setorSelecionado);
            setSenhaGerada(true);
          }}>Gerar Senha</u>
        }
       
        <dialog open={senhaGerada}>
          <div className="coluna">
            <span>Setor selecionado: {setorSelecionado}</span>
            <h4>Senha: {sistema.senhaCliente}</h4>
            <button className="botao" onClick={() => {
              setSenhaGerada(false);
              navigate('../');
              }}>OK</button>
          </div>
        </dialog>
      </main>
      
    </div>
  );
}

export default Cliente;