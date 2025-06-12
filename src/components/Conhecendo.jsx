import React from 'react'
import { Container } from 'react-bootstrap'

const Conhecendo = () => {
    return (
        <Container fluid
            style={{
                marginTop:"6rem",
                marginBottom:"6rem"
            }}
        >
            <h1 style={{marginBottom:"6rem"}}>Explore Nossos Espaços</h1>
            <video 
                src="video.mp4" 
                muted autoPlay loop
                style={{width:"50%", marginBottom:"5rem"}}
            />
        </Container>
    )
}

export default Conhecendo