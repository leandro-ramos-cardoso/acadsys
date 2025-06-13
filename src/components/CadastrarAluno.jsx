import { React, useState } from 'react'
import { Button, Container, Form, Card, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CadastrarAluno = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    // const urlDoBackend = import.meta.env.VITE_BACKEND_URL;
    const urlDoBackend = "https://flask-api-alunos.onrender.com";


    // const urlDoBackend = "http://localhost:3000"
    // const urlDoBackend = "https://api.sheetbest.com/sheets/24400fab-1819-4a8f-95d9-5da2a3f95eee"


    const [nota1, setNota1] = useState("")
    const [nota2, setNota2] = useState("")
    const [nota3, setNota3] = useState("")
    const [nota4, setNota4] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        const dadosDoForm = {
    nome,
    email,
    nota1: parseFloat(nota1),
    nota2: parseFloat(nota2),
    nota3: parseFloat(nota3),
    nota4: parseFloat(nota4)
}

        try {
    const response = await axios.post("https://flask-api-alunos.onrender.com/alunos", dadosDoForm)

    toast.success("Aluno cadastrado com sucesso!", {
        style: { background: '#0d6efd', color: '#fff' }
    })

    handleReset()
} catch (error) {
    console.error("Erro ao cadastrar aluno:", error)

    // Se for erro de CORS ou rede
    if (error.code === "ERR_NETWORK") {
        toast.error("Erro de rede ou CORS: verifique se o backend está aceitando requisições.", {
            style: { background: '#dc3545', color: '#fff' }
        })
    } else {
        toast.error("Erro ao cadastrar aluno.", {
            style: { background: '#dc3545', color: '#fff' }
        })
    }
}}

    const handleReset = () => {
        setNome("")
        setEmail("")
        setNota1("")
        setNota2("")
        setNota3("")
        setNota4("")
    }

    return (
        <Container style={{marginTop:"-76px"}}>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 140px)' }}>
                <Card style={{ width: '100%', maxWidth: '600px' }} className="p-4 shadow">
                    <Card.Body>
                        <Card.Title className="text-center mb-4">
                            Cadastro de Alunos
                        </Card.Title>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    placeholder="Digite seu nome"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@email.com"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Form.Label>Nota 1:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={nota1}
                                            onChange={(e) => setNota1(e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Nota 2:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={nota2}
                                            onChange={(e) => setNota2(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Form.Label>Nota 3:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={nota3}
                                            onChange={(e) => setNota3(e.target.value)}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Nota 4:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={nota4}
                                            onChange={(e) => setNota4(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Row>
                                <Col xs={12} md={6}>
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">
                                            Cadastrar
                                        </Button>
                                    </div>


                                </Col>

                                <Col>
                                    <div className="d-grid">
                                        <Button variant="secondary" type="reset" onClick={handleReset}>
                                            Limpar
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </div>

            <ToastContainer
                position="top-center"
                style={{ marginTop: '100px' }}
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </Container>
    )
}

export default CadastrarAluno
