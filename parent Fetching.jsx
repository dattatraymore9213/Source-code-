import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const ParentDashboard = ({ registrationId }) => {
    const [parentData, setParentData] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [formData, setFormData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchParentData = async () => {
            try {
                const response = await axios.get(`https://localhost:7183/api/Parents/${registrationId}`);
                setParentData(response.data);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching parent data:', error);
            }
        };

        fetchParentData();
    }, [registrationId]);

    const handleUpdateModal = () => setShowUpdateModal(!showUpdateModal);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdateParentInfo = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7183/api/Parents/${registrationId}`, formData);
            setParentData(formData);
            setShowUpdateModal(false);
        } catch (error) {
            console.error('Error updating parent data:', error);
            setError('Failed to update information. Please try again.');
        }
    };

    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <h2>Parent Dashboard</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {parentData ? (
                        <div>
                            <p><strong>Parent Name:</strong> {parentData.ParentName}</p>
                            <p><strong>Student Name:</strong> {parentData.StudentName}</p>
                            <p><strong>Student Register Number:</strong> {parentData.StudentRegisterNumber}</p>
                            <p><strong>Address:</strong> {parentData.Address}</p>
                            <p><strong>City:</strong> {parentData.City}</p>
                            <p><strong>State:</strong> {parentData.State}</p>
                            <p><strong>Country:</strong> {parentData.Country}</p>
                            <p><strong>Zip Code:</strong> {parentData.ZipCode}</p>
                            <p><strong>Email Address:</strong> {parentData.EmailAddress}</p>
                            <p><strong>Primary Contact Person:</strong> {parentData.PrimaryContactPerson}</p>
                            <p><strong>Primary Contact Mobile:</strong> {parentData.PrimaryContactPersonMobile}</p>
                            <p><strong>Secondary Contact Person:</strong> {parentData.SecondaryContactPerson}</p>
                            <p><strong>Secondary Contact Mobile:</strong> {parentData.SecondaryContactPersonMobile}</p>
                            <Button variant="primary" onClick={handleUpdateModal}>
                                Update Information
                            </Button>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </Col>
            </Row>

            <Modal show={showUpdateModal} onHide={handleUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Parent Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {formData && (
                        <Form onSubmit={handleUpdateParentInfo}>
                            <Form.Group controlId="formParentName">
                                <Form.Label>Parent Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ParentName"
                                    value={formData.ParentName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formStudentName">
                                <Form.Label>Student Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="StudentName"
                                    value={formData.StudentName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formStudentRegisterNumber">
                                <Form.Label>Student Register Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="StudentRegisterNumber"
                                    value={formData.StudentRegisterNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Address"
                                    value={formData.Address}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="City"
                                    value={formData.City}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="State"
                                    value={formData.State}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Country"
                                    value={formData.Country}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formZipCode">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ZipCode"
                                    value={formData.ZipCode}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmailAddress">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="EmailAddress"
                                    value={formData.EmailAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formPrimaryContactPerson">
                                <Form.Label>Primary Contact Person</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="PrimaryContactPerson"
                                    value={formData.PrimaryContactPerson}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formPrimaryContactPersonMobile">
                                <Form.Label>Primary Contact Mobile</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="PrimaryContactPersonMobile"
                                    value={formData.PrimaryContactPersonMobile}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formSecondaryContactPerson">
                                <Form.Label>Secondary Contact Person</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="SecondaryContactPerson"
                                    value={formData.SecondaryContactPerson}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formSecondaryContactPersonMobile">
                                <Form.Label>Secondary Contact Mobile</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="SecondaryContactPersonMobile"
                                    value={formData.SecondaryContactPersonMobile}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">Update</Button>
                        </Form>
                    )}
                    {error && <p className="text-danger">{error}</p>}
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ParentDashboard;
