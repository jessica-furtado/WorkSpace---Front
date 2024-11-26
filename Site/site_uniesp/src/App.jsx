import { Container, CssBaseline } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import BannerAd from './Components/BannerAd'
import Inicial from './Pages/Inicial'
import Faculdade from './Pages/Faculdade'
import DpoLgpd from './Pages/DpoLgpd'
import Noticias from './Pages/Noticias'
import VisualizaNoticia from './Pages/VisualizaNoticia'
import AdminNoticias from './Pages/Admin/AdminNoticias'
import CadastroNoticia from './Pages/Admin/CadastroNoticias'
import EditarNoticia from './Pages/Admin/EditarNoticia.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Container maxWidth='lg' sx={{ backgroundColor:'#f7f7f7', minHeight: '100vh', padding: '16px', borderRadius: '8px' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2} sx={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: 1, }}>
          <Navbar />
        </Box>

        <BannerAd />

        <Box mt={4}>
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/a-faculdade" element={<Faculdade />} />
            <Route path="/dpo-lgpd" element={<DpoLgpd />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/visualiza-noticia/:id" element={<VisualizaNoticia />} />
            <Route path="/admin-noticias" element={<AdminNoticias />} />
            <Route path="/cadastrar-noticia" element={<CadastroNoticia />} />
            <Route path="/editar-noticia/:id" element={<EditarNoticia />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App