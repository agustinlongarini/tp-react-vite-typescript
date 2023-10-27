import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return(
        <footer className="bg-dark text-light py-3">
            <Container>
                <Row>
                    <Col>
                        <h4>Our company</h4>
                        <p>Some information about your company</p>
                    </Col>
                    <Col>
                        <h4>Contact Us</h4>
                        <p>Email: contact@yourcompany.com</p>
                        <p>Phone: +123 456 789</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;