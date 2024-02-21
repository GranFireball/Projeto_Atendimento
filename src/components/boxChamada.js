
function BoxChamada({setor}){
  return(
    <div className="boxChamada">
      <h2>Setor: {setor.nome}</h2>
      <h3>Última Chamada (senha): {setor.ultimaChamada}</h3>
      <h4>Guichê: {setor.guiche}</h4>
    </div>
  );
}

export default BoxChamada;