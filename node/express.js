var express = require('express'),
    app = express(),
    person = require("./Model/Person.js"),
    food = require("./Model/Food.js"),
    drink = require("./Model/Drink.js");
    
app.use(express.static(__dirname + '/public'));
app.get("/person", function(req, res)
{
  person.get(null, function(rows)
  {
    res.send(rows);
  })
})
.get("/person/:id", function(req, res)
{
  person.get(req.params.id, function(rows)
  {
    res.send(rows[0]);
  })
})
.get("/food", function(req, res)
{
  food.get(null, function(rows)
  {
    res.send(rows);  
  })
})
.get("/food/:id", function(req, res)
{
  food.get(req.params.id, function(rows)
  {
    res.send(rows[0]);
  })
})
.get("/drink", function(req, res)
{
  food.get(null, function(rows)
  {
    res.send(rows);  
  })
})
.get("/drink/:id", function(req, res)
{
  drink.get(req.params.id, function(rows)
  {
    res.send(rows[0]);
  })
});
app.listen(process.env.PORT);