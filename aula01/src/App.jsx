import React from 'react'
import Adicao from './Components/Adicao'
import Multiplicacao from './Components/Multiplicacao'
import Subtracao from './Components/Subtracao'
import Divisao from './Components/Divisao'
import PrecisoEstudar from './Components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2= {2}/>
      <Multiplicacao num1={2} num2= {2}/>
      <Subtracao num1={2} num2= {2}/>
      <Divisao num1={2} num2= {2}/>
      <PrecisoEstudar nomeDaTecnologia={"React"}/>
    </div>
  )
}

export default App