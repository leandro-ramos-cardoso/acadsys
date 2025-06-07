import React from 'react'
import CadastrarAluno from './components/CadastrarAluno'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListarAluno from './components/ListarAluno'
import Footer from './components/Footer'
import CardsOperacoes from './components/CardsOperacoes'
import './index.css'
import EstruturaCarousel from './components/EstruturaCarousel'

const Home = () => (
  <div className="text-center mt-5">
    <EstruturaCarousel />

    <img src="logoMain.png" className="mx-auto d-block mb-5" style={{ maxWidth: '350px', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseOut={e => e.currentTarget.style.transform = "scale(1)"} />
    <CardsOperacoes />
  </div>
)

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <NavBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<CadastrarAluno />} />
            <Route path="/listar" element={<ListarAluno />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
