var pass = ''
var clave = '1234'

function ingresar(opcion){
    switch(opcion){
        case 1:
            if(pass.length==4){
                if(pass == clave){
                    document.getElementById('pantalla1').style.display='none';
                    document.getElementById('vistamenuprincipal').style.display='block';
                }
            }
    }
}

function recibirboton(){

}
function okay(){

    if(document.getElementById('pantalla1').style.display='none'){
        document.getElementById('vistamenuprincipal').style.display='block';
    }
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
