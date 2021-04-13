const express = require('express');
var fs = require('fs');

var bodyParser = require('body-parser')

const app = express();
var jsonParser = bodyParser.json()

var data = "";

app.get('/', (req, res) => {
    res.send(data);
});

app.post('/', jsonParser, (req, res) => {
    res.send("worked");
    data = req.body;
    console.log(data)
    fs.appendFile("tank_game_data.txt", JSON.stringify(data)+"\n", function(err) {
        if (err) {
            console.log(err);
        }
    });    
})

app.listen(3000, () => console.log('listening on port 3000'));