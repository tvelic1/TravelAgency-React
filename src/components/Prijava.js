import React, { useState } from 'react';
import '../css/Prijava.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'


function Prijava({ korisnici, callbackTrenutni }) {
    const [username, setIme] = useState('');
    const [password, setPw] = useState('');
    const navigate = useNavigate();
    //localStorage.setItem('id',id);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', {
                username,
                password
                
            });
            console.log(response.data);
            callbackTrenutni();
            navigate('/home')
            // Dodajte redirekciju ili drugu logiku nakon uspješne registracije
        } catch (error) {
            console.error('Greška prilikom prijave:', error);
        }
    };
    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Prijava</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setIme(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Lozinka:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPw(e.target.value)} required />
                </div>
                <div className="form-group">
                    <button type="submit" className="signup-button">Prijava</button>
                </div>
                <div className="form-group">
                    <Link to="/sign-up" className="signup-link">Nemaš račun? Registriraj se</Link>
                </div>
            </form>
        </div>
    );
}

export default Prijava;
