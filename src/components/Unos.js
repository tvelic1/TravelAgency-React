import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Unos.css'; 

function Unos({ dodaj}) {
  const navigate = useNavigate();
  const prikazImena = JSON.parse(localStorage.getItem("trenutni"));
  

/*useEffect(() => {
  if(rezervisan && rezervisan.length > 0){
      localStorage.setItem('r', JSON.stringify(rezervisan[0].ime)); 
  }
  setPrezime(JSON.parse(localStorage.getItem('r')));
}, []);*/

  const handleSubmit = (e) => {
    e.preventDefault();
    let x = parseInt(localStorage.getItem('id') || '0', 10);
    x += 1;
    localStorage.setItem('id', x.toString());
    dodaj({ id: x, unosDestinacije:JSON.parse(localStorage.getItem('r')), unosImena: prikazImena[0].unosImena, unosPrezimena:prikazImena[0].unosPrezimena });
    navigate('/products'); 
  };

  return (
    <form onSubmit={handleSubmit} className="unosForma">
      <input type="text" value={JSON.parse(localStorage.getItem('r'))} readOnly placeholder="Destinacija" />
      <input type="text" value={prikazImena[0].unosImena} placeholder="Ime" readOnly />
      <input type="text" value={prikazImena[0].unosPrezimena} readOnly  placeholder="Prezime" />
      <button type="submit">Rezervisi</button>
    </form>
  );
}

export default Unos;
