import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import s1 from '../assets/images/selfies/s1.jpg';
import s2 from '../assets/images/selfies/s2.jpg';
import s3 from '../assets/images/selfies/s3.jpg';

import f1 from '../assets/images/family/f1.jpg';
import f2 from '../assets/images/family/f2.jpg';
import f3 from '../assets/images/family/f3.jpg';
import f4 from '../assets/images/family/f4.jpg';

import a1 from '../assets/images/adventure/a1.jpg';
import a2 from '../assets/images/adventure/a2.png';
import a3 from '../assets/images/adventure/a3.jpg';

const images = [
    { category: 'selfie', src: s1 },
    { category: 'selfie', src: s2 },
    { category: 'selfie', src: s3 },
    { category: 'family', src: f1 },
    { category: 'family', src: f2 },
    { category: 'family', src: f3 },
    { category: 'family', src: f4 },
    { category: 'adventure', src: a1 },
    { category: 'adventure', src: a2 },
    { category: 'adventure', src: a3 },
];

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'all',
        };
    }

    render() {
        const filteredImages = images.filter(
            (image) => image.category === this.state.category || this.state.category === 'all'
        );

        return (
            <div>
                <Container className="my-4 text-center">
                    <Button variant="info" style={{color: '#fff'}} onClick={() => this.setState({ category: 'all' })}>
                        All
                    </Button>{' '}
                    <Button variant="info" style={{color: '#fff'}} onClick={() => this.setState({ category: 'selfie' })}>
                        Selfie
                    </Button>{' '}
                    <Button variant="info" style={{color: '#fff'}} onClick={() => this.setState({ category: 'family' })}>
                        Family
                    </Button>{' '}
                    <Button variant="info" style={{color: '#fff'}} onClick={() => this.setState({ category: 'adventure' })}>
                        Adventure
                    </Button>
                </Container>
                <Container>
                    <Row>
                        {filteredImages.map((image) => (
                            <Col className='text-center' sm="12" md="4" lg="3">
                                <Image className='m-2 rounded border border-info border-2' key={image.src} src={image.src} fluid style={{width: 300, height: 300, objectFit: 'cover'}}></Image>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Gallery;
