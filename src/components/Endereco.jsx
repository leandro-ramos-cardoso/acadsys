import React from 'react'
import { Container } from 'react-bootstrap'

const Endereco = () => {
    return (
        <Container fluid className="mb-4 mt-5">
            <div style={{ backgroundColor: '#a1a1a1', color: '#fff',  
                padding: '40px 0', textAlign: 'center', margin: 0,
            }}>
                <h1>Onde Estamos</h1>

                <img src="localizacao.png" alt="Nossa localização"
                    style={{
                        width: "50%",
                        marginBottom: "64px",
                        marginTop: "64px"
                    }}
                />
                <h2 style={{ marginBottom: "120px" }}>Rua Exemplo, 123 - João Pessoa - PB</h2>
            </div>
        </Container>
    )
}

export default Endereco