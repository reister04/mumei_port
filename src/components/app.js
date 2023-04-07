import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './home'; 
import AboutMe from './aboutme'; 
import Gallery from './gallery'; 

import Logo from '../assets/images/logo.png';

import '../assets/stylesheets/style.css';

class App extends Component {
    render() {
        return (
            <Router basename="/mumei_port" >
                <Navbar bg="light" variant="light" className='border-bottom border-info border-2'>
                    <Container fluid>
                    <Navbar.Brand href="/mumei_port" className='navlink fw-bold'><img src={Logo} alt="hololive logo" style={{height: 40}}></img></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link className='navlink nav-link' to="/">Home</Link>
                        <Link className='navlink nav-link' to="/aboutme">About Me</Link>
                        <Link className='navlink nav-link' to="/gallery">Gallery</Link>
                    </Nav>
                    </Container>
                </Navbar>
                <Routes>
                        <Route exact path='/' element={< Home />}></Route>
                        <Route exact path='/aboutme' element={< AboutMe />}></Route>  
                        <Route exact path='/gallery' element={< Gallery />}></Route>
                </Routes>
            </Router>
            
        );
    }
}

export default App;