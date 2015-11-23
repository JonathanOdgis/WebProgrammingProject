var mysql = require("mysql");

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
    save: function(row, ret){
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update Foods "
							+ " Set firstname=?, lastname=? "
						  + " WHERE foods_id = ? ";
			  }else{
				  sql = "INSERT INTO Foods "
						  + " (firstname, lastname, created_at, TypeId) "
						  + "VALUES (?, ?, Now(), 6 ) ";				
			  }

        conn.query(sql, [row.firstname, row.lastname, row.foods_id],function(err,data){
          if(!err && !row.Name){
            row.Name = data.insertId;
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
          user: "blabla",
          password: "1212",
          database: "c9"
        });
    return conn;
}