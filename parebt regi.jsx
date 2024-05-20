// src/components/ParentRegistrationForm.jsx
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7183/api/Parents', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Parent created successfully');
        } catch (error) {
            console.error('There was an error creating the parent!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(formData).map(key => (
                <div key={key}>
                    <label>
                        {key}:
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            ))}
            <button type="submit">Register Parent</button>
        </form>
    );
