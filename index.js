var app = angular.module('appLogin',[]);
app.controller('appLoginCtrl',function($scope){
    $scope.msjLogin="test";
    $scope.ingresarLogin=function(usuario){
        console.log(usuario);
        window.location.assign("menu.html")
    }
})