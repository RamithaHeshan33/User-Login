import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/students/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
            console.log("Login response:", data);
    
            if (response.ok) {
                if (!data.user) {
                    alert("Login failed! No user data found.");
                    return;
                }
    
                alert("Login Successful!");
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/dashboard');
            } else {
                setError(data.message || "Invalid email or password");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Something went wrong. Please try again.");
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
                    <form onSubmit={handleLogin}>
                        <h1>Student Login</h1>

                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <label>Email</label>
                        <input 
                            type='email' 
                            placeholder='Email' 
                            name='email'  
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />

                        <label>Password</label>
                        <input 
                            type='password' 
                            placeholder='Password' 
                            name='password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />

                        <button type='submit' className='loginBtn'>Login</button>
                    </form>

                    <p className='text'>
                        Don't have an account? <button onClick={() => navigate('/register')}>Register</button>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Login;
