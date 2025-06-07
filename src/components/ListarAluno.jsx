import { React, useEffect, useState } from 'react'
import { Container, ListGroup, Pagination } from 'react-bootstrap'
import axios from 'axios'

const ListarAluno = () => {

    const urlDoBackend = "http://localhost:3000"
    const [alunos, setAlunos] = useState([])

    const [paginaAtual, setPaginaAtual] = useState(1)
    const itensPorPagina = 12

    useEffect(() => {
        axios.get(`${urlDoBackend}/alunos`)
            .then(response => setAlunos(response.data))
            .catch(error => console.error("Houve um erro para obter a listagem de alunos: ", error))
    }, [])

    const totalPaginas = Math.ceil(alunos.length / itensPorPagina)

    const alunosPaginados = alunos.slice(
        (paginaAtual - 1) * itensPorPagina,
        paginaAtual * itensPorPagina
    )

    const handlePaginaChange = (numero) => {
        setPaginaAtual(numero)
    }

    return (
        <Container className="mt-4">
            <h1 className="mb-4">
                Listagem de alunos
            </h1>

            <ListGroup>
                <ListGroup.Item className="d-flex fw-bold bg-primary text-white text-center">
                    <div className="flex-fill border-end pe-2">ID</div>
                    <div className="flex-fill border-end pe-2">Nome</div>
                    <div className="flex-fill border-end pe-2">Email</div>
                    <div className="flex-fill border-end pe-2">Nota 1</div>
                    <div className="flex-fill border-end pe-2">Nota 2</div>
                    <div className="flex-fill border-end pe-2">Nota 3</div>
                    <div className="flex-fill">Nota 4</div>
                    {/* <div className="flex-fill">Média</div>
                <div className="flex-fill">Situação</div> */}
                </ListGroup.Item>

                {alunosPaginados.map(aluno => (
                    <ListGroup.Item key={aluno.id} className="d-flex text-center">
                        <div className="flex-fill">{aluno.id}</div>
                        <div className="flex-fill">{aluno.nome}</div>
                        <div className="flex-fill">{aluno.email}</div>
                        <div className="flex-fill">{aluno.nota1}</div>
                        <div className="flex-fill">{aluno.nota2}</div>
                        <div className="flex-fill">{aluno.nota3}</div>
                        <div className="flex-fill">{aluno.nota4}</div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Pagination className="justify-content-center mt-4">
                <Pagination.First onClick={() => setPaginaAtual(1)} disabled={paginaAtual === 1} />
                <Pagination.Prev onClick={() => setPaginaAtual(p => Math.max(p - 1, 1))} disabled={paginaAtual === 1} />

                {[...Array(totalPaginas)].map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={paginaAtual === index + 1}
                        onClick={() => handlePaginaChange(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}

                <Pagination.Next onClick={() => setPaginaAtual(p => Math.min(p + 1, totalPaginas))} disabled={paginaAtual === totalPaginas} />
                <Pagination.Last onClick={() => setPaginaAtual(totalPaginas)} disabled={paginaAtual === totalPaginas} />
            </Pagination>
        </Container>
    )
}

export default ListarAluno