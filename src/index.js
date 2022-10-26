const path = require('path');
const express = require('express');
const route = require('./routes');

const app = express();
const PORT = 3000;

//HTTP logger
//const morgan = require('morgan')
//app.use(morgan('combined'))

//Template engine
const { engine } = require('express-handlebars');
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '\\resources\\views'));

route(app);

//Acsess Static file: http://localhost:3000/img/logo.png
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, (res, req) => {
                console.log(`Example at http://localhost:${PORT}`);
});
