import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RedesSociais from './RedesSociais';


const Footer = () => {
    return (
        <div className="">
            <footer className="text-white mt-auto py-3" style={{backgroundColor: "#2c2f33", borderTop: "3px solid #42a5f5", height:"150px"}}>
            <Container className="text-center mb-5 fs-5" style={{fontSize:"30px"}}>
                <small>&copy; {new Date().getFullYear()} Acadsys. Todos os direitos reservados.</small>
            </Container>

            <RedesSociais />
            
        </footer>
        </div>
    )
}

export default Footer
