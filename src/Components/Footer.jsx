import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer mt-auto bg-dark text-white small">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0">
                        Guillaume ELAMBERT
                    </Col>
                    <Col className="p-0 d-flex justify-content-end">
                        Site created by Guillaume ELAMBERT.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;