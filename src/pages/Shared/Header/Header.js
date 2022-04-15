import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';



const Header = () => {

    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }


    return (
        <div className='sticky top-0 order-1'>
            <header >
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href='home#service' >Services</Nav.Link>
                                <Nav.Link href="home#newcarosel">Newcarosel</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                                {
                                    user ? <Nav.Link onClick={handleLogOut} as={Link} to='/'>LogOut</Nav.Link> :
                                        <Nav.Link eventKey={2} as={Link} to='/login'>Login</Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
};

export default Header;