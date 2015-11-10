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
                      <li><a href="/php/food/index.php">Food </a></li>
                      <li><a href="/php/drink/index.php"> Drink </a></li>
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

        <div class = "container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
    
                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                  <div class="item active">
                    <img src="images/stockimage.jpg">
                  </div>
                  <div class="item">
                    <img src="images/stockimage.jpg">
                  </div>
                  <div class="item">
                    <img src="images/stockimage.jpg">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div class="container">
          <div class="jumbotron" id = "frontPageInfo">
            <h1> It's Time to Get Back on Track. </h1> 
            <p> Keep track of your life anytime and anywhere </p> 
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Username</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="txtEmail" placeholder="Username">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="txtPassword" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button class="btn btn-success" id = "login">Login</button>
                  <a href="signup.html" class="btn btn-info" role="button" id = "signup">Sign Up</a>
                </div>
              </div>
            </form>          
          </div>
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
        <script type="text/javascript">
          (function($){
            $(function(){
              $("#login").on('click', function(e){
                var self = this;
                var username = $("email");
                var password = $("password");
                //$(self).css({display: "none"});
                $(self).prop("disabled", true);
                $(self).html("Logging In...");
                if (password.val("Jonathan"))  //Debug
                {
                    alert("Awesome!");            
                }
                else
                {
                    alert("Woops! Incorrect Username or password!");
                }
                return false;
              });
            });
          })(jQuery);
        </script>    
    </body>    
</html>