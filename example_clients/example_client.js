var http = require('http');

var get_options = {
  host: 'localhost',
  path: '/',
  port: '3000',
  method: 'GET',
  headers: {'Content-Type': 'application/json'}
};

var post_options = {
  host: 'localhost',
  path: '/',
  port: '4000',
  method: 'POST',
  headers: {'Content-Type': 'application/json'}
};

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });
    response.on('end', function () {
      console.log(str);
    });
}


async function executeCommands(){
    // Get data from port 3000
    http.request(get_options, callback).end();

    // Post data to port 4000
    var req = http.request(post_options, callback);
    req.write(JSON.stringify({"m": 1, "r":-1, "f":0}));
    req.end();
    await wait(1000)
    var req = http.request(post_options, callback);
    req.write(JSON.stringify({"m": 1, "r":0, "f":0}));
    req.end();
    await wait(3000)
    var req = http.request(post_options, callback);
    req.write(JSON.stringify({"m": 0, "r":1, "f":1}));
    req.end();
}

executeCommands()