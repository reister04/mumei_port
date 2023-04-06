import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Me from '../assets/images/me_full.png'
import Image from 'react-bootstrap/Image';

class AboutMe extends Component {
    render() {
        return (
            <div style={{color: '#116e9b'}}>
                <Container className='mt-2 d-flex'>
                    <Row>
                        <Col sm="12 mx-auto" lg="4" className='d-flex align-items-center justify-content-center' >
                            <Image src={Me} fluid className=''/>
                        </Col>
                        <Col sm="12 text-break" lg="8">
                            <h1 className='text-center' style={{color:'#063f5c'}}>Nanashi Mumei</h1>
                            <h5 className='text-center'>七詩ムメイ</h5>
                            <p>Guardian of "Civilization"
                                A member of the Council and the Guardian of "Civilization," a concept crafted by mankind.
                                As a living embodiment of the sum of mankind's efforts—the mark that humans have left on the world—she is far removed from her fellow members, as well as other lifeforms. Due to not being created by the Gods, she was free to choose her own appearance, and decided to make herself owl-like, after the bird that symbolizes wisdom.

                                She is gentle, wise, and an unbelievably hard worker. As a well-traveled vagabond, she is blessed with a wealth of knowledge of the world. She has seen, heard, and experienced so many things that she has forgotten most of them, one of them being her own name.

                                For some reason, she seems to project a rather pitiable aura. Perhaps this is in part thanks to the loneliness she has often felt in her perennial travels. That is what gave her the idea of making her own friend out of a material that was indispensable to the development of human civilization: paper.

                                "It may fade and rip, but once a friend, forever a friend."
                            </p>
                            <Row className='d-flex justify-content-center'> 
                                <Col sm="3 mb-2" md="3">
                                    <a href="https://www.youtube.com/channel/UC3n5uGu18FoCy23ggWWp8tA" className='btn btn-outline-danger w-100'>Youtube</a>
                                </Col>
                                <Col sm="3 mb-4" md="3">
                                    <a href="https://twitter.com/nanashimumei_en" className='btn btn-outline-primary w-100'>Twitter</a>
                                </Col>
                            </Row>
                            
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AboutMe;