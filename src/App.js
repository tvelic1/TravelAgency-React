import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Unos from './Unos';
import Prikaz from './Prikaz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function App() {
  const [destinacije,setDestinacija]=useState([]);
  useEffect(() => {
    const sacuvaneDestinacije = JSON.parse(localStorage.getItem('destinacije'));
    if (sacuvaneDestinacije) {
      setDestinacija(sacuvaneDestinacije);
    }
  }, []);

  const dodajDestinaciju = (novaDestinacija) => {
    setDestinacija(prev => {
      const noveDestinacije = [...prev, novaDestinacija];
      // Spremanje u localStorage
      localStorage.setItem('destinacije', JSON.stringify(noveDestinacije));
      return noveDestinacije;
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
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="/sign-up" element={<Unos dodaj={dodajDestinaciju} />} />
        <Route path="/products" element={<Prikaz destinacije={destinacije} obrisiDestinaciju={obrisiDestinaciju}/>} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
