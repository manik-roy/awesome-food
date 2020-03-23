import React from 'react';
import logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../bootstrap/css/poppins-font.css';
import '../../bootstrap/css/bootstrap.min.css';
import { Navbar, Nav, } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div classNameName="header">
            <Navbar expand="lg">
                <Navbar.Brand href="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;