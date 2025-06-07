import React from 'react'
import { Container } from 'react-bootstrap'
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';


const RedesSociais = () => {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginRight:"400px"}}>
                <FaInstagram size={32} />
                <FaWhatsapp size={32} />
                <FaTiktok size={32} />
            </div>
        </Container>
    )
}

export default RedesSociais