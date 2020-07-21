import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-bottom justify-content-between p-3">
                    
                    <Col className="p-0 justify-content-end" md={3}>
                        Created By Josiah Speed
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;