import Navbar from './Navbar';
import '../css/App.css';
import Unos from './Unos';
import Prikaz from './Prikaz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Signup from './Signup';
import Prijava from './Prijava';
import Home from './Home';
import Cards from './Cards';

import Destinacije from './Destinacije';


function App() {
  const [destinacije, setDestinacija] = useState([]);
  const [korisnici, setKorisnici] = useState([]);
  const [trenutniKorisnik, setTrenutnog] = useState('');

  const [trenutnarez, setRez] = useState('');

  const [flag, setFlag] = useState(false);

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
  const callbackRez = (x) => {
    setRez(x);
    localStorage.setItem('rez', JSON.stringify(x));

  }
  const callbackTrenutni = (x) => {
    setFlag(true);
    localStorage.setItem('flag', true)
    setTrenutnog(x);
    localStorage.setItem('trenutni', JSON.stringify(x));


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
          <Route path="/unos" element={<Unos dodaj={dodajDestinaciju} />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/products" element={<Prikaz destinacije={destinacije} obrisiDestinaciju={obrisiDestinaciju} setEditovane={callbackEdit} trenutniKorisnik={trenutniKorisnik} />} />
          <Route path="/sign-up" element={<Signup dodajK={dodajKorisnika} korisnici={korisnici} />} />
          <Route path="/" element={<Prijava korisnici={korisnici} callbackTrenutni={callbackTrenutni} />} />
          <Route path="/dest" element={<Destinacije rezervacija={callbackRez} flag={flag} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;