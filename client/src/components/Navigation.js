import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Nav>
                <LinkContainer to="/">
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/TrigRatios">
                    <Nav.Link >Trigonometric Ratios Practice</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/DrawTriangles">
                    <Nav.Link >Draw a Triangle</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
};

export default Navigation;