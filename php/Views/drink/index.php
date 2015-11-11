<?php
?>
            <a href="?action=create" class="btn btn-success ajax">
                <i class="glyphicon glyphicon-plus"></i>
                New Record
            </a>
            <a href="?action=delete" class="btn btn-danger">
                <i class="glyphicon glyphicon-trash"></i>
                Delete All
                <span class="badge"><?=count($model)?></span>
            </a>
            <br />


<div class="modal fade" id="myDialog">
  <div class="modal-dialog">
    <div class="modal-content">
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<p><?=count($model)?></p>

<table class="table table-striped">
    <thead>
        <tr>
            <th>Actions</th>
            <th>Drink Name</th>
            <th>Calories</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($model as $row): ?>
            <tr>
                  <th scope="row">
                    <div class="btn-group" role="group" aria-label="...">
                      <a href="" title="View" class="btn btn-default btn-xs ajax"><i class="glyphicon glyphicon-eye-open"></i></a>
                      <a href="?action=edit&id=<?=$row['persons_id']?>" title="Edit" class="btn btn-default btn-xs edit"><i class="glyphicon glyphicon-edit"></i></a>
                      <a href="?action=delete&id=<?=$row['persons_id']?>" title="Delete" class="btn btn-default btn-xs ajax"><i class="glyphicon glyphicon-trash"></i></a>
                    </div>
                  </th>
                <td><?=$row['drinkname']?></td>  <!--This matches the name column in ur persons-->
                <td><?=$row['calories']?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.4/handlebars.min.js"></script>
<script type="text/javascript">
    $(function(){
        var editTemplate = Handlebars.compile($("#edit-tpl").html());
        $(".ajax").click(function(){
            $.get(this.href + "&format=plain").then(function(data){
                $("#myDialog .modal-content").html(data);
                $("#myDialog").modal('show');
            });
            return false;
        });
        $(".edit").click(function(){
            var $self = $(this);
            $.getJSON(this.href + "&format=json").then(function(data){
                var html = editTemplate(data);
                var $tr = $self.closest("tr").after(html).hide()
            });
            return false;
        });
    });
</script>
<script type="text/template" id="edit-tpl" >
    <tr>
       <td><input type="text" name="Name" class="form-control" placeholder="Name" value="{{firstname}}" /></td>
       <td>
         <input type="submit" value="Submit" class="btn btn-primary"/>
         <input type="hidden" name="id" value="{{persons_id}}" /> 
       </td>
    </tr>
</script>