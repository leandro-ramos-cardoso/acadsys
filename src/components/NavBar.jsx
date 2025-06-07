import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHome, FaTrashAlt, FaUserPlus, FaList, FaFileAlt, FaPhone } from 'react-icons/fa'

const NavBar = () => {
    return (
        <Navbar className="p-4 mb-5" expand="lg" variant="dark" style={{ backgroundColor: "#2c2f33" }}>
            <Container>
                <Navbar.Brand href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 320 80" fill="none">
                        <rect width="320" height="80" fill="none" />
                        <g transform="scale(1.3) translate(-10, -10)">
                            <path d="M40 20C35 15 25 15 20 20V60C25 55 35 55 40 60V20Z" fill="#FFFFFF" />
                            <path d="M40 20C45 15 55 15 60 20V60C55 55 45 55 40 60V20Z" fill="#FFFFFF" />
                        </g>
                        <text x="80" y="54" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="40" font-weight="bold">
                            ACADSYS
                        </text>
                    </svg>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-4">

                        <Nav.Link as={Link} to="/" className="d-flex align-items-center gap-1">
                            <FaHome className="me-1" />
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/cadastro" className="d-flex align-items-center gap-1">
                            <FaUserPlus className="me-1" />
                            Cadastrar
                        </Nav.Link>

                        <Nav.Link as={Link} to="/listar" className="d-flex align-items-center gap-1">
                            <FaList className="me-1" />
                            Listar
                        </Nav.Link>

                        <Nav.Link as={Link} to="/documentos" className="d-flex align-items-center gap-1">
                            <FaFileAlt className="me-1" />
                            Documentos
                        </Nav.Link>

                        <Nav.Link as={Link} to="/remover" className="d-flex align-items-center gap-1">
                            <FaPhone className="me-1" />
                            Contato
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
