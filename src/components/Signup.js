import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [spol, setSpol] = useState(true); // True za muško, false za žensko
    const navigate = useNavigate();

    const [flag, setFlag] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', {
                ime,
                prezime,
                username: user,
                email,
                password,
                daLiJeAdmin: false, // Nije admin
                spol
            });
            console.log(response.data);
            setFlag(false);
            navigate('/')
            // Dodajte redirekciju ili drugu logiku nakon uspješne registracije
        } catch (error) {
            console.error('Greška prilikom registracije:', error);
            setFlag(true);
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Registracija</h2>
                <div className="form-group">
                    <label htmlFor="username">Ime:</label>
                    <input type="text" id="username" name="username" value={ime} onChange={(e) => setIme(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="prezime">Prezime:</label>
                    <input type="text" id="prezime" name="prezime" value={prezime} onChange={(e) => setPrezime(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="user">Username:</label>
                    <input type="text" id="user" name="user" value={user} onChange={(e) => setUser(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Lozinka:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>
                        Spol:
                        <input type="radio" name="spol" value="true" checked={spol === true} onChange={() => setSpol(true)} /> Muško
                        <input type="radio" name="spol" value="false" checked={spol === false} onChange={() => setSpol(false)} /> Žensko
                    </label>
                </div>
                <div className="form-group">
                    <button type="submit" className="signup-button">Registriraj se</button>
                </div>
                <Link to="/" className="signup-link">Ako imaš račun, prijavi se</Link>
                {flag && <p id="warn">Korisnik sa istim username već postoji, promijenite username</p>}
            </form>
        </div>
    );
}

export default SignUp;