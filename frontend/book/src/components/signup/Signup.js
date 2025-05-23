import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from "./Signup.module.css";


function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
            alert("Signup successful");
            navigate('/login');
        } catch (err) {
            alert("Signup failed");
        }
    };

    return (

        <div className={styles.signupContainer}>
            <div className={`${styles.set} ${styles.paddingForm}`}>
                <form onSubmit={handleSubmit}>
                    <h1 style={{color : 'white'}}> Signup </h1>
                    <p style={{color : "white"}}> Create your account</p>

                    <div>
                        <input className={`${styles.setMarginBottom} ${styles.fixed}`}  placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        <i className="fas fa-user fa-fw logo-lock"></i>
                    </div>

                    <div>
                        <input className={`${styles.setMarginBottom} ${styles.fixed}`}  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <i className="fas fa-envelope fa-fw logo-mail"></i>
                    </div>
                    <div>
                        <input className={`${styles.setMarginBottom} ${styles.fixed}`}  type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <i className="fas fa-lock fa-fw logo-pass"></i>
                    </div>


                    <p  style={{color : 'white'}}> Already a member? <a href="/login">Log in</a></p>

                    <button type="submit" className={styles.setSignUp}> Sign up </button>

                </form>
            </div>
        </div>

    );
}

export default Signup;
