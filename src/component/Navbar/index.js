import React from "react";
import './index.css'
import Navbar from 'react-bootstrap/Navbar'

import { ReactComponent as Logo } from '../../logo.svg';
import { Container,Nav,NavDropdown} from "react-bootstrap";

const Navbars = () => {

    return (
        <Navbar inverse fluid collapseOnSelect expand="lg" className="nav-color ml-auto" variant="dark">
        <Container className="nav">
        <Navbar.Brand href="/">
            <Logo className="logo" />
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">בית</Nav.Link>
            <Nav.Link href="/sign-up">הוסף משתמש</Nav.Link>
            <NavDropdown title="בעיות\סטטיסטיקה" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/solution"> בעיות נפוצות</NavDropdown.Item>
              <NavDropdown.Item href="/statistics">סטטיסטיקה</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/contact"> פניות/תלונות</Nav.Link>
            <Nav.Link eventKey={2} href="/fault-form">
            טופס תקלה
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    );
};
export default Navbars;