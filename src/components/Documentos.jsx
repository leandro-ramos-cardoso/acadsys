import { React, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import jsPDF from 'jspdf'

const Documentos = () => {

    const [nome, setNome] = useState("")
    const [turma, setTurma] = useState("")

    const gerarPDF = () => {
        const doc = new jsPDF()

        doc.addImage("logoAzul.png", "PNG", 20, 10, 40, 20)

        const texto = `
            
            Declaração de Matricula

            Declaramos para os devidos fins que ${nome} esta regularmente matriculado(a)
            na turma ${turma}.

            João Pessoa, ${new Date().toLocaleDateString()}
        `

        doc.setFontSize(14)
        doc.text(texto, 20, 30)
        doc.save(`declaracao-${nome}.pdf`)
    }

    return (
        <Container>
            <h1>Solicite aqui sua declaração</h1>
            <Form>
                <Form.Group className="mt-3 mb-3" controlId="nomeDoc">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                        type="text"
                        value={nome}
                        onChange={(e) => (setNome(e.target.value))}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="turmaDoc">
                    <Form.Label>Turma:</Form.Label>
                    <Form.Control
                        type="text"
                        value={turma}
                        onChange={(e) => (setTurma(e.target.value))}
                        required
                    />
                </Form.Group>

                <Button className="mt-4" onClick={gerarPDF}>
                    Gerar PDF
                </Button>
            </Form>
        </Container>
    )
}

export default Documentos