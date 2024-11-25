import React from 'react'
import EstouConseguindoAprenderReact from './Components/EstouConseguindoAprenderReact'
import Aluno from './Components/Aluno'

const App = () => {
  return (
    <>
      <EstouConseguindoAprenderReact estouConseguindo={true} />

      {
        [{nome: "Jéssica", email: "jessica@gmail", curso: "Sistemas", media: 10},
          {nome: "Waldir", email: "waldira@gmail", curso: "Sistemas", media: 9},
          {nome: "Troyinha", email: "troyinha@gmail", curso: "Herdeiro", media: 5}
        ].map((aluno) => 
        <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>
      )
      }
    </>
  )
}

export default App