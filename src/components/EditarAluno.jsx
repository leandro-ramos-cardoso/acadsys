import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import dotenv from 'dotenv';
dotenv.config();

const EditarAluno = ({ id, onSucesso }) => {
    const [form, setForm] = useState({
        nome: "", email: "", nota1: "", nota2: "", nota3: "", nota4: ""});

    // const urlDoBackend = "http://localhost:3000";
    const urlDoBackend = process.env.urlDoBackend;

    useEffect(() => {
        axios.get(`${urlDoBackend}/alunos/${id}`)
            .then(res => setForm(res.data))
            .catch(err => console.error('Erro ao buscar aluno:', err));
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${urlDoBackend}/alunos/${id}`, form);
            toast.success('Aluno atualizado com sucesso!');
            onSucesso();
        } catch (err) {
            console.error('Erro ao atualizar aluno:', err);
            toast.error('Erro ao atualizar aluno!');
        }
    };

    const handleReset = () => {
        setForm({
            nome: "", email: "", nota1: "", nota2: "", nota3: "", nota4: ""
        });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        required
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Col>
                        <Form.Label>Nota 1:</Form.Label>
                        <Form.Control
                            type="number"
                            name="nota1"
                            value={form.nota1}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Label>Nota 2:</Form.Label>
                        <Form.Control
                            type="number"
                            name="nota2"
                            value={form.nota2}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <Form.Label>Nota 3:</Form.Label>
                        <Form.Control
                            type="number"
                            name="nota3"
                            value={form.nota3}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Nota 4:</Form.Label>
                        <Form.Control
                            type="number"
                            name="nota4"
                            value={form.nota4}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                                Salvar Alterações
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-grid">
                            <Button variant="secondary" type="button" onClick={handleReset}>
                                Limpar
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
            <ToastContainer position="top-center" autoClose={3000} />
        </Container>
    );
};

export default EditarAluno;
