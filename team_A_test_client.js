var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var http = new XMLHttpRequest();
var url = 'http://127.0.0.1:4000';
http.open('POST', url);

//Send the proper header information along with the request
http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
    }
}
http.send(JSON.stringify({"m": 1, "r":1, "f":0}));

