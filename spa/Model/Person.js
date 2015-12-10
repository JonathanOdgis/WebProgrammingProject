var mysql = require("mysql");

module.exports =  {
    blank: function(){ return {} },
    get: function(id, ret, searchType){
        var conn = GetConnection();
        var sql = 'SELECT P.* FROM Persons P';
        if(id){
          switch (searchType) {
            case 'facebook':
              sql += " WHERE P.fbid = " + id;
              break;
            
            default:
              sql += " WHERE P.persons_id = " + id;
          }
          
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
        if (row.id) 
        {
				  sql = " Update Persons P "                    // BUG FIX: Check for the P reference like above in the get
							+ " Set firstname=?, lastname=? "
						  + " WHERE P.persons_id=? ";
			  }else
			  {
				  sql = "INSERT INTO Persons "                      //Give Persons fbid a value and also include the typeid
						  + " (firstname, lastname, created_at, fbid, typeid)"  //persons id and the updated at should update themselves via phpmy admin
						  + "VALUES (?, ?, now(), ?, 'User')";			   // ok so 0 is the value for the fbid so i need to input peopels facebook ids	
			  }

        conn.query(sql, [row.firstname, row.lastname, row.fbid, row.typeid, row.id],function(err,data){
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