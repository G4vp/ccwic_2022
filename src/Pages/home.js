import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';

import logo from "../Images/logo.png";

import microsoft from "../Images/microsoft.png";
import acm from "../Images/acm.png";
import CAHSI from "../Images/CAHSI.png";
import l3harris from "../Images/l3harris.png";

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
             <Row className="HomepageBrand" style={{padding:"50px"}}>
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
            <Row className="What is CCWiC" style={{backgroundImage: "linear-gradient(to right, #9D50BB 0%, #6E48AA  51%, #9D50BB  100%)", backgroundSize: "200% auto", padding: "100px", color: "white"}}>
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
                        CCWiC is part of the ACM Celebrations of Women in Computing of the Association for Computing Machinery 
                        Council on Women in Computing (ACM-W). CCWIC is dedicated to providing a harassment­-free conference 
                        experience and implements the ACM anti­discrimination statement.
                    </div>
                    <br/>
                    <Button variant="light" href='https://www.acm.org/about-acm/policy-against-harassment' style={{borderRadius: "45px"}}>
                        Learn More About this Policy
                    </Button>
                </Col>
            </Row>
            <Row className="Sponsors justify-content-center" style={{padding: "100px"}}>
                    <div style={{fontSize: "60px", fontWeight:"bold", fontFamily: "'Roboto', sans-serif", textAlign:"center"}}>
                    CCWiC Sponsors
                    </div>
                    
                <Col  xs={12} sm={6} md={6} xl={3} className="my-auto"> 
                    <img
                        src={CAHSI}
                        alt="Logo"
                        style={{
                            width:200,
                            margin: "auto",  
                            marginTop: "20px",
                            display: "block"
                        }}
                        
                    />
                </Col>
                <Col xs={12} sm={6} md={6} xl={3} className="my-auto"> 
                    <img
                        src={microsoft}
                        alt="Logo"
                        style={{
                            width:200,
                            margin: "auto", 
                            marginTop: "20px", 
                            display: "block" 
                        }}
                        
                    />
                </Col>
                <Col xs={12} sm={6} md={6} xl={3} className="my-auto"> 
                    <img
                        src={l3harris}
                        alt="Logo"
                        style={{
                            width:200,
                            margin: "auto",  
                            marginTop: "20px",
                            display: "block" 
                        }}
                        
                    />
                </Col>
                <Col xs={12} sm={6} md={6} xl={3} className="my-auto"> 
                    <img
                        src={acm}
                        alt="Logo"
                        style={{
                            width:200,
                            margin: "auto", 
                            marginTop: "20px", 
                            display: "block" 
                        }}
                        
                    />
                </Col>
            </Row>
        </Container>

    );
}

export default Home;
