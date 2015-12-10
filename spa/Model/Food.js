var mysql = require("mysql");

module.exports =  {
    blank: function(){ return {} },
    get: function(id, persons_id, ret){                      //pass userID or you will get errors
        var conn = GetConnection();
        var sql = 'SELECT * FROM Foods WHERE persons_id=' + persons_id;
        if(id){
          sql += " AND foods_id = " + id;
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
    save: function(row, persons_id, ret){    //bug            //rows is not defined
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) 
        {
				  sql = " Update Foods F"
							+ " Set 'foodname'=?, 'calories'=?, 'persons_id'=" + persons_id
						  + " WHERE F.foods_id=? ";
			  }
			  else
			  {
				  sql = "INSERT INTO Foods " //error in my sql
				      + " (foodname, calories, created_at, persons_id) "
						  + "VALUES (?, ?, now(), " + persons_id + ")";	  //I had persons_id hard coded to 148 //so this should be a user, dropdown with persons_ids		
			  }

        conn.query(sql, [row.foodname, row.calories, row.persons_id, row.id],function(err,data){
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
