
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
   const [user] = useAuthState()
   const handlerSignOut =() =>{
       signOut(auth)
   }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark" >
                <Container>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                         </Nav>
                       <Nav>
                         <Nav.Link as={Link} to="about">About</Nav.Link>
                        {  
                          user?
                          <button className='btn btn-primary text-white text-decoration-none' onClick={handlerSignOut}>sign out</button> 
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