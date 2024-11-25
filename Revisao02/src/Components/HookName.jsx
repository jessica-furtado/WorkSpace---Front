import React from 'react'
import { useState } from 'react'

const HookName = () => {

    const [name] = useState("Jéssica");
    const [number, setNumber] = useState(1)

    console.log(name);
    
    const changerNumber = () => {
        setNumber(5)
    }

  return (
    <div>
        <h2>Meu nome é: {name} </h2>
        <p>Número: {number}</p>
        <button onClick={changerNumber}> Mudar Número! </button>
    </div>
  )
}

export default HookName