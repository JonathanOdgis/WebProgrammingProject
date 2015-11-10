<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Food Log: Edit</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" type="text/css" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
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
        
    <div class="container">

        <div class="page-header">
          <h1>Food Intake <small>Record your daily meals</small></h1>
        </div>
        
        <form method="post" action="?action=save">
        <?php include __DIR__ . '/../shared/_Errors.php'; ?>
        <table class="table">
            <tr>
               <td><input type="text" name="Name" class="form-control" placeholder="Name" value="<?=$model['Name']?>" /></td>
               <td><input type="text" name="Birthday" class="form-control" placeholder="Birthday" value="<?=$model['Birthday']?>" /></td>
               <td>
                 <input type="submit" value="Submit" class="btn btn-primary"/>
                 <input type="hidden" name="id" value="<?=$model['id']?>" /> 
               </td>
            </tr>
        </table>
        </form>          
        
        <div class="progress">
              <div class="progress-bar progress-bar-striped active" role="progressbar"  style="width: 0%">
                <span >0</span>% Complete
              </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script type="text/javascript">
      (function($){
        $(function(){
          
          $("#submit").on('click', function(e){
            var self = this;
            //$(self).css({display: "none"});
            $(self).hide().after("Working...");
            
            var per = 0;
            var interval = setInterval(function(){
              per += 25;
              $(".progress-bar").css("width", per + "%");
              $(".progress-bar span").text(per);
              if(per >= 100){
                clearInterval(interval);
                
                if( !$("#txtDate").val() ){
                  $("input").css({ backgroundColor: "#FFAAAA"});
                  $(self).prop("disabled", false).html("Try Again");
                  $("#myAlert").removeClass("alert-success").addClass("alert-danger").show()
                    .find("h3").html("You must enter a date");
                  toastr.error("You must enter a date");
                  
                }else{
                  // Display success
                  $("#myAlert").removeClass("alert-danger").addClass("alert-success").show()
                    .find("h3").html("Yay! You did it.");
                  toastr.success("Yay! You did it.")
                  
                }
                
                
              }
            }, 200);
            //return false;
          });
          $(".close").on('click', function(e) {
              $(this).closest(".alert").slideUp()
          });
          $("input[type='number']").spinner();
          $("input.date").datepicker();
        });
      })(jQuery);
    </script>
  </body>
</html>