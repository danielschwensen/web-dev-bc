//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true });

const itemsSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todolist"
});

const item2 = new Item({
  name: "Hit the + button to add a new item"
});

const item3 = new Item({
  name: "<-- Hit this to delete an item"
});

const defaultItems = [item1, item2, item3];

// MONGO - NEW LIST
const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

//-----------------------

// ----------------------------------------------------------
app.get("/", function(req, res) {

  Item.find({}, function (err, foundItems) {
    
    if (foundItems.length === 0) {
      
      Item.insertMany(defaultItems, function (err){
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved items");
        }
      });
    } else {res.render("list", {listTitle: "Today", newListItems: foundItems});}

  });

});
// HOME ROUTE-----------------------------------------------
app.post("/", function(req, res){

  const itemName = req.body.newItem;

  const item = new Item({
    name: itemName
  });
    
  item.save();
  res.redirect("/");
  
});

// CUSTOM ROUTE -----------------
app.get("/:customListName", function (req, res) {
  console.log(req.params.customListName);
  const customListName = req.params.customListName;

  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        //Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems
        });
      
        list.save();
        res.redirect("/" + customListName);
      } else {
        //Show an existing list

        res.render("list", {listTitle: customListName.name, newListItems: foundList.items})
      }
    }
  });



});


//DELETE   ------------------------------------------------
app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  console.log(checkedItemId);

  Item.findByIdAndRemove(checkedItemId, function (err) {
    if (!err) {
      console.log("Successfully deleted checked item.");
      res.redirect("/");
    }
  });
});


// --------------------------------------------------------

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
