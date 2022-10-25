const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req,res) => {
    return res.send('Hello World')
})
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}, ${req.body}`)
    //res.send('')
    next()
})
app.listen(PORT, (res,req) => {
    console.log(`Example at http://localhost:${PORT}`)
})