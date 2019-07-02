const express = require('express')
const app = express()
const port = 3000
const handler = require('./Server/Handlers/handler')

app.use('/css', express.static(__dirname + '/App/css'));
app.use('/js', express.static(__dirname + '/App/js'));
app.use('/bootstrap', express.static(__dirname + '/App/bootstrap'));
app.use('/vendor', express.static(__dirname + '/App/vendor'));



app.get('/', (req, res) => res.sendFile(__dirname + "/App/index.html"))
app.get('/editor', (req, res) => res.sendFile(__dirname + "/App/editor.html"))
app.get('/tictac', (req, res) => res.sendFile(__dirname + "/App/ticTacToe.html"))

//Api
app.get('/save', (req, res) => handler.saveNote());

app.listen(port, () => console.log(`Example app listening on port ${port}!`))