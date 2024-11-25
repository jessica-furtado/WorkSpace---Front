import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    const [sorteado, setSorteado] = useState()

    const [listaDeSorteados, setListaDeSorteados] = useState([])

    function sortearNumero() {
        if (listaDeSorteados.length<6) {
            let numSorteado = Math.floor(Math.random() * 60) + 1
            setSorteado(numSorteado)
            setListaDeSorteados([...listaDeSorteados, numSorteado])
        } else {
            alert("Já temos os 6 números sorteados!")
        }
    }

  return (
    <div>
        <h1>Sorteador da Mega em React :D </h1>
        <button onClick={sortearNumero}> Sortear Número </button>
        <h1>Último número sorteado: { sorteado}</h1>
        <h1>Sorteados: { listaDeSorteados.join(" - ")}</h1>
    </div>
  )
}

export default HookMegaSena