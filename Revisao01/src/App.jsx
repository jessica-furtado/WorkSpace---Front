import React from 'react'
import Adicao from './Components/Adicao'
import Subtracao from './Components/Subtracao'
import Divisao from './Components/Divisao'
import Multiplicacao from './Components/Multiplicacao'
import PrecisoEstudas from './Components/PrecisoEstudas'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={2}/>
      <Subtracao num1={2} num2={2}/>
      <Divisao num1={2} num2={2}/>
      <Multiplicacao num1={2} num2={2}/>
      <PrecisoEstudas nomeDaTecnologia={" Spring Security"}/>
    </div>
  )
}

export default App