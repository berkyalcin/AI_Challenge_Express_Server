const express = require('express');
const app = express();

var data = "";

app.get('/', (req, res) => {
    res.send(data);
});

app.post('/', (req, res) => {
    res.send("worked");
    data = JSON.parse(req.url.substring(2));
    console.log(data)
})

app.listen(3000, () => console.log('listening on port 3000'));