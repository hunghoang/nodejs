var appRouter = function(app) {
	app.get("/", function(req, res) {
		res.send("Hello world");
	});

	app.get("/books/:id", function(req, res) {
		res.send({id:req.params.id, name:"Book"});
	});


}
module.exports = appRouter;
