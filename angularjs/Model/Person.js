var mysql = require("mysql");

module.exports =  {
    get: function(id, ret) {
        var conn = GetConnection();
        var sql = 'SELECT * FROM Persons ';
        if(id)
        {
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
    
    save: function(row, ret){
        var conn = GetConnection();
        conn.query('SELECT * FROM Persons',function(err,rows){
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