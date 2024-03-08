const express =require('express')
const bp =require('body-parser')
const app=express()
const mysql=require('mysql')
const cors=require('cors')
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
app.use(cors())
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

app.get('/amka', (req, res) => {
    db.query("SELECT * FROM user", (err, result) => {
        if (err) {
            // Ako dođe do greške, šaljemo status 500 (Internal Server Error) i poruku o grešci
            return res.status(500).send(err);
        }
        // Ako nema greške, šaljemo dobijene podatke koristeći res.json()
        res.json(result);
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
            if (results.length > 0)
                res.status(200).json(results);
            else
                res.status(500).json({ error: "Ne postoji korisnik" });
        }
    });
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
})