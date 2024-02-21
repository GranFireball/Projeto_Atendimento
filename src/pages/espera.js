import { useContext } from "react";
import SistemaContext from "../context/sistemaContext";
import BoxChamada from "../components/boxChamada";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";
function Espera(){
  const sistema = useContext(SistemaContext);
  return(
    <div className="tela">
      <Link to="../">
        <ArrowLeftCircle color="black"/>
      </Link>
      <h1>Chamada</h1>
      <div className="boxChamadas">      
      {
        sistema.setores.map((setor) => {
          return <BoxChamada setor={setor}/>
        })
      }
      </div>

    </div>
  );
}

export default Espera;