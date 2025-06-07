import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHome, FaEdit, FaTrashAlt, FaUserPlus, FaList } from 'react-icons/fa'

const NavBar = () => {
    return (
        <Navbar variant="dark" style={{ backgroundColor: "#2c2f33" }}>
            <Container>
                {/* <Navbar.Brand as={Link} to="/">AcadSys</Navbar.Brand> */}
                <Navbar.Brand href="/">
                    <img
                        src="logo.png"
                        alt="Logo"
                        style={{
                            height: '140px',
                            width: 'auto',
                            border: 'none',
                            padding: 0,
                            margin: 0,
                            boxShadow: 'none',
                            display: 'inline-block',
                            verticalAlign: 'middle',
                        }}
                    />
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

                        <Nav.Link as={Link} to="/editar" className="d-flex align-items-center gap-1">
                            <FaEdit className="me-1" />
                            Editar
                        </Nav.Link>

                        <Nav.Link as={Link} to="/remover" className="d-flex align-items-center gap-1">
                            <FaTrashAlt className="me-1" />
                            Remover
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
