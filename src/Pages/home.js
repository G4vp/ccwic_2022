import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';

import logo from "../Images/logo.png";

const SCREEN_WIDTH = window.innerWidth; // get current width
const SCALE = 1349; // constant

const scaleSize = (fontSize) => {
    const ratio = fontSize / SCALE; // get ratio based on your standard scale 
    const newSize = Math.round(ratio * SCREEN_WIDTH);
    return newSize; 
}

// Esto es para hacer que el tamaño del font sea responsive
// window.addEventListener('resize', handleFontSize)

const Home = () => {
    return (

        <Container fluid>
             <Row style={{padding:"50px"}}>
                <Col sm={4}>
                    <img
                        className='img-responsive'
                        src={logo}
                        alt="Logo"
                        style={{
                            width:scaleSize(350),
                            verticalAlign: "center",
                            margin: "auto",
                            display: "block"
                        }}
                        
                        />
                </Col>
                <Col sm={8} className="my-auto" style={{padding:"50px", textAlign: "center"}}> 
                    <div style={{fontSize: "50px", fontWeight:"bold", fontFamily: "'Roboto', sans-serif"}}>
                    Caribbean Celebration of Women in Computing
                    </div>
                    <br/>
                    <div style={{fontSize: "20px", fontFamily: "'Roboto', sans-serif"}}>
                    Our goal is to empower undergraduate students who self-identify as females in computing, 
                    promote leadership, and establish support networks among students.
                    </div>
                    <br/>
                    <Button className='Registration btn--primary' href='https://docs.google.com/forms/d/1sEGhgD-BhMAo6Dh1JyILx2G6Q_0aEA60KbvYFzCzK7w/edit'style={{ border: "none"}}>
                        Register Now!
                    </Button>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row style={{backgroundImage: "linear-gradient(to right, #9D50BB 0%, #6E48AA  51%, #9D50BB  100%)", backgroundSize: "200% auto", padding: "100px", color: "white"}}>
                <Col sm={4} className="my-auto">
                    <div style={{fontSize: "60px", fontWeight:"bold", fontFamily: "'Roboto', sans-serif"}}>
                    What is CCWiC?
                    </div>
                </Col>
                <Col sm={8}> 
                    <div style={{fontSize: "18px", fontFamily: "'Roboto', sans-serif", textAlign:"justify"}}>
                        The Caribbean Celebration of Women in Computing (CCWiC) 2022 has the goal to empower undergraduate 
                        students who self-identify as females in computing, promote leadership, and establish support networks 
                        among students. This is an initiative of the Southeast Region of the Computing Alliance of Hispanic 
                        Serving Institutions (CAHSI). CCWiC will provide tools to build these support networks and initiatives, 
                        all centered on empowering participants for professional growth and career preparation.
                        <br/>
                        <br/>
                        Women will participate in interactive workshops and technical sessions. The technical areas that students 
                        will be exposed to are: Machine Learning and Artificial Intelligence, Cybersecurity, and Internet of Things. 
                        We want to increase participants' confidence while promoting and providing a better understanding of 
                        computing careers.
                    </div>
                </Col>
            </Row>
            <Row>
                Something
            </Row>
        </Container>

    );
}

export default Home;
