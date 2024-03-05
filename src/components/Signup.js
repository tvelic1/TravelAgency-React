import React, { useState } from 'react';
import '../css/Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Signup({ dodajK }) {
    const [unosMail, setUnos] = useState('');
    const [unosImena, setIme] = useState('');
    const [unosPw, setPw] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let x = parseInt(localStorage.getItem('id1') || '0', 10);
        x += 1;

        localStorage.setItem('id1', x.toString());

        dodajK({ id: x, unosMail, unosImena, unosPw });

        setUnos('');
        setIme('');
        setPw('');

        navigate('/');
    };
    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Registracija</h2>
                <div className="form-group">
                    <label htmlFor="username">Korisničko ime:</label>
                    <input type="text" id="username" name="username" value={unosImena} onChange={(e) => setIme(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={unosMail} onChange={(e) => setUnos(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Lozinka:</label>
                    <input type="password" id="password" name="password" value={unosPw} onChange={(e) => setPw(e.target.value)} required />
                </div>
                <div className="form-group">
                    <button type="submit" className="signup-button">Registriraj se</button>
                </div>
                <Link to="/" className="signup-link">Ako imaš račun, prijavi se</Link>

            </form>
        </div>
    );
}

export default Signup;
