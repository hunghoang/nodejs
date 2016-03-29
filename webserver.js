var http = require("http");
var dispatcher = require("httpdispatcher");


dispatcher.onGet("/welcome", function(request, response) {
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end('{"name":"hoang"}');
});

dispatcher.onError(function(req, res) {
	res.writeHead(404);
});

var server = http.createServer(function(request, response){
	dispatcher.dispatch(request, response);
});


server.listen(8080);
console.log("Server is listening");
