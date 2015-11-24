        angular.module('app')
        .controller('food', function($http, personService, alert){
            var self = this;

                self.template = "views/person-index.html";
                personService.get()
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
                    personService.post(row)
                    .success(function(data){
                        data.isEditing = false;
                        self.rows[index] = data;
                    }).error(function(data){
                        alert.show( data.code );
                    });
                }
                self.delete = function(row, index){
                    self.panel = {
                        title: "Delete a person",
                        body: "Are you sure you want to delete " + row.firstName + "?",
                        confirm: function(){
                            personService.delete(row.persons_id)
                            .success(function(data){
                                self.rows.splice(index, 1);
                                $("#myDialog").modal('hide');
                            }).error(function(data){
                                alert.show( data.code );
                            });
                        }
                    }
                    //$("#myDialog").modal('show');
                }
        });
