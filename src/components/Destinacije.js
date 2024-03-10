import React, { useEffect, useState } from 'react';
import '../css/destinacije.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Destinacije({ rezervacija, flag }) {
  const navigate = useNavigate();
  const [destinacije, setDestinacije] = useState([]);

  const rezervisiDestinaciju = (did) => { 
    axios.post('/rezervisi', { id: did , ajdi: JSON.parse(localStorage.getItem('trenutni')).id
  })
      .then(response => {
        axios.post('/res', { id: did, ajdi: JSON.parse(localStorage.getItem('trenutni')).id})
        .then(resp => {rezervacija(resp.data[0]); navigate('/unos')})
        .catch(error => {
          console.error('Došlo je do greške', error);
        })
      })
      .catch(error => {
        // Obradite moguće greške
        console.error('Došlo je do greške', error);
      });
  };

  const formatirajDatum = (datum) => {
    const dateObj = new Date(datum);
    const dan = dateObj.getDate();
    const mjesec = dateObj.getMonth() + 1; // Mjeseci kreću od 0, pa se dodaje 1
    const godina = dateObj.getFullYear();
    return `${dan}.${mjesec}.${godina}`;
  };
  useEffect(() => {
    fetch('http://localhost:4000/destinacije') // Dodajte http:// za lokalni server
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Pretvara odgovor u JSON
      })
      .then(data => setDestinacije(data)) // Sprema podatke u stanje
      .catch(error => console.error('There was a problem with your fetch operation:', error));
  }, []); // Prazan niz kao drugi argument osigurava da se efekt pokrene samo jednom

  return (
    <div className='destinacije'>
      {destinacije.map((destinacija) => (
        <div className='komponenta' key={destinacija.id}>
          <h2>{destinacija.naziv}</h2>
          <p>Cijena: {destinacija.cijena} KM</p>
          <p>Krajnji datum prijave: {formatirajDatum(destinacija.datum)} </p>
          <img src={destinacija.slika} alt={destinacija.naziv} />
          {flag && <button onClick={() => rezervisiDestinaciju(destinacija.id)}>
            Rezerviši
          </button>}
        </div>
      ))}
    </div>
  );
}

export default Destinacije;
