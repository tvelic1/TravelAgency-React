import React, { useState } from 'react';
import '../css/Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Signup({ dodajK }) {
    const [unosMail, setUnos] = useState('');
    const [unosImena, setIme] = useState('');
    const [unosPrezimena, setPrezime] = useState('');
    const [unosUsera, setUser] = useState('');
    const [unosPw, setPw] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let x = parseInt(localStorage.getItem('id1') || '0', 10);
        x += 1;

        localStorage.setItem('id1', x.toString());

        dodajK({ id: x, unosMail, unosImena,unosPrezimena, unosUsera, unosPw });

        setUnos('');
        setIme('');
        setPrezime('');
        setUser('');
        setPw('');

        navigate('/');
    };
    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Registracija</h2>
                <div className="form-group">
                    <label htmlFor="username">Ime:</label>
                    <input type="text" id="username" name="username" value={unosImena} onChange={(e) => setIme(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="prezime">Prezime:</label>
                    <input type="text" id="prezime" name="prezime" value={unosPrezimena} onChange={(e) => setPrezime(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="user">Username:</label>
                    <input type="text" id="user" name="user" value={unosUsera} onChange={(e) => setUser(e.target.value)} required />
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
