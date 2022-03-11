import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import logo from "../Images/logo.png";

const Home = () => {
    return (
        <div className="Home">
            <Container>
                <Row>
                    <Col xs="auto" className='d-flex justify-content-left'>
                    <img
                        alt=""
                        src={logo}
                        height="30%"
                        className="img-responsive"
                    />
                    {""}
                    </Col>
                    <Col md="auto" className='d-flex justify-content-center'>Caribbean Celebration</Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Home;
