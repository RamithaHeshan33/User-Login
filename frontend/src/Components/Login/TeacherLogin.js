import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/students/teachers/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
            console.log("Login response:", data);
    
            if (response.ok) {
                if (!data.teacher) { // ✅ Fix here
                    alert("Login failed! No user data found.");
                    return;
                }
    
                alert("Login Successful!");
                localStorage.setItem('user', JSON.stringify(data.teacher)); // ✅ Fix here
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
                <div className='login-left'>
                    <img src='res/student.png' alt='student' />
                </div>

                <div className='login-right'>
                    <form onSubmit={handleLogin}>
                        <h1>Teacher Login</h1>

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
                </div>
            </div>
        </div>
    );
}

export default TeacherLogin;
