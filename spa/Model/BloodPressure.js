var mysql = require("mysql");

module.exports =  {
    blank: function(){ return {} },
    get: function(id, persons_id, ret){
        var conn = GetConnection();
        var sql = 'SELECT * FROM BloodPressure WHERE persons_id=' + persons_id;
        if(id){
          sql += " AND blood_pressure_id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = GetConnection();
        conn.query("DELETE FROM BloodPressure WHERE blood_pressure_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, persons_id, ret){
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update BloodPressure B"
							+ " Set current_bloodpressure=?, persons_id=?"
						  + " WHERE B.blood_pressure_id = ? ";
			  }else{
				  sql = "INSERT INTO BloodPressure "
						  + " (current_bloodpressure, created_at, persons_id) "
						  + "VALUES (?, Now(), " +	persons_id + ")";					
			  }

        conn.query(sql, [row.current_bloodpressure, persons_id, row.id],function(err,data){
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
