        angular.module('app')
        .controller('food', function($http, alert, panel){       //refactor to my foods
            var self = this;

            self.template = "views/food-index.html";            
            $http.get("/food")
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
                $http.post('/food', row)
                .success(function(data){
                    data.isEditing = false;
                    self.rows[index] = data;
                }).error(function(data){
                    alert.show(data.code);
                });
            }
            self.delete = function(row, index){
                panel.show( {
                    title: "Delete a food",
                    body: "Are you sure you want to delete " + row.foodname + "?",
                    confirm: function(){
                        $http.delete('/food/' + row.foods_id)
                        .success(function(data){
                            self.rows.splice(index, 1);
                        }).error(function(data){
                            alert.show(data.code);
                        });
                    }
                });
            }
            
        })
