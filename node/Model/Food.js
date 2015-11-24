var mysql = require("mysql");

module.exports =  {
    get: function(id, ret){
        var conn = GetConnection();
        var sql = 'SELECT * FROM Foods';
        if(id){
          sql += " WHERE foods_id = " + id;
        }
        conn.query(sql, function(err,rows){
          if(err) throw err;
          ret(rows);
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
    
    save: function(row, ret){    //the row is the serialized stuff from the script. 
        var conn = GetConnection();
        if (row.id)
        {
          var sql = "UPDATE Foods Set foodname=?, calories=?, foods_id=?, persons_id=? WHERE foods_id =?";
        }
        else
        {
				  var sql = "INSERT INTO Foods(foodname, calories, foods_id, persons_id) VALUES (?, ?, ?, ?)";	
        }
        conn.query(sql, [row.foodName, row.calories, row.foods_id, row.persons_id],function(err,rows){
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