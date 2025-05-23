import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            alert("Login successful");
            navigate('/index');
        } catch (err) {
            alert("Login failed");
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.wrapper}>
                    <div className={styles.pad}> 
                        <h1 className={`${styles.align} ${styles.marginLogin}`}> Login </h1>
                        <div>
                            <input className={styles.setInput} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                            <i className="fas fa-user fa-fw logo-user"></i>
                        </div>

                        <div>
                            <input className={styles.setInput} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <i className="fas fa-lock fa-fw logo-lock"></i>
                        </div>

                        <div className={`${styles.align} ${styles.setMe}`}>
                            <input type="checkbox"  id="check1" name="option1" value="something" checked />
                             <span className={styles.remember}>Remember me</span>
                             <button className={`${styles.alignItem} ${styles.setSubmit}`} type="submit">Login</button>
                        </div>

                        <p className="accounSet"> Don't have an account? <a href="/signup"> Sign up </a></p>
                        <a href="/forgot-password">Forgot password?</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
