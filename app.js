var express = require("express");
var path = require("path");


/* Initialize ORM data models */
require("./db/models.js");

var app = express();

/* API */
var api = require("./api/api");
app.use("/api", api);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", function(req, res) {
	res.render("pages/index", { title: "Index Page" });
});
app.listen(3000, function() {
	console.log("grouptext listening on port 3000!");
});