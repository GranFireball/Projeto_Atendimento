import BoxOpcao from "../components/boxOpcao";
import {Link} from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";
function Recepcao(){
  const opcoes = [
    {nome: "Administrador", link: "admin"},
    {nome: "Cliente", descricao: "Essa é a descrição", link: "cliente"}
  ];

  return(
    <div className="tela">
      <Link to="../">
        <ArrowLeftCircle color="black"/>
      </Link>
      <header className="headerContainer">
        <h1>RECEPÇÃO</h1>
      </header>
      <Link to="espera" style={{textDecoration: "none"}}>
        <button className="botao" style={{marginBottom: 16}}>
          Lista de Chamadas
        </button>
      </Link>
      <main className="container">
        <div className="boxOpcoes">
          {opcoes.map((opcao) => {
            return(
              <BoxOpcao key={opcao.nome} item={opcao}/>
            ) 
          })}
        </div>
      </main>
    </div>
  ); 
}

export default Recepcao;