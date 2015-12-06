        angular.module('app')
        .controller('weight', function($http, alert, panel){
            var self = this;

            self.template = "views/weight-index.html";                 
            $http.get("/weight")
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
                $http.post('/weight/', row)
                .success(function(data){
                    data.isEditing = false;
                    self.rows[index] = data;
                }).error(function(data){
                    alert.show(data.code);
                });
            }
            self.delete = function(row, index){
                panel.show( {
                    title: "Delete a weight",
                    body: "Are you sure you want to delete " + row.weight_id + "?",
                    confirm: function(){
                        $http.delete('/weight/' + row.weight_id)
                        .success(function(data){
                            self.rows.splice(index, 1);
                        }).error(function(data){
                            alert.show(data.code);
                        });
                    }
                });
            }
            
        });
