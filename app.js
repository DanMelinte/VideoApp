const express = require("express");
const app = express();

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const title = "Welcome";
    res.render('index', {
        title : title
    });
});

app.get('/about', (req, res) => {
    res.render('ABOUT');
});

const port = 5002;

app.listen(port, () => {
    console.log(`Server started on port ${port}`); 
});