import Navbar from './Navbar';
import '../css/App.css';
import Unos from './Unos';
import Prikaz from './Prikaz';
import { BrowserRouter as Router, Routes, Route, json } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Signup from './Signup';
import Prijava from './Prijava';
import Home from './Home';
import Destinacije from './Destinacije';


function App() {
  const [destinacije, setDestinacija] = useState([]);
  const [korisnici, setKorisnici] = useState([]);
  const [trenutniKorisnik, setTrenutnog] = useState('');
  const [flag, setFlag] = useState(false);
const [rezervisan,setRezervisan]=useState('');



  useEffect(() => {
    const sacuvaneDestinacije = JSON.parse(localStorage.getItem('destinacije'));
    if (sacuvaneDestinacije) {
      setDestinacija(sacuvaneDestinacije);
    }
    const sacuvaniKorisnici = JSON.parse(localStorage.getItem('korisnici'));
    if (sacuvaniKorisnici) {
      setKorisnici(sacuvaniKorisnici);
    }
    const flag = JSON.parse(localStorage.getItem('flag')) || false;
    setFlag(flag);
    const sacuvaniKorisnik = JSON.parse(localStorage.getItem('trenutni'));
    if (sacuvaniKorisnik) {
      setTrenutnog(sacuvaniKorisnik);
    }

  }, []);

  const callbackEdit = (x) => {
    setDestinacija(x);
    localStorage.setItem('destinacije', JSON.stringify(x));

  }
  const rezervacija =(x)=>{
    setRezervisan(x);
    localStorage.setItem('rezervacija',JSON.stringify(x));
  }
  const callbackTrenutni = (x) => {
    setTrenutnog(x);
    localStorage.setItem('trenutni', JSON.stringify(x))
    setFlag(true);
    localStorage.setItem('flag', true)

  }
  const izadji = () => {
    setFlag(false);
    localStorage.setItem('flag', false)

  }
  const dodajDestinaciju = (novaDestinacija) => {
    setDestinacija(prev => {
      const noveDestinacije = [...prev, novaDestinacija];
      localStorage.setItem('destinacije', JSON.stringify(noveDestinacije));
      return noveDestinacije;
    });
  };
  const dodajKorisnika = (nova) => {
    setKorisnici(prev => {
      const novi = [...prev, nova];
      localStorage.setItem('korisnici', JSON.stringify(novi));
      return novi;
    });
  };
  const obrisiDestinaciju = (id) => {
    const filtriraneDestinacije = destinacije.filter(destinacija => destinacija.id !== id);
    setDestinacija(filtriraneDestinacije);
    localStorage.setItem('destinacije', JSON.stringify(filtriraneDestinacije));
  };

  return (
    <>
      <Router>
        <Navbar flag={flag} izadji={izadji} />
        <Routes>
          <Route path='/home' exact element={<Home flag={flag} trenutniKorisnik={trenutniKorisnik} />} />
          <Route path="/unos" element={<Unos dodaj={dodajDestinaciju} rezervisan={rezervisan} />} />
          <Route path="/products" element={<Prikaz destinacije={destinacije} obrisiDestinaciju={obrisiDestinaciju} setEditovane={callbackEdit} />} />
          <Route path="/sign-up" element={<Signup dodajK={dodajKorisnika} />} />
          <Route path="/" element={<Prijava korisnici={korisnici} callbackTrenutni={callbackTrenutni} />} />
          <Route path="/dest" element={<Destinacije rezervacija={rezervacija} flag={flag} />} />




        </Routes>
      </Router>
    </>
  );
}

export default App;