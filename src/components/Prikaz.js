import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa'; 
import '../css/Prikaz.css';

function Prikaz({ destinacije, obrisiDestinaciju, setEditovane,trenutniKorisnik }) {
  const [editableRow, setEditableRow] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEdit = (id) => {
    setEditableRow(id);
    //console.log(trenutniKorisnik[0].id);
  };

  const handleConfirmEdit = (id) => {
    const updatedDestinacije = destinacije.map((destinacija) => {
      if (destinacija.id === id && editedData[id]) {
        return {
          ...destinacija,
          unosImena: editedData[id].ime || destinacija.unosImena,
          unosPrezimena: editedData[id].prezime || destinacija.unosPrezimena,
          unosDestinacije: editedData[id].destinacija || destinacija.unosDestinacije,
        };
      }
      return destinacija;
    });

    setEditableRow(null);
    setEditedData({});
    // Ažuriranje stanja destinacija
    setEditovane(updatedDestinacije);
  };

  const handleInputChange = (e, column, id) => {
    const value = e.target.value;
    setEditedData((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        [column]: value,
      },
    }));
  };

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
        {JSON.parse(localStorage.getItem('prikaz')).map((destinacija) => (
          <tr key={destinacija.id}>
            <td>
              {editableRow === destinacija.id ? (
                <input
                  type="text"
                  value={editedData[destinacija.id]?.ime || destinacija.ime}
                  onChange={(e) => handleInputChange(e, 'ime', destinacija.id)}
                />
              ) : (
                destinacija.ime
              )}
            </td>
            <td>
              {editableRow === destinacija.id ? (
                <input
                  type="text"
                  value={editedData[destinacija.id]?.prezime || destinacija.prezime}
                  onChange={(e) => handleInputChange(e, 'prezime', destinacija.id)}
                />
              ) : (
                destinacija.prezime              )}
            </td>
            <td>
              {editableRow === destinacija.id ? (
                <input
                  type="text"
                  value={editedData[destinacija.id]?.destinacija || destinacija.destination_name}
                  onChange={(e) => handleInputChange(e, 'destinacija', destinacija.id)}
                />
              ) : (
                destinacija.destination_name
              )}
            </td>
            <td>
              {editableRow === destinacija.id ? (
                <button className="confirmEditBtn" onClick={() => handleConfirmEdit(destinacija.id)}>
                  <FaCheck />
                </button>
              ) : (
                <button className="editBtn" onClick={() => handleEdit(destinacija.id)}>
                  <FaEdit />
                </button>
              )}
              <button className="deleteBtn" onClick={() => obrisiDestinaciju(destinacija.id)}>
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Prikaz;