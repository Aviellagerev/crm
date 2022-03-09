import React from "react";
import './index.css'
import Navbar from 'react-bootstrap/Navbar'

import { ReactComponent as Logo } from '../../logo.svg';
import { Container,Nav,NavDropdown} from "react-bootstrap";

const Navbars = () => {

    return (
      <html dir="rtl">
        <Navbar collapseOnSelect expand="lg" className="nav-color" variant="light">
        <Container className="nav">
        <Navbar.Brand href="/">
            <Logo className="logo" />
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link  activeClassName="active" className="nav-links" href="/about">בית</Nav.Link>
            <Nav.Link  activeClassName="active" className="nav-links" href="/sign-up">הוסף משתמש</Nav.Link>
            <NavDropdown title="נתונים">
              <NavDropdown.Item href="/solution">צפייה בתפסי תקלה   </NavDropdown.Item>
              <NavDropdown.Item href="/complainview">צפייה בתלונות\פנות</NavDropdown.Item>
              <NavDropdown.Item href="/statistics">סטטיסטיקה</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className=" me-auto">
            <Nav.Link className="nav-links" href="/complain"> פניות/תלונות</Nav.Link>
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