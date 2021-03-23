const express = require('express');
var bodyParser = require('body-parser')

const app = express();

var jsonParser = bodyParser.json()

var data="";

app.get('/', (req, res) => {
    res.send(data);
});

app.post('/', jsonParser, (req, res) => {
    res.send("worked");
    data = req.body;
    console.log(data)
})

app.listen(5000, () => console.log('listening on port 5000'));
