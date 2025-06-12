import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaUser, FaList, FaChartLine, FaInfoCircle } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CardsOperacoes = () => {
    return (
        <Container className="mb-5">
            <h1 className="d-flex flex-column align-items-center"
            style={{marginBottom:"6rem"}}>Acompanhe Nossos Números</h1>
            <Row className="justify-content-center g-5">
                <Col xs={12} md={4} lg={3} className="d-flex justify-content-center">
                    <div className="card text-bg-primary mb-3" style={{ width: '15rem', height: "28vh", cursor: 'pointer', borderRadius: '20px' }}>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-1 mt-3" style={{fontSize:"25px"}}>
                                Total de alunos
                            </h5>

                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ height: '200px' }}
                            >
                                <FaUser size={100} color="#fff" />
                            </div>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={4} lg={3} className="d-flex justify-content-center">
                    <div className="card text-bg-success mb-3" style={{ width: '15rem', height: "28vh", cursor: 'pointer', borderRadius: '20px' }}>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-1 mt-3" style={{fontSize:"25px"}}>
                                Média Geral
                            </h5>

                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ height: '200px' }}
                            >
                                <FaChartLine size={100} color="#fff" />
                            </div>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={4} lg={3} className="d-flex justify-content-center">
                    <div
                        onClick={() =>
                            toast.success("Sobre a Cadsys", {
                                style: { background: '#0d6efd', color: '#fff' }
                            })
                        }
                        className="card text-white mb-3"
                        style={{
                            width: '15rem',
                            height: '28vh',
                            cursor: 'pointer',
                            borderRadius: '20px',
                            backgroundColor: '#6f42c1'
                        }}
                    >
                        <div className="card-body text-center">
                            <h5 className="card-title mb-1 mt-3" style={{fontSize:"25px"}}>
                                Sobre
                            </h5>
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ height: '200px' }}
                            >
                                <FaInfoCircle size={100} color="#fff" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <ToastContainer
                position="top-center"
                style={{ marginTop: '100px' }}
                autoClose={4000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </Container>
    )
}

export default CardsOperacoes
