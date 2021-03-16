import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='/'>Hiu Chan</Navbar.Brand>
            <Nav className='ml-auto'>
                <Nav.Item>
                    <Nav.Link disabled>
                        hiuchanhk@gmail.com
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Header;