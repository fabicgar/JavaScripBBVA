
function generarNumeroAleatorioEntre(minimo, maximo) {
    var anchoFranjaNumerica = (maximo - minimo) + 1;
    var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

	miCallBack(numero);
	return numero;
}

 var miCallBack = function(numeroGenerado){
 	console.log("se genera número:" + numeroGenerado)
 } 

var numAleatorio = generarNumeroAleatorioEntre(0, 100);