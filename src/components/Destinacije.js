import React, { useState } from 'react';
import '../css/destinacije.css';
import { useNavigate } from 'react-router-dom';

function Destinacije({rezervacija,flag}) {
    const navigate = useNavigate();
    const [destinacije, setDestinacije] = useState([
    {
      id: 1,
      ime: 'Istanbul',
      cijena: '100',
      datum: '2024-03-10',
      slikaUrl: '/istanbul.jpg'
    },
    {
      id: 2,
      ime: 'Pariz',
      cijena: '150',
      datum: '2024-03-15',
      slikaUrl: '/paris.jpg'
    },
    {
      id: 3,
      ime: 'Barselona',
      cijena: '200',
      datum: '2024-03-20',
      slikaUrl: '/barcelona.jpg'
    },
    {
      id: 4,
      ime: 'Firenca',
      cijena: '250',
      datum: '2024-03-25',
      slikaUrl: '/firenza.jpg'
    },
    {
      id: 5,
      ime: 'London',
      cijena: '300',
      datum: '2024-03-30',
      slikaUrl: '/london.jpg'
    }
  ]);

  // Funkcija za rezervaciju koja se poziva na klik dugmeta
  const rezervisiDestinaciju = (id) => {
    rezervacija(destinacije.filter(x=>x.id==id));
    //console.log(`Rezervisana je destinacija sa ID: ${JSON.stringify(destinacije.filter(x=>x.id==id))}`);
    navigate('/unos')
  };

  return (
    <div className='destinacije'>
      {destinacije.map((destinacija) => (
        <div className='komponenta' key={destinacija.id}>
          <h2>{destinacija.ime}</h2>
          <p>Cijena: {destinacija.cijena} KM</p>
          <p>Krajnji datum prijave: {destinacija.datum}</p>
          <img src={destinacija.slikaUrl} alt={destinacija.ime} />
          {flag && <button onClick={() => rezervisiDestinaciju(destinacija.id)}>
            Rezerviši
          </button>}
        </div>
      ))}
    </div>
  );
}

export default Destinacije;
