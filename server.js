const express = require('express')
const app = express()
const port = 3000

app.use('/css', express.static(__dirname + '/App/css'));
app.use('/js', express.static(__dirname + '/App/js'));
app.use('/bootstrap', express.static(__dirname + '/App/bootstrap'));


app.get('/', (req, res) => res.sendFile(__dirname + "/App/index.html"))
app.get('/editor', (req, res) => res.sendFile(__dirname + "/App/editor.html"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))