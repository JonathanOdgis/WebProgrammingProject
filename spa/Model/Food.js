var mysql = require("mysql");
var userID = 800; //fix make it greater each time run //change the value each time to get a different user in terms of testing but we should be able to have more than 1 food per user. 
module.exports =  {
    blank: function(){ return {} },
    get: function(id, ret){
        var conn = GetConnection();
        var sql = 'SELECT * FROM Foods';
        if(id){
          sql += " WHERE foods_id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = GetConnection();
        conn.query("DELETE FROM Foods WHERE foods_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){    //bug            //rows is not defined
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) 
        {
				  sql = " Update Foods "
							+ " Set 'foodname'=?, 'calories'=?, 'persons_id'=?"
						  + " WHERE foods_id=? ";
			  }
			  else
			  {
				  sql = "INSERT INTO Foods " //error in my sql
				      + " (foodname, calories, created_at, persons_id) "
						  + "VALUES (?, ?, now(), ?)";	   //so this should be a user, dropdown with persons_ids		
			  }

        conn.query(sql, [row.foodname, row.calories, userID, row.id],function(err,data){
          if(!err && !row.id){
            row.id = data.insertId;  //data.insertId is auto-increment in the food table
          }
          ret(err, row);
          conn.end();
        });        
    },
    validate: function(row){
      var errors = {};
      
      if(!row.Name) errors.Name = "is required"; 
      
      return errors.length ? errors : false;
    }
};  
    function GetConnection(){
            var conn = mysql.createConnection({
              host: "localhost",
              user: "jonathan",
              password: "itsobvious",
              database: "c9"
            });
        return conn;
    }
