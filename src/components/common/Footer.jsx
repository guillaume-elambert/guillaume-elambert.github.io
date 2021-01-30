import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';

import { Container } from './';

export function Footer() {
    return (
        <footer className="footer bg-dark text-white">
            <Row as={Container} className="justify-content-between p-3">
                <Col className="p-0">
                    Guillaume ELAMBERT
                    </Col>
                <Col className="p-0 d-flex justify-content-end">
                    Site created by Guillaume ELAMBERT.
                    </Col>
            </Row>
        </footer>
    );
}

export default Footer;