import { useNavigate } from "react-router-dom";

function BoxOpcao({item, setSelecionado}){
  const navigate = useNavigate();
  return(
    <div className="boxOpcao" onClick={() => item.link ? navigate(item.link) : setSelecionado(item.nome)}>
      <div className="boxTitulo">
        <h3>{item.nome}</h3>
      </div>
      {
        item.descricao &&
        <span>{item.descricao}</span>
      }
    </div>
  );
}

export default BoxOpcao;