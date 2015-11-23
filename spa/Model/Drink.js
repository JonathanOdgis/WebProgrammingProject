var mysql = require("mysql");

module.exports =  {
    blank: function(){ return {} },
    get: function(id, ret){
        var conn = GetConnection();
        var sql = 'SELECT * FROM Persons ';
        if(id){
          sql += " WHERE persons_id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = GetConnection();
        conn.query("DELETE FROM Persons WHERE persons_id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update Persons "
							+ " Set firstname=?, lastname=? "
						  + " WHERE persons_id = ? ";
			  }else{
				  sql = "INSERT INTO Persons "
						  + " (firstname, lastname, created_at, TypeId) "
						  + "VALUES (?, ?, Now(), 6 ) ";				
			  }

        conn.query(sql, [row.firstname, row.lastname, row.persons_id],function(err,data){
          if(!err && !row.persons_id){
            row.persons_id = data.insertId;
          }
          ret(err, row);
          conn.end();
        });        
    },
    validate: function(row){
      var errors = {};
      
      if(!row.firstname) errors.firstname = "is required"; 
      
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