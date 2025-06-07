import React from 'react'
import { Container, Carousel } from 'react-bootstrap'

const EstruturaCarousel = () => {
    return (
        <Container className="mb-5 mt-5">
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        src="school2.png"
                        alt="First slide"
                        className="d-block w-100"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        src="school3.png"
                        alt="First slide"
                        className="d-block w-100"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        src="school4.png"
                        alt="First slide"
                        className="d-block w-100"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default EstruturaCarousel