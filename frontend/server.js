const express = require('express')
const app = express()
const PORT = process.env.PRT || 4000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT,() => {
    console.log(`Server Running http://localhost:${PORT}`)
})