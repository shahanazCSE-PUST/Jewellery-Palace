import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png'

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top rounded-circle"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Brand className="fs-3 tittle-text" href="#home">Jewellery <span>Palace</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-light" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#products">Products</Nav.Link>
                        <Link className="text-light text-decoration-none" to="/explore">Explore</Link>
                        {
                            user?.email&&<Nav.Link className="text-light" as={Link} to="/dashboard">Dashboard</Nav.Link>
                        }
                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        {
                            user?.email ? <Button onClick={logout} variant="outline-light"  className="ms-2"> Logout</Button> :
                            <Nav.Link className="text-light" as={Link} to="/login">Login</Nav.Link>
                        }
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;