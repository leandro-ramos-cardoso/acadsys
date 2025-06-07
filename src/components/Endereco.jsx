import React from 'react'
import { Container } from 'react-bootstrap'

const Endereco = () => {
    return (
        <Container className="mb-4 mt-5">
            <h1>Onde Estamos</h1>
            <img src="localizacao.png" alt="Nossa localização" 
                style={{
                    width:"80%"
                }}
            />
        </Container>
    )
}

export default Endereco