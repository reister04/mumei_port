import React, { Component } from 'react';
import Me from '../assets/images/me.png'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

class Home extends Component {
    render() {
        return (
            <div className='container py-5 text-center'>
                <Col md="6" lg="4" className='mx-auto'>
                    <Image className='my-2 rounded rounded-circle border border-secondary border-2' src={Me} style={{width:'100%'}}></Image>
                </Col>
                <h2 className='text-center' style={{color:'#063f5c'}}>Welcome to Nanashi Mumei's Page</h2>
            </div>
        );
    }
}

export default Home;