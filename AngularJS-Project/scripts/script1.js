var app = angular.module("myApp",[]);

app.controller("myController",($scope)=>{
$scope.moviename = "Batman Begins";
$scope.directorname = "Christopher Nolan";
$scope.mycolor="blue";

$scope.person = {
    firstname:"Deepak",
    lastname:"Poosa"
}

$scope.points = [1,2,3,4,5];

$scope.quantity = 0;
$scope.price = 0;

$scope.movies = [
    { name:"Fight Club" , director:"David Fincher"},
    { name: "Batman Begins" , director:"Christopher Nolan"},
    { name:"The Departed", director:"Martin Scorcese"}
];

});

app.directive("myOwnDirective",()=>{
    return {
            template : "This is text from custom directive"
    };
});