import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import logo from '../../../img/logo.png'
import './Header.css'

import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';



const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar className='bg-nav bg-dark' expand="lg">
                <Container>
                    <Navbar.Brand to="/home">
                        {/* <img className=' nav-logo' src={logo} alt="" /> */}
                        <p className='title-color'>Invo||DB</p>
                    </Navbar.Brand>
                    <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            
                            <Nav.Link className='text-white hover fw-bolder fs-5' as={Link} to="/home">Home</Nav.Link>

                            {
                                user && <>
                                    <Nav.Link className='text-white hover fw-bolder fs-5' as={Link} to="/management">Inventory</Nav.Link>
                                    <Nav.Link className='text-white hover fw-bolder fs-5' as={Link} to="/add">Add Items</Nav.Link>
                                    <Nav.Link className='text-white hover fw-bolder fs-5' as={Link} to="/my">MY Items</Nav.Link>
                                </>
                            }

                            <Nav.Link className='text-white hover fw-bolder fs-5' as={Link} to="/blogs">Blogs</Nav.Link>

                            {
                                user ?
                                    <span className='signOutBtn' onClick={handleSignOut}>SIGN OUT</span>
                                    :
                                    <Nav.Link className='text-white hover fw-bolder fs-5' as={Link} to="login">LOGIN</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;