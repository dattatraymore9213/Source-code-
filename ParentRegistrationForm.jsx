import React, { useState } from 'react';
import axios from 'axios';

const ParentRegistrationForm = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        studentName: '',
        studentRegisterNumber: '',
        address: '',
        state: '',
        country: '',
        city: '',
        zipCode: '',
        emailAddress: '',
        primaryContactPerson: '',
        primaryContactPersonMobile: '',
        secondaryContactPerson: '',
        secondaryContactPersonMobile: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/Parent', formData)
            .then(response => {
                console.log(response.data);
                alert('Registration successful!');
            })
            .catch(error => {
                console.error(error);
                alert('Registration failed!');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Parent Name" required />
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Student Name" required />
            <input type="text" name="studentRegisterNumber" value={formData.studentRegisterNumber} onChange={handleChange} placeholder="Student Register Number" required />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
            <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip Code" required />
            <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="Email Address" required />
            <input type="text" name="primaryContactPerson" value={formData.primaryContactPerson} onChange={handleChange} placeholder="Primary Contact Person" required />
            <input type="tel" name="primaryContactPersonMobile" value={formData.primaryContactPersonMobile} onChange={handleChange} placeholder="Primary Contact Person Mobile" required />
            <input type="text" name="secondaryContactPerson" value={formData.secondaryContactPerson} onChange={handleChange} placeholder="Secondary Contact Person" />
            <input type="tel" name="secondaryContactPersonMobile" value={formData.secondaryContactPersonMobile} onChange={handleChange} placeholder="Secondary Contact Person Mobile" />
            <button type="submit">Register</button>
        </form>
    );
};

export default ParentRegistrationForm;
