var http = require("http");
var dispatcher = require("httpdispatcher");

var server = http.createServer(function(request, response){
	response.writeHead(200,{"Content-type":"text/html"});
	response.write("<html>");
	response.write("<head>");
	response.write("<title>");
	response.write("this is example of standford");
	response.write("</title>");
	response.write("</head>");
	response.write("<body>");
	response.write("Hello world!");
	response.write("</body>");
	response.write("</html>");
	response.end();

});

server.listen(8080);
console.log("Server is listening");
