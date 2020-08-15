const fs = require('fs');
const path = require('path');
const express = require('express');
const { render } = require('ejs');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.static(_dirname, 'public');

app.get('/', (req, res) => {
    res.render('index', {'title': 'Index'});
});

app.listen(3000, () => {
    console.log('PS Project Running on port 3000!');
});