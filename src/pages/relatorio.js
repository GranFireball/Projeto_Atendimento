import { ArrowLeftCircle } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SistemaContext from "../context/sistemaContext";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

function Relatorio(){
  const sistema = useContext(SistemaContext);
  const tituloDocumento = [
    {
      text: "Relatório",
      fontSize: 24,
      bold: true,
      alignment: "center"
    }
  ]

  const conteudoDocumento = [
    {
      text: "Clientes",
      fontSize: 14,
      bold: true,
      margin: [20, 20, 0, 10]
    },
    {
      text: "Total " + sistema.setores[0].nome + ": " + sistema.setores[0].senha + " senhas",
      fontSize: 12,
      margin: [20, 5, 0, 0]
    },
    {
      text: "Total " + sistema.setores[1].nome + ": " + sistema.setores[1].senha + " senhas",
      fontSize: 12,
      margin: [20, 5, 0, 0]
    },
    {
      text: "Avaliações",
      fontSize: 14,
      bold: true,
      margin: [20, 40, 0, 10]
    },
    {
      text: "(" + sistema.setores[0].nome + ")",
      fontSize: 14,
      margin: [20, 30, 0, 0]
    },
    {
      text: "1 estrela  : " + sistema.setores[0].avaliacao[0],
      fontSize: 12,
      margin: [100, -50, 0, 5]
    },
    {
      text: "2 estrelas: " + sistema.setores[0].avaliacao[1],
      fontSize: 12,
      margin: [100, 0, 0, 5]
    },
    {
      text: "3 estrelas: " + sistema.setores[0].avaliacao[2],
      fontSize: 12,
      margin: [100, 0, 0, 5]
    },
    {
      text: "4 estrelas: " + sistema.setores[0].avaliacao[3],
      fontSize: 12,
      margin: [100, 0, 0, 5]
    },
    {
      text: "5 estrelas: " + sistema.setores[0].avaliacao[4],
      fontSize: 12,
      margin: [100, 0, 0, 5]
    },
    {
      text: "(" + sistema.setores[1].nome + ")",
      fontSize: 14,
      margin: [20, 60, 0, 0]
    },
    {
      text: "1 estrela  : " + sistema.setores[1].avaliacao[0],
      fontSize: 12,
      margin: [100, -50, 0, 5]
    },
    {
      text: "2 estrelas: " + sistema.setores[1].avaliacao[1],
      fontSize: 12,
      margin: [100, 0, 0, 5]
    },
    {
      text: "3 estrelas: " + sistema.setores[1].avaliacao[2],
      fontSize: 12,
      margin: [100, 0, 0, 5]
    },
    {
      text: "4 estrelas: " + sistema.setores[1].avaliacao[3],
      fontSize: 12,
      margin: [100, 0, 0, 5]
    },
    {
      text: "5 estrelas: " + sistema.setores[1].avaliacao[4],
      fontSize: 12,
      margin: [100, 0, 0, 5]
    }
  ]
  const definicoesDocumento = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],
    header: [tituloDocumento],
    content: [conteudoDocumento]
  }
  function gerarPdf(){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    
    pdfMake.createPdf(definicoesDocumento).download("relatorio.pdf");
  }
  return(
    <div className="tela">
      <div style={{justifyContent: "space-between"}} className="linha">
      <Link to="../">
        <ArrowLeftCircle color="black"/>
      </Link>
      <button className="botao" onClick={() => gerarPdf()} >Gerar PDF</button>
      </div>

      <header className="headerContainer">
        <h1>RELATÓRIO</h1>
      </header> 
      <main style={{alignItems: "self-start"}} className="container">
        <span><strong>Clientes</strong></span>
        {sistema.setores.map((setor) => {
            return(
              <span key={setor.nome}>{"Total " + setor.nome + ": " + setor.senha + " senhas"}</span>
            )
          })}
        <span style={{marginTop: 40}}><strong>Avaliações</strong></span>
        {sistema.setores.map((setor, indexSetor) => {
            return(
              <div key={indexSetor} className="linha">
                <span>({setor.nome})</span>
                <div className="coluna">
                  {sistema.setores[indexSetor].avaliacao.map((setor, indexNota) => {
                    return(
                      <span key={indexNota}>{indexNota+1} {indexNota+1 === 1 ? " estrela " : "estrelas"}: {sistema.setores[indexSetor].avaliacao[indexNota]}</span>
                    )
                  })}
                </div>

                
              </div>
            )
          })}
      </main>
    </div>
  );
}

export default Relatorio;