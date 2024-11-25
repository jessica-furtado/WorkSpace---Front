import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Faculdade from './Pages/Faculdade'
import DpoLgpd from './Pages/DpoLgpd'
import Noticias from './Pages/Noticias'
import Inicial from './Pages/Inicial'
import Navbar from './Components/Navbar'
import VisualizaNoticia from './Pages/VisualizaNoticia'
import NoticiasAxios from './Pages/NoticiasAxios'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <br/>
    <Routes>
      <Route path='/' element={<Inicial />} />
      <Route path='/faculdade' element={<Faculdade />} />
      <Route path='/dpo' element={<DpoLgpd />} />
      <Route path='/noticias' element={<NoticiasAxios />} />
      <Route path= '/visualiza-noticia/:id' element={<VisualizaNoticia/>} />
    </Routes>

    </BrowserRouter>
  )
}

export default App