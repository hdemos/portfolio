import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Welcome() {
    return (
        <Container fluid className="Welcome vh-100 justify-content-center justify-content-between ">
            <section className="Sakura-bg"></section>
                <Row className="h-25" ></Row>
                <Row className="justify-content-center align-content-center align-items-center" >
                    <Col lg="2"></Col>
                    <Col lg="8" className="text-center">
                        <h1>Hi, I'm Haley</h1>
                        <h3>Welcome to my imagination</h3>
                        <h2>Frontend</h2>
                        <h2>Backend</h2>
                    </Col>
                    <Col lg="2" ></Col>
                </Row>
        </Container>
    );
}

export default Welcome;
