import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

class CCWiCNavbar extends Component {
    render() { 
        return (
            <Navbar bg="light">
                <Container>
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}
 
export default CCWiCNavbar;
