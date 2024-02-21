import BoxOpcao from "../components/boxOpcao";

function Home(){
  const opcoes = [
    {nome: "Recepção", link: "recepcao"},
    {nome: "Avaliação", link: "avaliacao"},
    {nome: "Relatório", link: "relatorio"},
  ]
  return(
    <div className="tela">
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

export default Home;