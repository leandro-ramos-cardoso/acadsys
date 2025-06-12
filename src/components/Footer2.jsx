import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RedesSociais from './RedesSociais';

const Footer2 = () => {
    return (
        <div style={{ backgroundColor: "#e2e1e1", padding: "40px 20px", fontSize: "18px", marginTop:"6rem"}}>
            <Container fluid>
                <Row className="gy-4">
                    <Col xs={12} md={4} className="text-center text-md-start">
                        <img src="logoAzul.png" alt="Logo Acadsys" width={300}
                        style={{marginLeft:"20px", marginTop:"30px"}} />
                    </Col>

                    <Col xs={12} md={4}>
                        <p><strong>Endereço</strong><br />
                            Rua Exemplo, 123 - João Pessoa - PB</p>
                        <p><strong>Telefone</strong><br />
                            (83) 1234-5678</p>
                        <p><strong>Contato</strong><br />
                            contato@acadys.edu.br</p>
                    </Col>

                    <Col xs={12} md={4}>
                        <p>Sobre nós</p>
                        <p>Cursos</p>
                        <p>Contato</p>
                        <Row className="text-center text-md-start">
                            <div>
                                <br/>
                                <RedesSociais />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer2
