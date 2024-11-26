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
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App