import { React, useEffect, useState } from 'react'
import { Button, Container, Pagination, Spinner, Table } from 'react-bootstrap'
import axios from 'axios'
import { FaEdit, FaTrash } from 'react-icons/fa'


const ListarAluno = () => {
    const urlDoBackend = "http://localhost:3000"
    const [alunos, setAlunos] = useState([])
    const [carregando, setCarregando] = useState(true)

    const [paginaAtual, setPaginaAtual] = useState(1)
    const itensPorPagina = 12

    useEffect(() => {
        axios.get(`${urlDoBackend}/alunos`)
            .then(response => {
                setTimeout(() => {
                    setAlunos(response.data)
                    setCarregando(false)
                }, 1000)
            })
            .catch(error => {
                console.error("Houve um erro para obter a listagem de alunos: ", error)
                setCarregando(false)
            })
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
            <h1 className="mb-4">Listagem de alunos</h1>

            {carregando ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Carregando...</span>
                    </Spinner>
                </div>
            ) : (
                <>
                    <Table striped bordered hover responsive className="text-center align-middle">
                        <thead className="table-primary">
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Ações</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Nota 1</th>
                                <th>Nota 2</th>
                                <th>Nota 3</th>
                                <th>Nota 4</th>
                                <th>Média</th>
                                <th>Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunosPaginados.map(aluno => (
                                <tr key={aluno.id}>
                                    <td>
                                        <div className="d-flex gap-2 justify-content-center">
                                            <Button variant="primary">
                                                <FaEdit />
                                            </Button>
                                            <Button variant="danger">
                                                <FaTrash />
                                            </Button>
                                        </div>
                                    </td>
                                    {/* <td>{aluno.id}</td> */}
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.email}</td>
                                    <td>{aluno.nota1}</td>
                                    <td>{aluno.nota2}</td>
                                    <td>{aluno.nota3}</td>
                                    <td>{aluno.nota4}</td>
                                    <td>
                                        {(() => {
                                            const n1 = parseFloat(aluno.nota1)
                                            const n2 = parseFloat(aluno.nota2)
                                            const n3 = parseFloat(aluno.nota3)
                                            const n4 = parseFloat(aluno.nota4)
                                            const media = ((n1 + n2 + n3 + n4) / 4).toFixed(1)
                                            return media
                                        })()}
                                    </td>
                                    <td>
                                        {(() => {
                                            const n1 = parseFloat(aluno.nota1)
                                            const n2 = parseFloat(aluno.nota2)
                                            const n3 = parseFloat(aluno.nota3)
                                            const n4 = parseFloat(aluno.nota4)
                                            const media = (n1 + n2 + n3 + n4) / 4
                                            return <span style={{ color: media >= 7 ? 'green' : 'red', fontWeight: 'bold' }}>
                                                {media >= 7 ? 'Aprovado' : 'Reprovado'}
                                            </span>
                                        })()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

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
                </>
            )}
        </Container>
    )
}

export default ListarAluno
