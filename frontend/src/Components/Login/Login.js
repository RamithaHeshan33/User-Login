import './Login.css';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    return (
        <div>
            <div className='Login'>
                <div className='login-left'>
                    <img src='res/student.png' alt='student' />
                </div>

                <div className='login-right'>
                    <form method='post'>
                        <h1>Student Login</h1>

                        <label>Email</label>
                        <input type='email' placeholder='Email' name='email'  required />

                        <label>Password</label>
                        <input type='password' placeholder='Password' name='password' required />

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

export default Login;