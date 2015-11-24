var mysql = require("mysql");

module.exports =  {
    get: function(id, ret) {
        var conn = GetConnection();
        var sql = 'SELECT * FROM Persons ';
        if(id){
          sql += " WHERE persons_id = " + id;
        }
        conn.query(sql, function(err,rows){
          if(err) throw err;
          ret(rows);
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
    
    save: function(row, ret){    //the row is the serialized stuff from the script. 
        var conn = GetConnection();
        if (row.id)
        {
          var sql = "UPDATE Persons Set firstname=?, lastname=?, persons_id=? WHERE persons_id =?";
        }
        else
        {
				  var sql = "INSERT INTO Persons(firstname, lastname, persons_id) VALUES (?, ?, ?)";	
        }
        conn.query(sql, [row.firstName, row.lastName, row.persons_id],function(err,rows){
          if(err) throw err;
          ret(rows);
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