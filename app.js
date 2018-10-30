const express = require("express");
const app = express();

var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });


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

app.use(function(req, res, next) {
    req.name = "Nikita";
 })

const port = 5002;

app.listen(port, () => {
    console.log(`Server started on port ${port}`); 
});