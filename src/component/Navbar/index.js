import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import Dropdown from 'react-bootstrap/Dropdown'
import './index.css'
import { ReactComponent as Logo } from '../../logo.svg';


const Navbar = () => {
    return (
     
           <Nav>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
            <NavLogo to="/">
               <Logo style={{marginTop:"0.4em"}}/>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    בית
                </NavLink>

                <NavLink to="/solution" activeStyle>
                   בעיות נפוצות
                </NavLink>
                <NavLink to="/contact" activeStyle>
                פניות/תלונות
                </NavLink>
                <NavLink to="/fault-form" activeStyle>
                    טופס תקלה
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">הכנס משתמש</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
    
    );
};
export default Navbar;