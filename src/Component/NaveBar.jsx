import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NaveBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src='/logo_go_my_code.png' alt='Logo GoMyCode' style={{width:"50px"}}/></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NaveBar