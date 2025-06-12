import { React, useEffect, useState } from 'react'
import { Button, Container, Pagination, Spinner, Table, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { FaEdit, FaTrash, FaFileExcel } from 'react-icons/fa'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import Swal from 'sweetalert2'
import EditarAluno from './EditarAluno';
import { Modal } from 'react-bootstrap';


const ExcluirAluno = async (id) => {
    // const urlDoBackend = "http://localhost:3000"
    const urlDoBackend = import.meta.env.VITE_BACKEND_URL;

    try {
        const result = await Swal.fire({
            title: 'Você tem certeza?',
            text: "Você não poderá reverter esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'btn btn-primary me-2',
                cancelButton: 'btn btn-danger',
                title: 'fw-semibold fs-4',
                popup: 'p-4 rounded',
                actions: 'justify-content-center gap-2'
            },
            buttonsStyling: false
        })

        if (result.isConfirmed) {
            await axios.delete(`${urlDoBackend}/alunos/${id}`)
            Swal.fire
                ({
                    title: 'Deletado!',
                    text: 'O aluno foi deletado com sucesso.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: 'btn btn-success',
                        title: 'fw-semibold fs-4',
                        popup: 'p-4 rounded'
                    },
                    buttonsStyling: false
                })
            return true
        }
        return false
    } catch (error) {
        console.error("Houve um erro ao deletar o aluno: ", error)
        Swal.fire(
            'Erro',
            'Houve um erro ao tentar deletar o aluno. Por favor, tente novamente.',
            'error'
        )
        return false
    }
}

const ListarAluno = () => {

    // const urlDoBackend = "https://api.sheetbest.com/sheets/24400fab-1819-4a8f-95d9-5da2a3f95eee"
    // const urlDoBackend = "http://localhost:3000"
    const urlDoBackend = import.meta.env.VITE_BACKEND_URL;

    const [alunos, setAlunos] = useState([])
    const [carregando, setCarregando] = useState(true)

    const [paginaAtual, setPaginaAtual] = useState(1)
    const itensPorPagina = 10

    const [alunoEmEdicao, setAlunoEmEdicao] = useState(null);

    const [mostrarModal, setMostrarModal] = useState(false);
    const [alunoSelecionado, setAlunoSelecionado] = useState(null);



    useEffect(() => {
        axios.get(`${urlDoBackend}/alunos`)
            // axios.get(`${urlDoBackend}`)
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


    const exportarParaExcel = () => {
        const dadosExportacao = alunos.map(aluno => {
            const n1 = parseFloat(aluno.nota1)
            const n2 = parseFloat(aluno.nota2)
            const n3 = parseFloat(aluno.nota3)
            const n4 = parseFloat(aluno.nota4)
            const media = ((n1 + n2 + n3 + n4) / 4).toFixed(1)

            return {
                Nome: aluno.nome,
                Email: aluno.email,
                'Nota 1': aluno.nota1,
                'Nota 2': aluno.nota2,
                'Nota 3': aluno.nota3,
                'Nota 4': aluno.nota4,
                Média: media,
                Situação: media >= 7 ? 'Aprovado' : 'Reprovado'
            }
        })

        const ws = XLSX.utils.json_to_sheet(dadosExportacao)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Alunos')
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' })
        saveAs(blob, 'lista-de-alunos.xlsx')
    }

    return (
        <Container style={{ marginTop: "-15px" }}>

            <Row>
                <Col xs={12} md={6}>
                    <h1 className="mb-4">Listagem de alunos</h1>
                </Col>

                <Col xs={12} md={6}>
                    <div className="d-flex justify-content-end">
                        <Button variant="success" onClick={exportarParaExcel}>
                            <FaFileExcel className="me-2" />
                            Exportar
                        </Button>
                    </div>

                </Col>
            </Row>

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
                                            <Button
                                                variant="primary"
                                                onClick={() => {
                                                    setAlunoSelecionado(aluno.id);
                                                    setMostrarModal(true);
                                                }}
                                            >
                                                <FaEdit />
                                            </Button>

                                            <Button variant="secondary" onClick={async () => {
                                                const sucesso = await ExcluirAluno(aluno.id)
                                                if (sucesso) {
                                                    setAlunos(prev => prev.filter(a => a.id !== aluno.id))
                                                }
                                            }}>
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
                                            return <span style=
                                                {{ color: media >= 7 ? 'green' : 'red', fontWeight: 'bold' }}>
                                                {media >= 7 ? 'Aprovado' : 'Reprovado'}
                                            </span>
                                        })()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Modal
                        show={mostrarModal}
                        onHide={() => setMostrarModal(false)}
                        centered
                        backdrop="static"
                        size="lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Editar Aluno</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {alunoSelecionado && (
                                <EditarAluno
                                    id={alunoSelecionado}
                                    onSucesso={() => {
                                        setMostrarModal(false);
                                        axios.get(`${urlDoBackend}/alunos`).then(res => setAlunos(res.data));
                                    }}
                                />
                            )}
                        </Modal.Body>
                    </Modal>



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
