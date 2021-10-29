'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/hello', (req, res) => {
    res.send("Hello World!");
});

app.get('/catinfo', (req, res) => {
    const cat = {
        name: 'Frank',
        birthdate: '2010-12-25',
        wright: 5,
    };
    res.json(cat);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});