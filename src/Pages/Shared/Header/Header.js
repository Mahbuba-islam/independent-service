
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <>
            <Navbar className='navbar text-black  ' collapseOnSelect expand="lg"  sticky='top'   >
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mx-auto'>
                        <Nav.Link as={Link} to="Home">Home</Nav.Link> 
                        </Nav>
                        <Nav className='mx-auto'>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="Blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="login">Sign In</Nav.Link>
                            <Nav.Link as={Link} to="register">Sign Up</Nav.Link>
                            
                               
                            {
                                user ?
                                    <button className='btn  text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;