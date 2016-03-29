var express = require('express');
var app = express();

app.get('/books', function(req, res) {
	res.send([{name:'book1'}, {name:'book2'}]);
});

app.get('/books/:id', function(req, res){
	res.send({id: req.params.id, name: "book"})
});

app.listen(3000);
console.log("Server is listening on port 3000");
