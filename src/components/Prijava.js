import React, { useState } from 'react';
import '../css/Prijava.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Prijava({ korisnici, callbackTrenutni }) {
    const [unosImenaa, setIme] = useState('');
    const [unosPwa, setPw] = useState('');
    const navigate = useNavigate();
    //localStorage.setItem('id',id);
    const handleSubmit = (e) => {
        let user = korisnici.filter(x => x.unosUsera == unosImenaa && x.unosPw == unosPwa);
        if (user.length) {
            navigate('/home');
            callbackTrenutni(user);
        }
    };
    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Prijava</h2>
                <div className="form-group">
                    <label htmlFor="username">Korisničko ime:</label>
                    <input type="text" id="username" name="username" value={unosImenaa} onChange={(e) => setIme(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Lozinka:</label>
                    <input type="password" id="password" name="password" value={unosPwa} onChange={(e) => setPw(e.target.value)} required />
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
