const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get( "/", function ( req,  res ) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("de-DE", options);
    res.render( "list", { dayOfTheWeek: day });
});

app.post("/", function (req, res) {
    var item = req.body.newItem;
    res.render("list", { newItem: item });
})

app.listen(3000, function () {
    console.log( "Server started on port 3000" );
})