import React from 'react'
import CadastrarAluno from './components/CadastrarAluno'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListarAluno from './components/ListarAluno'
import Footer from './components/Footer'
import CardsOperacoes from './components/CardsOperacoes'
import './index.css'
import EstruturaCarousel from './components/EstruturaCarousel'
import { Container } from 'react-bootstrap'
import DuvidasFrequentes from './components/DuvidasFrequentes'
import Footer2 from './components/Footer2'
import Conhecendo from './components/Conhecendo'
import Documentos from './components/Documentos'
import Contato from './components/Contato'


const Home = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Container fluid className="text-center mt-5">
      <EstruturaCarousel />
      {/* <img src="logo.svg" alt="" width="600px" style={{marginBottom:"100px", marginTop:"50px"}} /> */}
      <CardsOperacoes />
      <Conhecendo />
      {/* <Endereco /> */}
      <DuvidasFrequentes />
    </Container>
    <Footer2 />
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
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/contato" element={<Contato /> } />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
