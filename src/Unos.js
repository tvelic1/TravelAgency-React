import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Unos.css'; // Pretpostavimo da ste spremili gornje stilove u Unos.css

function Unos({ dodaj }) {
  const [unosDestinacije, setUnos] = useState('');
  const [unosImena, setIme] = useState('');
  const [unosPrezimena, setPrezime] = useState('');
  const navigate = useNavigate();
  const prikazImena=JSON.parse(localStorage.getItem("trenutni"));

 const handleSubmit = (e) => {
    e.preventDefault();
    let x = parseInt(localStorage.getItem('id') || '0', 10);
    x += 1; 
      localStorage.setItem('id', x.toString());
      dodaj({ id: x, unosDestinacije, unosImena:prikazImena[0].unosImena, unosPrezimena });
      setUnos('');
    setIme('');
    setPrezime('');
  
    navigate('/products'); 
  };
  

  return (
    <form onSubmit={handleSubmit} className="unosForma">
      <input type="text" value={unosDestinacije} onChange={(e) => setUnos(e.target.value)} placeholder="Destinacija" />
      <input type="text" value={prikazImena[0].unosImena} placeholder="Ime" readOnly />
      <input type="text" value={unosPrezimena} onChange={(e) => setPrezime(e.target.value)} placeholder="Prezime" />
      <button type="submit">Rezervisi</button>
    </form>
  );
}

export default Unos;
