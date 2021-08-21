const express = require('express')
const app = express()
var path = require('path')

let port = process.env.PORT
if (port == null || port == "") {
    port = 3000
}

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', function(req, res) {
    res.sendFile(path.resolve('public/startpage.html'))
})

app.get('/start', function(req, res) {
    res.sendFile(path.resolve('public/gamepage.html'))
})

app.listen(port)