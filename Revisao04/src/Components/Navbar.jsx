import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link><br/>
        <Link to="/faculdade">Faculdade</Link><br/>
        <Link to="/dpo">Dpo</Link><br/>
        <Link to="/noticias">Noticias</Link><br/>
    </nav>
  )
}

export default Navbar