import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar bg="light text-white" expand="lg">
                <Container className='custom'>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/search">Search</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Home;