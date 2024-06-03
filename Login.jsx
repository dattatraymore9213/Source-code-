import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
    const [role, setRole] = useState('parent');
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (role === 'parent') {
            try {
                const response = await axios.post('https://localhost:7183/api/Auth/LoginParent', {
                    RegistrationId: identifier,
                    Password: password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.data.success) {
                    history.push('/parent-dashboard');
                } else {
                    setError('Invalid Registration ID or password for parent');
                }
            } catch (error) {
                setError('Error logging in as parent');
            }
        } else if (role === 'staff') {
            if (identifier === 'staff@example.com' && password === 'staffpass') {
                history.push('/staff-dashboard');
            } else {
                setError('Invalid email or password for staff');
            }
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2>Login</h2>
                    <ToggleButtonGroup
                        type="radio"
                        name="role"
                        value={role}
                        onChange={(value) => setRole(value)}
                        className="mb-3"
                    >
                        <ToggleButton variant="outline-primary" value="parent">
                            Parent
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" value="staff">
                            Staff
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicIdentifier">
                            <Form.Label>{role === 'parent' ? 'Registration ID' : 'Email address'}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={role === 'parent' ? 'Enter Registration ID' : 'Enter email'}
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {error && <div style={{ color: 'red' }}>{error}</div>}

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
