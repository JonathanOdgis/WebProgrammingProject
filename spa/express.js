var express = require('express'),
    app = express();

var person = require("./Model/Person");
var food = require("./Model/Food");
var drink = require("./Model/Drink");


var data = [{id: 0, Name: "Moshe"}, {id: 1, Name: "Barak"}, {id: 2, Name: "Jonathan"}];

app.use(express.static(__dirname + '/public'));

app.get("/Person", function(req, res){
  
  person.get(null, function(rows){
    res.send(rows);
  });
    
})
.get("/Person/:id", function(req, res){
  
  person.get(req.params.id, function(rows){
    res.send(rows[0]);
  });
  
});

//======================================================

app.get("/Food", function(req, res){
  
  food.get(null, function(rows){
    res.send(rows);
  });
    
})
.get("/Food/:id", function(req, res){
  
  food.get(req.params.id, function(rows){
    res.send(rows[0]);
  });
  
});

//======================================================

app.get("/Drink", function(req, res){
  
  drink.get(null, function(rows){
    res.send(rows);
  });
    
})
.get("/Drink/:id", function(req, res){
  
  drink.get(req.params.id, function(rows){
    res.send(rows[0]);
  });
  
});

app.listen(process.env.PORT);