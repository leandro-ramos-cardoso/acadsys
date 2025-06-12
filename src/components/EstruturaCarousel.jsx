import React from 'react'
import { Carousel } from 'react-bootstrap'

const EstruturaCarousel = () => {
    return (
        <div className="carousel-container" style={{ width: '100%', margin: 0, padding: 0, height: 'auto', marginTop: '2rem', marginBottom: '10rem' }}>
            <Carousel fade interval={3000}>
                <Carousel.Item>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src="school2.png"
                            alt="First slide"
                            style={{ 
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                margin: 0,
                                padding: 0
                            }}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src="school3.png"
                            alt="Second slide"
                            style={{ 
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                margin: 0,
                                padding: 0
                            }}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src="school4.png"
                            alt="Third slide"
                            style={{ 
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                margin: 0,
                                padding: 0
                            }}
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default EstruturaCarousel