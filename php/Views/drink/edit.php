<form method="post" action="?action=save">
 <?php include __DIR__ . '/../shared/_Errors.php'; ?>
<table class="table">
    <tr>
       <td><input type="text" name="Name" class="form-control" placeholder="Drink Name" value="<?=$model['drinkname']?>" /></td>
       <td><input type="text" name="Name" class="form-control" placeholder="Calories" value="<?=$model['calories']?>" /></td>
       <td>
         <input type="submit" value="Submit" class="btn btn-primary"/>
         <input type="hidden" name="id" value="<?=$model['drink_id']?>" /> 
       </td>
    </tr>
</table>
</form>   
