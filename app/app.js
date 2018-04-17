var express = require ('express');
var app = express();
app.get('/', function(request,response){
response.send('<h1> Hassan 22 år <h1>');
});
var server = app.listen(3000,function() {
console.log('lytter til port 3000');
})

//var http = require('http');

//var myServer = http.createServer(function(request, response)
//{
//response.writeHead(200, {"Content-Type" : "text/plain"});
//response.write('<h1> Gayyy </h1>');
//response.end();
//});

//myServer.listen(3000);