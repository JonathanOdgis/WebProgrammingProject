        angular.module('app')
        .controller('bloodpressure', function($http, alert, panel){
            var self = this;

            self.template = "views/blood-pressure-index.html";                 
            $http.get("/bloodpressure")
            .success(function(data){
                self.rows = data;
            });
            
            self.create = function(){
                self.rows.push({ isEditing: true });
            }
            self.edit = function(row, index){
                row.isEditing = true;
            }
            self.save = function(row, index){
                $http.post('/bloodpressure/', row)
                .success(function(data){
                    data.isEditing = false;
                    self.rows[index] = data;
                }).error(function(data){
                    alert.show(data.code);
                });
            }
            self.delete = function(row, index){
                panel.show( {
                    title: "Delete a blood pressure",
                    body: "Are you sure you want to delete " + row.current_bloodpressure + "?",
                    confirm: function(){
                        $http.delete('/bloodpressure/' + row.blood_pressure_id)
                        .success(function(data){
                            self.rows.splice(index, 1);
                        }).error(function(data){
                            alert.show(data.code);
                        });
                    }
                });
            }
            
        });
