<form method="post" action="?action=save">
 <?php include __DIR__ . '/../shared/_Errors.php'; ?>
<table class="table">
    <tr>
       <td><input type="text" name="Name" class="form-control" placeholder="First Name" value="<?=$model['firstname']?>" /></td>
       <td><input type="text" name="Name" class="form-control" placeholder="Last Name" value="<?=$model['lastname']?>" /></td>
       <td>
         <input type="submit" value="Submit" class="btn btn-primary"/>
         <input type="hidden" name="id" value="<?=$model['persons_id']?>" /> 
       </td>
    </tr>
</table>
</form>   
