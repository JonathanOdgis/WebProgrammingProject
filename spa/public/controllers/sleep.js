        angular.module('app')
        .controller('sleep', function($http, alert, panel){
            var self = this;

            self.template = "views/sleep-index.html";                 
            $http.get("/sleep")
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
                $http.post('/sleep/', row)
                .success(function(data){
                    data.isEditing = false;
                    self.rows[index] = data;
                }).error(function(data){
                    alert.show(data.code);
                });
            }
            self.delete = function(row, index){
                panel.show( {
                    title: "Delete a sleep",
                    body: "Are you sure you want to delete " + row.sleep_id + "?",
                    confirm: function(){
                        $http.delete('/sleep/' + row.sleep_id)
                        .success(function(data){
                            self.rows.splice(index, 1);
                        }).error(function(data){
                            alert.show(data.code);
                        });
                    }
                });
            }
            
        });
