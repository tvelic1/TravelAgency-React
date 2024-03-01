import React from 'react';
import { FaTrash,FaEdit } from 'react-icons/fa'; // Importujete ikonicu kante za smeće
import './Prikaz.css'

function Prikaz({ destinacije, obrisiDestinaciju,zapocniEdit }) {
    return (
      <table className='prikaz'>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Destinacija</th>
            <th>Akcija</th>
          </tr>
        </thead>
        <tbody>
          {destinacije.map((destinacija) => (
            <tr key={destinacija.id}>
              <td>{destinacija.unosImena}</td>
              <td>{destinacija.unosPrezimena}</td>
              <td>{destinacija.unosDestinacije}</td>
              <td>
                <button className="deleteBtn" onClick={() => obrisiDestinaciju(destinacija.id)}>
                  <FaTrash />
                </button>
                <button className="editBtn" onClick={() => zapocniEdit(destinacija.id)}>
                  <FaEdit />
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
  
export default Prikaz;
