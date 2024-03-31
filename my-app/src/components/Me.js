import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Image } from "react-bootstrap";
import './style.css'
const Me = () => (
    <Container className="frontPage justify-content-start">
        <Row className="justify-content-start align-items-center w-75">
            <Col m>
                <h1>The Story of the Rivergawd</h1>
                <div className="centerTextBox">
                    Hello, my name is Brandon, I am a Computer Science student from UH Manoa who decided to create a website to practice my HTML/CSS skills. I also will use this as a blog for myself to write about whatever I want. This website is intended for fun and entertainment. If you would like to see my professional portfolio please look here
                </div>
            </Col>
            <Col>
                <Image src="aboutmepfp.png" fluid className="fpImage" alt="About Me Profile" />
            </Col>
        </Row>
    </Container>
);

export default Me;