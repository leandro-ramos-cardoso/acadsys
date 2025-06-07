import { React, useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import axios from 'axios'

const ListarAluno = () => {

    const urlDoBackend = "http://localhost:3000"
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        axios.get(`${urlDoBackend}/alunos`)
            .then(response => setAlunos(response.data))
            .catch(error => console.error("Houve um erro para obter a listagem de alunos: ", error))
    }, [])

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

                {
                    alunos.map(aluno => (
                        <ListGroup.Item key={aluno.id} className="d-flex text-center">
                            {/* <strong>{aluno.nome}</strong> - {aluno.email} */}
                            <div className="flex-fill">{aluno.id}</div>
                            <div className="flex-fill">{aluno.nome}</div>
                            <div className="flex-fill">{aluno.email}</div>
                            <div className="flex-fill">{aluno.nota1}</div>
                            <div className="flex-fill">{aluno.nota2}</div>
                            <div className="flex-fill">{aluno.nota3}</div>
                            <div className="flex-fill">{aluno.nota4}</div>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    )
}

export default ListarAluno