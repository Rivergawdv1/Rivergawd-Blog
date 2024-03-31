import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import {Twitter, Youtube, Twitch, Github} from "react-bootstrap-icons";
import './style.css'

const TopMenu = () => (
    <Navbar expand="lg" className="navDesign">
        <Container>
            <Navbar.Brand href="/">Rivergawd</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto navFont">
                    <Nav.Link href="about" className="navText">About Me</Nav.Link>
                    <Nav.Link href="setup" className="navText">Setup</Nav.Link>
                    <Nav.Link href="anime" className="navText">Anime List</Nav.Link>
                    <NavDropdown title="Gaming" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">All Accomplishments</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">All Games</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="justify-content-end navfont">
                    <Nav.Link href="https://www.youtube.com/channel/UC5GOtJNszLk1shnjuIRZcAA"><Youtube /> </Nav.Link>
                    <Nav.Link href=""><Twitch /> </Nav.Link>
                    <Nav.Link href=""><Twitter /> </Nav.Link>
                    <Nav.Link href=""><Github /> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default TopMenu;
