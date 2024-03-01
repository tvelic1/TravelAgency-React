import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Unos.css'; // Pretpostavimo da ste spremili gornje stilove u Unos.css

function Unos({ dodaj }) {
  const [unosDestinacije, setUnos] = useState('');
  const [unosImena, setIme] = useState('');
  const [id, setId] = useState(0);
  const [unosPrezimena, setPrezime] = useState('');
  const navigate = useNavigate();
 //localStorage.setItem('id',id);
 const handleSubmit = (e) => {
    e.preventDefault();
  
    // Dohvati trenutni id iz localStorage-a i pretvori ga u broj. Ako ne postoji, postavi na 0.
    let x = parseInt(localStorage.getItem('id') || '0', 10);
    x += 1; // Povećavamo x za 1
  
    // Sačuvaj novi uvećani id natrag u localStorage
    localStorage.setItem('id', x.toString());
  
    // Proslijedi novi id zajedno s ostalim podacima o destinaciji
    dodaj({ id: x, unosDestinacije, unosImena, unosPrezimena });
  
    // Resetuj polja forme
    setUnos('');
    setIme('');
    setPrezime('');
  
    // Preusmjeri na stranicu za prikaz
    navigate('/products');
  };
  

  return (
    <form onSubmit={handleSubmit} className="unosForma">
      <input type="text" value={unosDestinacije} onChange={(e) => setUnos(e.target.value)} placeholder="Destinacija" />
      <input type="text" value={unosImena} onChange={(e) => setIme(e.target.value)} placeholder="Ime" />
      <input type="text" value={unosPrezimena} onChange={(e) => setPrezime(e.target.value)} placeholder="Prezime" />
      <button type="submit">Rezervisi</button>
    </form>
  );
}

export default Unos;
