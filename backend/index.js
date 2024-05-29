const express =require('express')
const bp =require('body-parser')
const app=express()
const mysql=require('mysql')
const cors=require('cors')
const session = require('express-session');

app.use(session({
  secret: 'tajna', // Tajni ključ za potpisivanje ID-a 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
app.use(cors());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"reakt"
})
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to the database successfully.");
});

app.get('/destinacije', (req, res) => {
    db.query("SELECT * FROM destinacija", (err, result) => {
        if (err) {
            
          
            return res.status(500).send(err);
        }
        
        res.json(result);
    });
});
app.get('/rezervacije', (req, res) => {
    db.query("SELECT * FROM rezervacija", (err, result) => {
        if (err) {
            // Ako dođe do greške, šaljemo status 500 (Internal Server Error) i poruku o grešci
            return res.status(500).send(err);
        }
        // Ako nema greške, šaljemo dobijene podatke koristeći res.json()
        res.json(result);
    });
});
app.delete('/rezervacije/:id', (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).send("ID nije dostupan");
    }

    db.query("DELETE FROM rezervacija WHERE id = ?", id, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).send("Nema rezervacije s tim ID-om");
        }

        res.status(200).send("Rezervacija uspješno obrisana");
    });
});

app.put('/rezervacija/:id', (req, res) => {
    const { id } = req.params;
    const { destinacijaId } = req.body;
  
    db.query(
      "UPDATE rezervacija SET destinacijaId = ? WHERE id = ?",
      [destinacijaId, id],
      (err, result) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).send("Rezervacija uspješno ažurirana.");
      }
    );
  });
  
app.post('/res', (req, res) => {
    db.query("SELECT u.ime, u.prezime, d.naziv AS destination_name FROM rezervacija p JOIN korisnik u ON p.korisnikId = u.id JOIN destinacija d ON p.destinacijaId = d.id WHERE p.korisnikId = ? and p.destinacijaId = ?",[req.body.ajdi,req.body.id], (err, result) => {
        if (err) {
            // Ako dođe do greške, šaljemo status 500 (Internal Server Error) i poruku o grešci
            return res.status(500).send(err);
        }
        // Ako nema greške, šaljemo dobijene podatke koristeći res.json()
        res.json(result);
    });
});
app.post('/prikazi', (req, res) => {
    db.query("SELECT p.id, u.ime, u.prezime, d.naziv AS destination_name FROM rezervacija p JOIN korisnik u ON p.korisnikId = u.id JOIN destinacija d ON p.destinacijaId = d.id WHERE p.korisnikId = ?",[req.body.ajdi], (err, result) => {
        if (err) {
            // Ako dođe do greške, šaljemo status 500 (Internal Server Error) i poruku o grešci
            return res.status(500).send(err);
        }
        // Ako nema greške, šaljemo dobijene podatke koristeći res.json()
        res.status(200).json(result);
    });
});
app.post('/register', (req, res) => {
    const { ime, prezime, username, password, email, daLiJeAdmin, spol } = req.body;
    
    // Provjera da li postoji korisnik s istim korisničkim imenom
    const checkQuery = "SELECT * FROM korisnik WHERE username = ?";
    db.query(checkQuery, [username], (checkError, checkResults, checkFields) => {
        if (checkError) {
            res.status(500).json({ error: checkError.message });
        } else {
            if (checkResults.length > 0) {
                // Korisnik s istim korisničkim imenom već postoji
                res.status(400).json({ error: 'Korisnik s tim korisničkim imenom već postoji.' });
            } else {
                // Dodavanje novog korisnika u bazu
                const insertQuery = "INSERT INTO korisnik(ime, prezime, username, password, email, daLiJeAdmin, spol) VALUES (?, ?, ?, ?, ?, ?, ?)";
                db.query(insertQuery, [ime, prezime, username, password, email, daLiJeAdmin, spol], (insertError, insertResults, insertFields) => {
                    if (insertError) {
                        res.status(500).json({ error: insertError.message });
                    } else {
                        res.status(200).json({ message: 'Uspješno ste se registrirali!' });
                    }
                });
            }
        }
    });
});
app.post('/login',(req,res)=>{
    const { username, password } = req.body;
    db.query("SELECT * FROM korisnik WHERE username = ? and password = ?", [username, password], (error, results, fields) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            if (results.length > 0) {
                req.session.user = results[0]; // Sprema korisnika u sesiju
                req.session.save(() => { // Osigurava da se sesija spremi prije slanja odgovora
                    res.status(200).json(results[0]);
                });}
            else
                res.status(500).json({ error: "Ne postoji korisnik" });
        }
    });
});

app.post('/rezervisi',(req,res)=>{
    const{id,ajdi}=req.body;
    db.query("INSERT INTO rezervacija (korisnikId, destinacijaId) VALUES (?, ?)", [ajdi, id], (error, results, fields) => {
        if (error) {
            console.log(req.session.user.id)

            res.status(500).json({ error: "Error" });
        } else {
           res.status(200).json({message: "Uspješno dodana rezervacija"});
        }
    });
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
})
