import React from "react";
import './index.css'
import Navbar from 'react-bootstrap/Navbar'

import { ReactComponent as Logo } from '../../logo.svg';
import { Container,Nav,NavDropdown} from "react-bootstrap";

const Navbars = () => {

    return (
      <html dir="rtl">
        <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark">
        <Container className="nav">
        <Navbar.Brand href="/">
            <Logo className="logo" />
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link  activeClassName="active" className="nav-links" href="/about">בית</Nav.Link>
            <Nav.Link  activeClassName="active" className="nav-links" href="/sign-up">הוסף משתמש</Nav.Link>
            <NavDropdown className="dropdown" title="בעיות\סטטיסטיקה" id="collasible-nav-dropdown">
              <NavDropdown.Item className="dropdown" href="/solution"> בעיות נפוצות</NavDropdown.Item>
              <NavDropdown.Item className="dropdown" href="/statistics">סטטיסטיקה</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className=" me-auto">
            
            <Nav.Link className="nav-links" href="/contact"> פניות/תלונות</Nav.Link>
            <Nav.Link className="nav-links" eventKey={2} href="/fault-form">
            טופס תקלה
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      </html>
    );
};
export default Navbars;