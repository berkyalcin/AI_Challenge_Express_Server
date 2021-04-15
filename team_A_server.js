const express = require('express');
var bodyParser = require('body-parser')

const app = express();

var jsonParser = bodyParser.json()

var data = JSON.parse('{"m": 0, "r":0, "f":0}');

app.get('/', (req, res) => {
    res.send(data);
});

app.post('/', jsonParser, (req, res) => {
    res.send("worked");
    data = req.body;
    console.log("TEAM A SENDS: ", data)
})

app.listen(4000, () => console.log('listening on port 4000'));
