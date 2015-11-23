angular.module('app')
.service('personService', function($http, $q){
    return {
        get: function(){
            return $http.get("/person");
        },
        post: function(row){
            return $http.post('/person/', row);
        },
        delete: function(id){
            $http.delete('/person/' + id);
        }
    };
});