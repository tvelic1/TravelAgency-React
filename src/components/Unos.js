import React, { useState,useEffect } from 'react';
import { json, useNavigate} from 'react-router-dom';
import '../css/Unos.css'; 
import axios from 'axios';

function Unos({ dodaj,}) {
 
  const navigate = useNavigate();
 


  const handleSubmit = (e) => {
    e.preventDefault(); // Pretpostavljam da želite sprečiti podrazumevano ponašanje forme
  
    const ajdi = JSON.parse(localStorage.getItem('trenutni')).id;
    const url = 'http://localhost:4000/prikazi';
    
    fetch(url, {
      method: 'POST', // Koristimo POST metodu
      headers: {
        'Content-Type': 'application/json', // Postavljamo Content-Type header na application/json
      },
      body: JSON.stringify({ ajdi: ajdi }) // Šaljemo 'ajdi' u telu zahteva kao JSON
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('prikaz', JSON.stringify(data));
      navigate('/products'); // Pretpostavka je da imate useNavigate hook za navigaciju
    })
    .catch(error => console.log(error));
  
  };
  

  return (
    <form onSubmit={handleSubmit} className="unosForma">
    <p className="reservationDetails">Detalji vaše rezervacije: </p>
      <input type="text" value={JSON.parse(localStorage.getItem('rez')).destination_name} readOnly placeholder="Destinacija" />
      <input type="text" value={JSON.parse(localStorage.getItem('rez')).ime} placeholder="Ime" readOnly />
      <input type="text" value={JSON.parse(localStorage.getItem('rez')).prezime} readOnly  placeholder="Prezime" />
      <button type="submit">Pogledaj sve rezervacije</button>
    </form>
  );
}

export default Unos;
