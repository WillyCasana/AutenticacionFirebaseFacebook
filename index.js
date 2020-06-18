var app = angular.module('appLogin',[]);
app.controller('appLoginCtrl',function($scope){
    $scope.msjLogin="test";
    $scope.ingresarLogin=function(usuario){
        console.log(usuario);
        window.location.assign("menu.html")
    }

    $scope.facebookUsuario=function(){
        console.log("ingreso log face");
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result){
            console.log("ingreso correcto");
            console.log(result);
        })
        .catch(function(error){
            console.log("error al ingresar");
            console.log(error);
        })
    }

    
    $scope.verificarUsuario= function(usuario){
        console.log(usuario);
      //  $scope.msjLogueo="Login incorrecto";
        document.getElementById("mensajeIngreso").innerHTML="";


        //var errorMessage="exito" ;
        firebase.auth().signInWithEmailAndPassword(usuario.nombre, usuario.clave)
        .then(function(data){
            document.getElementById("mensajeIngreso").innerHTML="Ingreso correcto";
            getUser();
        })
        .catch(function(error) {
           
            document.getElementById("mensajeIngreso").innerHTML="Error al ingresar";
            // ...
          });
          
     


    }


})


function getUser(){
    firebase.auth().onAuthStateChanged(function(user){
        if(user)
        {
            console.log(user);
            window.location.assign("menu.html");
        }else{
             window.location.assign("index.html");
        }
    })
}