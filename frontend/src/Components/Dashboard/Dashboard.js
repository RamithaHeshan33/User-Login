import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/students/profile'; // Updated endpoint

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const response = await fetch(API_URL, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const data = await response.json();

                if (response.ok) {
                    setUser(data);
                } else {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Failed to fetch user:', error);
                localStorage.removeItem('token');
                navigate('/login');
            }
        };

        fetchUserDetails();
    }, [navigate]);

    return (
        <div className="dashboard-container">
            <h1>Welcome to Your Dashboard</h1>
            {user ? (
                <div className="user-info">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <button 
                        className="logout-btn"
                        onClick={() => {
                            localStorage.removeItem('token');
                            navigate('/login');
                        }}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
}

export default Dashboard;