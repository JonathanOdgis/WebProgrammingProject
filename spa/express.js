var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var person = require("./Model/Person");
    var food = require("./Model/Food");
    var exercise = require("./Model/Exercise");
    var bloodpressure = require("./Model/BloodPressure");
    var exercise = require("./Model/Exercise");   
    var sleep = require("./Model/Sleep");
    var weight = require("./Model/Weight");    
    var unirest = require('unirest');    
    var Twit = require('twit');     //Homework: Setup the apps.facebook and the apps.twitter (developers.twitter.com/apps) (developers.facebook.com/apps)
    
    var twit = new Twit({
    consumer_key:         'o3iTTszOikjDdZhsFNQJpE83h'
  , consumer_secret:      'BQM3ofQaEginQt7aYpt319KzjFNvntwELGLfScXSjP2BRr691G'
  , access_token:         '21572028-jWQzQL8bX9zzsjgHKAfjmU8r6YMF0cpfJdk8C86Db'
  , access_token_secret:  'LR1viI40BpJf2PFlAFkX0ITlKJhKaL7npbUspozrvKXn9'
})    
    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

//==================================================================
app.get("/person", function(req, res)  //res=response the returned information req=what the user typed in to the browser, ip address
{
  person.get(null, function(err, rows)
  {
    if (err)
    {
        //500 is an error 200 is ok
        res.status(500).send(err);
    }
    else
    {
        res.send(rows);
    }
  })
})
.get("/person/:id", function(req, res)
{
  person.get(req.params.id, function(rows)
  {
    res.send(rows[0]);
  })
})
.post("/person", function(req, res){
  var errors = person.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  person.save(req.body, function(err, row){
      if(err)
      {
        res.status(500).send(err);
        return;
      }
    res.send(row);
  })
})
.delete("/person/:id", function(req, res){    //server-side controller (Client uses $HTTP to communicate with this server side controller)
  
  person.delete(req.params.id, function(err, rows){  //model
      if(err)
      {
        res.status(500).send(err);
      }
      else
      {
        res.send(req.params.id);
      }
  })
});
//==================================================================
app.get("/food", function(req, res)  //res=response the returned information req=what the user typed in to the browser, ip address
{
  food.get(null, function(err, rows)
  {
    if (err)
    {
        //500 is an error 200 is ok
        res.status(500).send(err);
    }
    else
    {
        res.send(rows);
    }
  })
})
.get("/food/:id", function(req, res)
{
  food.get(req.params.id, function(rows)
  {
    res.send(rows[0]);
  })
})
.post("/food", function(req, res){
  var errors = food.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  food.save(req.body, function(err, row){
      if(err)
      {
        res.status(500).send(err);
        return;
      }
    res.send(row);
  })
})
.delete("/food/:id", function(req, res){    //server-side controller (Client uses $HTTP to communicate with this server side controller)
  
  food.delete(req.params.id, function(err, rows){  //model
      if(err)
      {
        res.status(500).send(err);
      }
      else
      {
        res.send(req.params.id);
      }
  })
});

//==================================================================
app.get("/exercise", function(req, res){
  exercise.get(null, function(err, rows)
  {
    if (err)
    {
        //500 is an error 200 is ok
        res.status(500).send(err);
    }
    else
    {
        res.send(rows);
    }
  })
})
.get("/exercise/:id", function(req, res){
  exercise.get(req.params.id, function(err, rows){
    res.send(rows[0]);
  })
})
.post("/exercise", function(req, res){
  var errors = exercise.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  
  twit.post('statuses/update', { status: 'App test'}, function(err, data, response) {
      console.log(data)
    })
  
  exercise.save(req.body, function(err, row){
      if(err){
        res.status(500).send(err);
        return;
      }
    res.redirect("/exercise/" + row.id);
  })
})
.delete("/exercise/:id", function(req, res){
  exercise.delete(req.params.id, function(err, rows){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(req.params.id);
      }
  })
})

.get("/user/", function(req, res){
    unirest.get("https://graph.facebook.com/me?access_token=" + req.params.access_token + "&fields=id,name,email")
    .end(function (result) {
        res.send(result.body);
    });
})
//===========================================================================================
app.get("/bloodpressure", function(req, res)  //res=response the returned information req=what the user typed in to the browser, ip address
{
  bloodpressure.get(null, function(err, rows)
  {
    if (err)
    {
        //500 is an error 200 is ok
        res.status(500).send(err);
    }
    else
    {
        res.send(rows);
    }
  })
})
.get("/bloodpressure/:id", function(req, res)
{
  bloodpressure.get(req.params.id, function(rows)
  {
    res.send(rows[0]);
  })
})
.post("/bloodpressure", function(req, res){
  var errors = bloodpressure.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  bloodpressure.save(req.body, function(err, row){
      if(err)
      {
        res.status(500).send(err);
        return;
      }
    res.send(row);
  })
})
.delete("/bloodpressure/:id", function(req, res){    //server-side controller (Client uses $HTTP to communicate with this server side controller)
  
  bloodpressure.delete(req.params.id, function(err, rows){  //model
      if(err)
      {
        res.status(500).send(err);
      }
      else
      {
        res.send(req.params.id);
      }
  })
})
//========================================================================
app.get("/sleep", function(req, res)  //res=response the returned information req=what the user typed in to the browser, ip address
{
  sleep.get(null, function(err, rows)
  {
    if (err)
    {
        //500 is an error 200 is ok
        res.status(500).send(err);
    }
    else
    {
        res.send(rows);
    }
  })
})
.get("/sleep/:id", function(req, res)
{
  sleep.get(req.params.id, function(rows)
  {
    res.send(rows[0]);
  })
})
.post("/sleep", function(req, res){
  var errors = bloodpressure.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  sleep.save(req.body, function(err, row){
      if(err)
      {
        res.status(500).send(err);
        return;
      }
    res.send(row);
  })
})
.delete("/sleep/:id", function(req, res){    //server-side controller (Client uses $HTTP to communicate with this server side controller)
  
  sleep.delete(req.params.id, function(err, rows){  //model
      if(err)
      {
        res.status(500).send(err);
      }
      else
      {
        res.send(req.params.id);
      }
  })
})
//===============================================
app.get("/weight", function(req, res)  //res=response the returned information req=what the user typed in to the browser, ip address
{
  weight.get(null, function(err, rows)
  {
    if (err)
    {
        //500 is an error 200 is ok
        res.status(500).send(err);
    }
    else
    {
        res.send(rows);
    }
  })
})
.get("/weight/:id", function(req, res)
{
  weight.get(req.params.id, function(rows)
  {
    res.send(rows[0]);
  })
})
.post("/weight", function(req, res){
  var errors = weight.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  weight.save(req.body, function(err, row){
      if(err)
      {
        res.status(500).send(err);
        return;
      }
    res.send(row);
  })
})
.delete("/weight/:id", function(req, res){    //server-side controller (Client uses $HTTP to communicate with this server side controller)
  
  weight.delete(req.params.id, function(err, rows){  //model
      if(err)
      {
        res.status(500).send(err);
      }
      else
      {
        res.send(req.params.id);
      }
  })
})
app.listen(process.env.PORT);














