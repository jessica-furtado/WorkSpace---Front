import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicial from './Pages/Inicial'
import Faculdade from './Pages/Faculdade'
import DpoLgpd from './Pages/DpoLgpd'
import Noticias from './Pages/Noticias'
import Navbar from './Components/Navbar'
import VisualizaNoticia from './Pages/VisualizaNoticia'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <br/>
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/faculdade' element={<Faculdade />} />
        <Route path='/dpo' element={<DpoLgpd />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App