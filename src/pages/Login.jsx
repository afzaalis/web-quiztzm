import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css';

export const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const loginUser = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            user => user.email === loginData.email && user.password === loginData.password
        );

        if (user) {
            console.log("Login successful");
            navigate('/dashboard');
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="loginForm-container">
            <div className="loginForm-wrapper">
                <h1>Login</h1>
                <form onSubmit={loginUser}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" style={{ marginTop: '10px' }}>Login</button>
                </form>
                <Link to="/signup">Don't have an account? Register</Link>
            </div>
        </div>
    );
};
