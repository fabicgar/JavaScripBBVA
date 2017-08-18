function miPrueba(espacio) {
	var resultado = "";

	for (var i = 1; i < arguments.length; i++){
	resultado += arguments[i] + espacio
	}


return resultado;
}

console.log(miPrueba(".",  "salvia", "albahaca", "oregano", "pimienta"));
