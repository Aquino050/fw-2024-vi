import { Container, Nav, Navbar} from 'react-bootstrap';
export default function Menu() {
    return (
        <Navbar expand="sm"  className="bg-dark">
            <Container>
                <Navbar.Brand href="/" className="text-light">6A</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-light" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-light">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Produtos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

