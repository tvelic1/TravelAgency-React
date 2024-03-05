import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Unos.css'; 

function Unos({ dodaj,rezervisan }) {
  const [unosPrezimena, setPrezime] = useState('');
  const navigate = useNavigate();
  const prikazImena = JSON.parse(localStorage.getItem("trenutni"));

useEffect(() => {
  if(rezervisan && rezervisan.length > 0){
      localStorage.setItem('r', JSON.stringify(rezervisan[0].ime)); 
  }
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let x = parseInt(localStorage.getItem('id') || '0', 10);
    x += 1;
    localStorage.setItem('id', x.toString());
    dodaj({ id: x, unosDestinacije:JSON.parse(localStorage.getItem('r')), unosImena: prikazImena[0].unosImena, unosPrezimena });
    setPrezime('');

    navigate('/products'); 
  };

  return (
    <form onSubmit={handleSubmit} className="unosForma">
      <input type="text" value={JSON.parse(localStorage.getItem('r'))} readOnly placeholder="Destinacija" />
      <input type="text" value={prikazImena[0].unosImena} placeholder="Ime" readOnly />
      <input type="text" value={unosPrezimena} onChange={(e) => setPrezime(e.target.value)} placeholder="Prezime" />
      <button type="submit">Rezervisi</button>
    </form>
  );
}

export default Unos;
