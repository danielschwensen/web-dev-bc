const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var items = ["Buy food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//app.use(express.static("/13_todolist-v1/public"));


app.get( "/", function ( req,  res ) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("de-DE", options);
    res.render( "list", { dayOfTheWeek: day, newListItems: items });
});

app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log( "Server started on port 3000" );
})