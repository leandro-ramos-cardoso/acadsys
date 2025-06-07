import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';


const RedesSociais = () => {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px'}}>
                <FaInstagram size={32} />
                <FaWhatsapp size={32} />
                <FaTiktok size={32} />
            </div>
        </Container>
    )
}

export default RedesSociais