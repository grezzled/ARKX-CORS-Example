const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')

var corsOptions = {
    origin: ['http://localhost:4000']
}

app.use(cors())

function getServerTime() {
    const jsonData = {
        server_time: new Date().toString()
    }
    return JSON.stringify(jsonData)
}

app.get('/test', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.get('/api/server_time', (req, res) => {
    res.send(getServerTime())
})


app.listen(PORT, () => {
    console.log(`Server Running http://localhost:${PORT}`)
})