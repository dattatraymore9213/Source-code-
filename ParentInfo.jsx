import React from 'react';
import { Card } from 'react-bootstrap';

const ParentInfo = ({ parentData }) => {
    return (
        <Card>
            <Card.Header>Parent and Student Information</Card.Header>
            <Card.Body>
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
            </Card.Body>
        </Card>
    );
};

export default ParentInfo;
