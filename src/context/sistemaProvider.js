import { useState } from "react";
import SistemaContext from "./sistemaContext";

function SistemaProvider({children}){
  const [setores, setSetores] = useState([
    {nome: "Imóveis", descricao: "Descrição imóveis", clientesEspera: 0, senha: 0, guiche: "0", ultimaChamada: 0, avaliacao: [0, 0, 0, 0, 0]},
    {nome: "Protesto", descricao: "Descrição protesto", clientesEspera: 0, senha: 0, guiche: "0", ultimaChamada: 0, avaliacao: [0, 0, 0, 0, 0]} 
  ])

  const [senhaCliente, setSenhaCliente] = useState();

  function gerarSenha(opcao){ 
    for(let setor in setores){
      if(setores[setor].nome === opcao){
        setSetores(()=> {
          setores[setor].senha += 1;
          setores[setor].clientesEspera += 1; 
        });
        setSetores(setores);
        setSenhaCliente(setores[setor].senha);
      }
    }
  }


  function chamarCliente(opcao, guiche){
    for(let setor in setores){
      if(setores[setor].nome === opcao){
        setSetores(() => {
          setores[setor].clientesEspera -= 1;
          setores[setor].ultimaChamada += 1;
          setores[setor].guiche = guiche;
        });
        setSetores(setores);
      }
    }
  }

  function avaliarSetor(opcao, nota){
    for(let setor in setores){
      if(setores[setor].nome === opcao){
        setSetores(() => {
          setores[setor].avaliacao[nota] += 1;
        });
        setSetores(setores);
      }
    }
  }

  return(
    <SistemaContext.Provider value={{setores, setSetores, gerarSenha, senhaCliente, chamarCliente, avaliarSetor}}>
      {children}
    </SistemaContext.Provider>
  )
}

export default SistemaProvider;