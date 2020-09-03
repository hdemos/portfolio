import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Welcome() {
    return (
        <Container fluid className="Welcome vh-100 ">
            <section className="Sakura-bg"> </section>
            <Row className="h-25" > </Row>
            <Row>
                <Col className="col-3 col-sm-2" > </Col>
                <Col lg="8" className="ml-3" >
                    <h3 className="text-white">Hi there,</h3>
                </Col>
                <Col lg="2"> </Col>
            </Row>
            <Row className="justify-content-start " >
                <Col className="col-3 col-sm-2"> </Col>
                <Col className="col-8" className="">
                    <Row>
                        <Col style={{maxWidth: "1000px"}} >
                            <div className="main-header text-white text-center">welcome to my <br/>imagination</div>
                        </Col>
                    </Row>

                    {/*<h2>Frontend</h2>*/}
                    {/*<h2>Backend</h2>*/}
                </Col>
                <Col className="col-2" > </Col>
            </Row>

            <Row>
                <div className="col-5"> </div>
                <div className="col-2" >
                    <div className="btn-group-vertical pull-right">
                        <button type="button" className=" text-center button button--ujarak button--border-medium button--text-upper button--size-s button--inverted button--text-thick button--round-s">
                            <a  href="#" role="button">enter</a>
                        </button>
                    </div>

                </div>
                <Col className="col-5"> </Col>
            </Row>
        </Container>
    );
}

export default Welcome;
