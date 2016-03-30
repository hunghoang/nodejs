var appRouter = function(app) {
	app.get("/", function(req, res) {
		res.send("Hello world");
	});

	app.get('/staffs', function(req, res) {
        	res.send([{firstName:'Hoang', lastName:'Nguyen', staffId: 1}, {firstName:'Minh', lastName:'Le', staffId: 2}]);
	});
		
}
module.exports = appRouter;
