'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/catinfo', (req, res) => {
    const cat = {
        name: 'Frank',
        birthdate: '2010-12-25',
        weight: 5,
    };
    res.json(cat);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});