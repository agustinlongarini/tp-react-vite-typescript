import {Container, Nav, Navbar } from "react-bootstrap";
import {useNavigate} from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();
    return (
        <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand onClick={() => navigate('/')}>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => navigate('/components')}>Components</Nav.Link>
                    <Nav.Link onClick={() => navigate('/administration')}>Administration</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}
export default Header;