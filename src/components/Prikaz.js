import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import '../css/Prikaz.css';

function Prikaz({ destinacije, obrisiDestinaciju, setEditovane, trenutniKorisnik }) {
  const [editableRow, setEditableRow] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [destinacijeData, setDestinacijeData] = useState([]);
  const [prikazData, setPrikazData] = useState([]);


  useEffect(() => {
    setPrikazData(JSON.parse(localStorage.getItem('prikaz')))
    fetch('http://localhost:4000/destinacije')
      .then(response => response.json())
      .then(data => setDestinacijeData(data))
      .catch(error => console.error('Error fetching destinations:', error));

  }, []);

  const handleEdit = (id) => {
    setEditableRow(id);
  };

  const handleSelectChange = (e, id) => {
    const value = e.target.value;
    setEditedData((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        destinacija: value,
      },
    }));
  };

  const handleConfirmEdit = (id) => {
    let editedDestinationId = editedData[id]?.destinacija;
    console.log("Data ", editedData)
    if (!editedDestinationId) editedDestinationId = destinacijeData[0].id
    fetch(`http://localhost:4000/rezervacija/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ destinacijaId: editedDestinationId }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Neuspješno ažuriranje rezervacije.');
        }
        console.log('Rezervacija uspješno ažurirana.');

        // Ako je ažuriranje uspješno, ažuriraj stanje i zaključaj polje
        setEditableRow(null);
        setEditedData((prevData) => {
          const newData = { ...prevData };
          delete newData[id];
          return newData;
        });

        const ajdi = JSON.parse(localStorage.getItem('trenutni')).id;
        const url = 'http://localhost:4000/prikazi';

        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ajdi: ajdi })
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setPrikazData(data);
            localStorage.setItem('prikaz', JSON.stringify(data));
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.error('Greška prilikom ažuriranja rezervacije:', error.message));
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
        {prikazData.map((destinacija) => (
          <tr key={destinacija.id}>
            <td>
              {destinacija.ime}
            </td>
            <td>
              {destinacija.prezime}
            </td>
            <td>
              {editableRow === destinacija.id ? (
                <select
                  value={editedData[destinacija.id]?.destinacija || destinacija.destination_name}
                  onChange={(e) => handleSelectChange(e, destinacija.id)}
                >
                  {destinacijeData.map((item) => (
                    <option key={item.id} value={item.id}>{item.naziv}</option>
                  ))}
                </select>
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
