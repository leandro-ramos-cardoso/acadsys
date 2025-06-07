import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="">
            <footer className="text-white mt-auto py-3" 
            style={{
                backgroundColor: "#2c2f33", 
                height:"70px"
            }}>
            <Container className="text-center mb-5 fs-5" style={{fontSize:"30px"}}>
                <small>&copy; {new Date().getFullYear()} Acadsys. Todos os direitos reservados.</small>
            </Container>     
        </footer>
        </div>
    )
}

export default Footer
