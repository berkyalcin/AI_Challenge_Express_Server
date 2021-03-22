const express = require('express');
const app = express();

var dataToShow = "";

app.get('/', (req, res) => {
    res.send(dataToShow);
});

app.post('/', (req, res) => {
    res.send("worked");
    dataToShow = JSON.parse(req.url.substring(2));
    console.log(dataToShow)
})

app.listen(3000, () => console.log('Gator app listening on port 3000!'));