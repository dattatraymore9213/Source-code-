import React, { useState } from 'react';
import axios from 'axios';

const ParentLoginForm = () => {
    const [loginData, setLoginData] = useState({
        RegistrationId: '',
        Password: ''
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7183/api/Auth/login', loginData);
            console.log('Login successful:', response.data);
            alert('Login successful');
        } catch (error) {
            console.error('Login Failed', error.response?.data || error.message);
            alert('Invalid RegistrationId or Password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="RegistrationId" value={loginData.RegistrationId} onChange={handleChange} placeholder="Registration ID" required />
            <input type="password" name="Password" value={loginData.Password} onChange={handleChange} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default ParentLoginForm;
