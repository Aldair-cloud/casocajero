var pass = ''
var clave = '1234'
var input = document.getElementById('usuario');
function ingresar(){
    if(input.value == clave){
        document.getElementById('vistamenuprincipal').style.display='block';
        document.getElementById('pantalla1').style.display='none';
    }
}

function recibirboton(){

}
function cancel(){
    var elemento = document.getElementById("usuario");
    elemento.value = "";
}
function clear(){
    var elemento = document.getElementById("usuario");
    elemento.value =  elemento.value.substring(0, elemento.value.length - 1);
}

function ingresoretiro(){
    if(document.getElementById('vistamenuprincipal').style.display='none'){
        document.getElementById('vistaretirar').style.display='block';
        document.getElementById('retiro').style.display='none';
        document.getElementById('retirosoles').style.display='block';
    }
}
function ingresarretisoles(){
    if(document.getElementById('vistaretirar').style.display='none'){
        document.getElementById('vistasoles').style.display='block';
        document.getElementById('retirosoles').style.display='none';
        document.getElementById('veintesoles').style.display='block';
    }
}
function veinteso(){
    if(document.getElementById('vistasoles').style.display='none'){
        document.getElementById('retiros').style.display='block';
        document.getElementById('retirosoles').style.display='none';
        document.getElementById('veintesoles').style.display='block';
    }
}
function procesada(){
    if(document.getElementById('retiros').style.display='none'){
        document.getElementById('transaccion').style.display='block';
    }
}
function chau(){
    if(document.getElementById('transaccion').style.display='none'){
        document.getElementById('adios').style.display='block';
    }   
}
