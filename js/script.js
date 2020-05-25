var pass = ''
var clave = '12345678'

function ingresar(){
    var input = document.getElementById('usuario');
    if(input.value == clave){
        document.getElementById('vistamenuprincipal').style.display='block';
        document.getElementById('pantalla1').style.display='none';
    }else{
        document.getElementById('mensaje').innerHTML='Contraseña Incorrecta';
    }
}
document.getElementById('btn1').addEventListener('click',btn1);
function btn1(){
    let resultado = document.getElementById('btn1').innerHTML;
    var num = document.getElementById('usuario');
    var value = num.value;
    num.value = value + resultado;
}
document.getElementById('btn2').addEventListener('click',btn2);
function btn2(){
    let resultado = document.getElementById('btn2').innerHTML;
    var num = document.getElementById('usuario');
    var value = num.value;
    num.value = value + resultado;
}
document.getElementById('btn3').addEventListener('click',btn3);
function btn3(){
    let resultado = document.getElementById('btn3').innerHTML;
    var num = document.getElementById('usuario');
    var value = num.value;
    num.value = value + resultado;
}
document.getElementById('btn4').addEventListener('click',btn4);
function btn4(){
    let resultado = document.getElementById('btn4').innerHTML;
    var num = document.getElementById('usuario');
    var value = num.value;
    num.value = value + resultado;
}
document.getElementById('btn5').addEventListener('click',btn5);
function btn5(){
    let resultado = document.getElementById('btn5').innerHTML;
    var num = document.getElementById('usuario');
    var value = num.value;
    num.value = value + resultado;
}
document.getElementById('btn6').addEventListener('click',btn6);
function btn6(){
    let resultado = document.getElementById('btn6').innerHTML;
    var num = document.getElementById('usuario');
    var value = num.value;
    num.value = value + resultado;
}
document.getElementById('btn7').addEventListener('click',btn7);
function btn7(){
    let resultado = document.getElementById('btn7').innerHTML;
    var num = document.getElementById('usuario');
    var value = num.value;
    num.value = value + resultado;
}
document.getElementById('btn8').addEventListener('click',btn8);
function btn8(){
    let resultado = document.getElementById('btn8').innerHTML;
    var num = document.getElementById('usuario');
    var value = num.value;
    num.value = value + resultado;
}
document.getElementById('btn9').addEventListener('click',btn9);
function btn9(){
    let resultado = document.getElementById('btn9').innerHTML;
    var num = document.getElementById('usuario');
    var value = num.value;
    num.value = value + resultado;
}
document.getElementById('btn11').addEventListener('click',btn11);
function btn11(){
    let resultado = document.getElementById('btn11').innerHTML;
    var num = document.getElementById('usuario');
    var value = num.value;
    num.value = value + resultado;
}
/*function cancel(){
    var elemento = document.getElementById("cancelar").innerHTML;
    elemento.value = "";
}
function clear(){
    var elemento = document.getElementById("usuario");
    elemento.value =  elemento.value.substring(0, elemento.value.length - 1);
}*/

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
