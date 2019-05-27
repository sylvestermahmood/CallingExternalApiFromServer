
var http = require("http");


var server = http.createServer((req, res) => {
   if(req.url == '/')
    {
        res.write("I am in the Base URL");
        res.end();
    }
    else if(req.url == "/posts")
    {
        var request = require('request');
request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
    res.write(body); 
    res.end();
});
    }

});

var PortNum = 3000;
server.listen(PortNum)

console.log("My Port Number is :", PortNum)