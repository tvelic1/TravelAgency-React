import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Importujete ikonicu kante za smeće
import './Prikaz.css'

function Prikaz({ destinacije, obrisiDestinaciju }) {
    return (
      <ul className='prikaz'>
        {destinacije.map((destinacija) => (
          <li className='zakpri' key={destinacija.id}>
            Destinacija: {destinacija.unosDestinacije}, Ime: {destinacija.unosImena}, Prezime: {destinacija.unosPrezimena}
            <button className="deleteBtn" onClick={() => obrisiDestinaciju(destinacija.id)}>
  <FaTrash />
</button>          </li>
        ))}
      </ul>
    );
  }
  
export default Prikaz;
