'use strict';

const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
//app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.static('public'));

app.get('/', (req, res) => {
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