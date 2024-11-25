import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      {
        [
          {nome: "João", email:"joao@gmail", curso: "Sistemas para Internet", media: "7"},
          {nome: "Maria", email:"maria@gmail", curso: "Sistemas da Informação", media: "8"},
          {nome: "Jose", email:"jose@gmail", curso: "Publicidade", media: "5"}
        ].map((aluno) =>
        <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>
        )
      }
    </div>
  )
}

export default App