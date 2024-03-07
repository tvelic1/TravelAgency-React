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
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
})