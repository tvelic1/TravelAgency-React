const express = require('express')
const router = express.Router();
const mysql=require('mysql')
const cors=require('cors')

router.get('/opp', (req, res) => {
    const str = [{
        "name":"Tarik"
    }];
    res.end(JSON.stringify(str))
})

module.exports = router