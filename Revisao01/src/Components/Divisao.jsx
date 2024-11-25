import React from 'react'

const Divisao = (props) => {
  return (
    <div>
        <h1>O resultado de Num1 / Num2 é: 
            {props.num1/props.num2}
        </h1>
    </div>
  )
}

export default Divisao