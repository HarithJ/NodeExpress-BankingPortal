const fs = require('fs');
const path = require('path');
const express = require('express');
const { render } = require('ejs');

const app = express();

app.set(path.join(__dirname, views));
app.set('view engine', 'ejs');

app.use(app.static(_dirname, 'public'));

app.get('/', () => {
    render('index', {'title': 'Index'})
});

app.listen(3000);