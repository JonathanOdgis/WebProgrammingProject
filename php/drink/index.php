<?php
session_start();
    $name = 'Jonathan Odgis';
    $message = "Welcome $name";
    
    $person = array( 'Name' => $name, 'Age' => 21, CalorieGoal => 2000 );

    $drink = $_SESSION['drink']; 
    if(!$drink){    
      $_SESSION['drink'] = $drink = array(      
        array( 'Name' => 'Orange Juice', 'Calories' => 100, 'TotalFat' => 3, 'Sugar' => 18, 'Servings' => 1,'Time' => strtotime("-1 hour")),
        array( 'Name' => 'Milk', 'Calories' => 100, 'TotalFat' => 2, 'Sugar' => 8, 'Servings' => 1,'Time' => strtotime("-1 hour")),
        array( 'Name' => 'Seltzer', 'Calories' => 0, 'TotalFat' => 0, 'Sugar' => 0, 'Servings' => 1,'Time' => strtotime("-1 hour"))
        );
    }
        
    $total = 0;
    foreach ($drink as $beverage) {
        $total += $beverage['Calories'];
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title> Fit List </title>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
        <!-- Latest compiled and minified JavaScript -->
        <link rel="stylesheet" href="main.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    </head>
    
    <body>
        <div id = "header">
            <nav class="navbar navbar-fixed navbar-default" id = "navbar">
              <div class="container-fluid">
                <div id = "navbaritems">
                  <ul class = "nav navbar-nav">
                    <div class="navbar-header">
                      <a class="navbar-brand" href="index.html"> Fit List </a>
                    </div>          
                    <li><a href="foodrecords.html">Food </a></li>
                    <li><a href="drinkrecords.html"> Drink </a></li>
                    <li><a href="exerciserecords.html"> Exercise </a></li>
                    <li><a href="weightrecords.html"> Weight </a></li>
                    <li><a href="sleeprecords.html"> Sleep </a></li>
                    <li><a href="bloodpressurerecords.html"> Blood Pressure </a></li>
                    <li><a href="medicinerecords.html"> Medicine </a></li>
                    <li><a href = "#"><img src = "http://www.iid.com/Home/ShowImage?id=299&t=635648001335730000" style = "width: 30px"></a></li>            
                    <li><a href = "#"><img src = "https://www.hrc.co.nz/index.php/download_file/view_inline/893/" style = "width: 30px"></a></li>
                    <li><a href = "#"><img src = "http://a4.mzstatic.com/us/r30/Purple69/v4/14/79/45/147945c1-8234-f71b-2018-9c22475473f2/icon320x320.jpeg" style = "width: 30px"></a></li>                  
                </div>
              </div>
            </nav>
        </div>
    
        <div class="container">
          <div class="jumbotron" id = "frontPageInfo">
            <h1> My Drink Records </h1> 
            <div class = "panel panel-success">
              <p> Name: <?=$person['Name']?></p>
              <p> Age: <?=$person['Age']?></p>
              <p> Calorie Goal: <?=$person['CalorieGoal']?></p>
              <p> Calorie Intake Today: <?=$total?></p>
              <p> </p>
            </div>
      
            <a href="edit.php?>" class="btn btn-success">
                <i class="glyphicon glyphicon-plus"></i>
                Add
            </a>
            <a href="#" class="btn btn-danger">
                <i class="glyphicon glyphicon-trash"></i>
                Delete
            </a>
            <table class="table table-condensed table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Total Fat</th>
                  <th>Calories</th>
                  <th>Sugar</th>
                  <th>Servings</th>
                  <th>Time</th>                  
                </tr>
              </thead>
              <tbody>
                <?php foreach($drink as $i => $beverage): ?>
                <tr>
                  <th scope="row"> <a href="delete.php?id=<?=$i?>" title="Delete" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-remove"></i></a><?=$i?></th>
                  <td><?=$beverage['Name']?></td>
                  <td><?=$beverage['TotalFat']?>g</td>
                  <td><?=$beverage['Calories']?></td>
                  <td><?=$beverage['Sugar']?>g</td>
                  <td><?=$beverage['Servings']?></td>
                  <td><?=$beverage['Time']?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
          </table>
    </div>

      <script>
        $('#alert').hide();
        $('#myModal').on('show.bs.modal', function () 
        {
          $('#alert').show();
        })      
      </script>

        <div class = "footer">
          <div class = "Jumbotron">
            <p> Copyright 2015.  </p>
             <a href = "https://twitter.com/ClubSeltzer"><img src = "http://www.iid.com/Home/ShowImage?id=299&t=635648001335730000" style = "width: 30px"></a>             
             <a href = "#"><img src = "https://www.hrc.co.nz/index.php/download_file/view_inline/893/" style = "width: 30px"></a>
             <a href = "#"><img src = "http://a4.mzstatic.com/us/r30/Purple69/v4/14/79/45/147945c1-8234-f71b-2018-9c22475473f2/icon320x320.jpeg" style = "width: 30px"></a>
          </div>
        </div>

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>    
    </body> 
</html>