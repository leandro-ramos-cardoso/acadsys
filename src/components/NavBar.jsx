import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHome, FaTrashAlt, FaUserPlus, FaList, FaFileAlt, FaPhone } from 'react-icons/fa'

const NavBar = () => {
    return (
        <Navbar className="p-4 mb-5" expand="lg" variant="dark" style={{ backgroundColor: "#2c2f33" }}>
            <Container fluid>
                <Navbar.Brand href="/" className="me-5">
                    <span style={{fontSize:"2rem"}}>
                        ACADSYS
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-4">

                        <Nav.Link as={Link} to="/" className="d-flex align-items-center gap-1"
                            style={{fontSize:"1.2rem"}}
                        >
                            <FaHome className="me-1" />
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/cadastro" className="d-flex align-items-center gap-1"
                            style={{fontSize:"1.2rem"}}
                        >
                            <FaUserPlus className="me-1" />
                            Cadastrar
                        </Nav.Link>

                        <Nav.Link as={Link} to="/listar" className="d-flex align-items-center gap-1"
                            style={{fontSize:"1.2rem"}}
                        >
                            <FaList className="me-1" />
                            Listar
                        </Nav.Link>

                        <Nav.Link as={Link} to="/documentos" className="d-flex align-items-center gap-1"
                            style={{fontSize:"1.2rem"}}
                        >
                            <FaFileAlt className="me-1" />
                            Documentos
                        </Nav.Link>

                        <Nav.Link as={Link} to="/contato" className="d-flex align-items-center gap-1"
                            style={{fontSize:"1.2rem"}}
                        >
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
