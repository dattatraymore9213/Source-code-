import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert, Row, Col, ToggleButton, ButtonGroup } from 'react-bootstrap';

const Login = () => {
    const [loginType, setLoginType] = useState('parent');
    const [formData, setFormData] = useState({ RegistrationId: '', Password: '', StaffUsername: '', StaffPassword: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (loginType === 'parent') {
            try {
                const response = await axios.post('https://localhost:7183/api/Parents/login', {
                    RegistrationId: formData.RegistrationId,
                    Password: formData.Password
                });
                if (response.data.success) {
                    navigate('/parent-dashboard');
                } else {
                    setError('Invalid Registration ID or Password');
                }
            } catch (error) {
                setError('Login failed. Please try again.');
            }
        } else {
            const hardcodedUsername = 'staff';
            const hardcodedPassword = 'staffpassword';
            if (formData.StaffUsername === hardcodedUsername && formData.StaffPassword === hardcodedPassword) {
                navigate('/staff-dashboard');
            } else {
                setError('Invalid Staff Username or Password');
            }
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2>Login</h2>
                    <ButtonGroup toggle className="mb-3">
                        <ToggleButton
                            type="radio"
                            variant="secondary"
                            name="loginType"
                            value="parent"
                            checked={loginType === 'parent'}
                            onChange={() => setLoginType('parent')}
                        >
                            Parent
                        </ToggleButton>
                        <ToggleButton
                            type="radio"
                            variant="secondary"
                            name="loginType"
                            value="staff"
                            checked={loginType === 'staff'}
                            onChange={() => setLoginType('staff')}
                        >
                            Staff
                        </ToggleButton>
                    </ButtonGroup>
                    <Form onSubmit={handleLogin}>
                        {loginType === 'parent' ? (
                            <>
                                <Form.Group controlId="formRegistrationId">
                                    <Form.Label>Registration ID</Form.Label>
                                    <Form.Control type="text" name="RegistrationId" value={formData.RegistrationId} onChange={handleChange} placeholder="Registration ID" required />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="Password" value={formData.Password} onChange={handleChange} placeholder="Password" required />
                                </Form.Group>
                            </>
                        ) : (
                            <>
                                <Form.Group controlId="formStaffUsername">
                                    <Form.Label>Staff Username</Form.Label>
                                    <Form.Control type="text" name="StaffUsername" value={formData.StaffUsername} onChange={handleChange} placeholder="Staff Username" required />
                                </Form.Group>
                                <Form.Group controlId="formStaffPassword">
                                    <Form.Label>Staff Password</Form.Label>
                                    <Form.Control type="password" name="StaffPassword" value={formData.StaffPassword} onChange={handleChange} placeholder="Staff Password" required />
                                </Form.Group>
                            </>
                        )}
                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
