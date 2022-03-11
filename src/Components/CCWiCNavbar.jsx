import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import "../app.css";
import {LinkContainer} from 'react-router-bootstrap'


function CCWiCNavbar() {

    const [homeEvent, setHome] = useState(true);
    const [scheduleEvent, setSchedule] = useState(false);
    const [speakersEvent, setSpeakers] = useState(false);

    const handleHome = (e) => {
        setHome(true)
        setSchedule(false)
        setSpeakers(false)
    };

    const handleSchedule = (e) => {
        setHome(false)
        setSchedule(true)
        setSpeakers(false)
    };

    const handleSpeakers = (e) => {
        setHome(false)
        setSchedule(false)
        setSpeakers(true)
    };


    return (
        <Navbar className='CCWiCNavbar justify-content-center'>
            <Container>
                <Navbar.Brand className="NavbarName" href="/" style={{fontSize: "200%", fontWeight: "bolder", letterSpacing: "2px"}}>CCWiC</Navbar.Brand>

                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        {homeEvent ? (
                            <LinkContainer to="/" onClick={handleHome} style={{ textDecoration: "none", background: "linear-gradient(to right, #9D50BB 0%, #6E48AA  51%, #9D50BB  100%)", backgroundSize: "200% auto", color:"white"}}>
                                <Nav.Link id="NavbarHome">
                                    Home 
                                </Nav.Link>
                            </LinkContainer>
                            
                        ):(
                            <LinkContainer to="/" onClick={handleHome}>
                                <Nav.Link id="NavbarHome" style={{ textDecoration: "none", color: "#6E48AA"}}>
                                    Home 
                                </Nav.Link>
                            </LinkContainer>
                            
                        )}
                            
                    </Nav.Item>

                    <Nav.Item>
                        {scheduleEvent ? (
                            <LinkContainer to="/Schedule" onClick={handleSchedule} style={{ textDecoration: "none", background: "linear-gradient(to right, #9D50BB 0%, #6E48AA  51%, #9D50BB  100%)", backgroundSize: "200% auto", color:"white"}}>
                                <Nav.Link id="NavbarHome">
                                    Schedule 
                                </Nav.Link>
                            </LinkContainer>
                            
                        ):(
                            <LinkContainer to="/Schedule" onClick={handleSchedule}>
                                <Nav.Link id="NavbarHome" style={{ textDecoration: "none", color: "#6E48AA"}}>
                                    Schedule 
                                </Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav.Item>
                    
                    <Nav.Item>
                        {speakersEvent ? (
                            <LinkContainer to="/Speakers" onClick={handleSpeakers} style={{ textDecoration: "none", background: "linear-gradient(to right, #9D50BB 0%, #6E48AA  51%, #9D50BB  100%)", backgroundSize: "200% auto", color:"white"}}>
                                <Nav.Link id="NavbarHome" onClick={handleSpeakers}>
                                    Speakers 
                                </Nav.Link>
                            </LinkContainer>
                            
                        ):(
                            <LinkContainer to="/Speakers" onClick={handleSpeakers}>
                                <Nav.Link id="NavbarHome" onClick={handleSpeakers} style={{ textDecoration: "none", color: "#6E48AA"}}>
                                    Speakers 
                                </Nav.Link>
                                </LinkContainer>
                        )}
                    </Nav.Item>
                </Nav>

                <Button className='Registration btn--primary' href='https://docs.google.com/forms/d/1sEGhgD-BhMAo6Dh1JyILx2G6Q_0aEA60KbvYFzCzK7w/edit'style={{ border: "none"}}>
                        Register Now!
                </Button>

            </Container>
        </Navbar>
    )
}
 
export default CCWiCNavbar;
