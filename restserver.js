var express = require('express');
var app = express();

app.get('/staffs', function(req, res) {
	res.send([{firstName:'Hoang', lastName:'Nguyen', staffId: 1}, {firstName:'Minh', lastName:'Le', staffId: 2}]);
});

app.get('/staffs/:id', function(req, res){
	var id = req.params.id
	if (id == 1) {
		res.send({firstName:'Hoang', lastName:'Nguyen', staffId: 1});
		return;
	}	
	if (id == 2) {
		res.send({firstName:'Minh', lastName:'Le', staffId: 2});
		return;
	}
	
	res.send({result: "unknown staff " + id})
});

app.listen(3000);
console.log("Server is listening on port 3000");
