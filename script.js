var app = angular.module("MovieTalk",[]);
app.controller("MovieCtrl",['$scope','$http', function($scope, $http)
{
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=kmr2h7zmza5mtpkwsdhraae7&callback=JSON_CALLBACK';

    $scope.message = "Hello from controller";
    $scope.search = function(term)
    {
        if(typeof term == 'undefined')
        {
            url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=kmr2h7zmza5mtpkwsdhraae7&callback=JSON_CALLBACK&q=' + term;

        }
        $http.jsonp(url).success(function(json)
        {
            console.log('jsonp',json);
            $scope.movies = json.movies;
        });
    };
}]);

