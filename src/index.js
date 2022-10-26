const path = require('path')
const express = require('express')


const app = express()
const PORT = 3000

//HTTP logger
const morgan = require('morgan')
app.use(morgan('combined'))

//Template engine
const {engine} = require('express-handlebars')
app.engine('hbs',engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname,'\\resources\\views'));
//console.log(path.join(__dirname,'\\resources\\views'))

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});

//Static file
app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT, (res,req) => {
    console.log(`Example at http://localhost:${PORT}`)
})