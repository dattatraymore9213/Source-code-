import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ParentDashboard = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>View Circulars</Card.Title>
                            <Card.Text>View the latest circulars from the school.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Update Profile</Card.Title>
                            <Card.Text>Update your profile information.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ParentDashboard;
