import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/signup.css';

export const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        quizNumber: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const registerUser = (e) => {
        e.preventDefault();

        // Ambil data pengguna yang sudah ada di Local Storage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Periksa apakah email sudah terdaftar
        const isEmailRegistered = users.some(user => user.email === formData.email);
        if (isEmailRegistered) {
            alert("Email sudah terdaftar. Silakan gunakan email lain.");
            return;
        }

        // Simpan data pengguna baru
        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));

        console.log("User Registered:", formData);
        navigate('/login');
    };

    return (
        <div className="signUpForm-container">
            <div className="signUpForm-wrapper">
                <h1>Register</h1>
                <form onSubmit={registerUser}>
                    <label htmlFor="fullName">Nama Lengkap</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="quizNumber">No Kuis</label>
                    <input
                        type="number"
                        id="quizNumber"
                        name="quizNumber"
                        value={formData.quizNumber}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" style={{ marginTop: '10px' }}>Register</button>
                </form>
                <Link to="/login">Already have an account? Login</Link>
            </div>
        </div>
    );
};
