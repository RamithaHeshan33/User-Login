import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import {motion} from 'framer-motion';

const REGISTER_URL = 'http://localhost:5000/students';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch(REGISTER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration Successful! Please log in.');
                navigate('/login');
            } else {
                setError(data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Something went wrong. Try again later.');
        }
    };

    return (
        <div>
            <div className='Login'>
                <motion.div className='login-left'
                    initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
                    animate={{ x: 0, opacity: 1 }}  // Move to position with fade-in
                    transition={{ duration: 0.75, ease: "easeInOut" }}  // Smooth transition
                >
                    <img src='res/student.png' alt='student' />
                </motion.div>

                <motion.div className='login-right'
                    initial={{ x: 100, opacity: 0 }} // Start off-screen to the left
                    animate={{ x: 0, opacity: 1 }}  // Move to position with fade-in
                    transition={{ duration: 0.75, ease: "easeInOut" }}  // Smooth transition
                >
                    <form onSubmit={handleSubmit} method='post'>
                        <h1>Student Registration</h1>

                        <label>Name</label>
                        <input type='text' placeholder='Username' name='name' value={formData.name} onChange={handleChange} required />

                        <label>Email</label>
                        <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />

                        <label>Password</label>
                        <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleChange} required />

                        <label>Phone</label>
                        <input type='text' placeholder='Phone' name='phone' value={formData.phone} onChange={handleChange} required />

                        {error && <p className="error">{error}</p>}

                        <button type='submit' className='registerBtn'>Register</button>
                    </form>
                    <p className='text'>Already have an account? <button onClick={() => navigate('/login')}>Login</button></p>
                </motion.div>
            </div>
        </div>
    );
}

export default Register;
