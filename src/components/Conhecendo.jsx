import React from 'react'
import { Container } from 'react-bootstrap'

const Conhecendo = () => {
    return (
        <Container fluid
            style={{
                marginTop:"120px",
                marginBottom:"120px"
            }}
        >
            <h1 style={{marginBottom:"48px"}}>Explore Nossos Espaços</h1>
            <video 
                src="video.mp4" 
                muted autoPlay loop
                style={{width:"50%"}}
            />
        </Container>
    )
}

export default Conhecendo