var mysql = require("mysql");

module.exports =  {
    blank: function(){ return {} },
    get: function(id, persons_id, ret){
        var conn = GetConnection();
        var sql = 'SELECT * FROM Exercise WHERE persons_id=' + persons_id;
        if(id){
          sql += " AND exercise_id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = GetConnection();
        conn.query("DELETE FROM Exercise WHERE exercise_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, persons_id, ret){
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update Exercise E"
							+ " Set name=?, calories_burned=? persons_id=" + persons_id
						  + " WHERE E.exercise_id = ? ";
			  }else{
				  sql = "INSERT INTO Exercise "
						  + " (name, calories_burned, created_at, persons_id) "
						  + "VALUES (?, ?, Now(), " + persons_id + ")";				  
			  }

        conn.query(sql, [row.name, row.calories_burned, row.persons_id, row.id],function(err,data){
          if(!err && !row.id){
            row.id = data.insertId;
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
