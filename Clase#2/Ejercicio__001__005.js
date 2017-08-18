/*

Realiza una función que reciba un string y devuelva un objeto contando el 
número de apariciones de cada letra en el string.
Almacena y devuelve el resultado en un objeto.

Asegúrate de que la función cumple su cometido haciendo uso de los tests aportados.

*/

resultado = {
	a: 3,
	d: 7,
	f: 4
}

// AYUDA:
var arrayDeCaracteres = nombreDeString.split("");

// Tests

resultadoContador = contadorDeCaracteres("abbabcbdbabdbdbabababcbcbab");
console.log( resultadoContador['a'] === 7);
console.log( resultadoContador.b === 14);
console.log( resultadoContador['c'] === 3);

resultadoContador = contadorDeCaracteres("xyyyxyxyxzyxyzyxyxyasdfz");
console.log( resultadoContador.x === 7 );
console.log( resultadoContador['y'] === 10 );
console.log( resultadoContador.z === 3 );
console.log( resultadoContador['a'] === 1 );
console.log( resultadoContador['s'] === 1 );
console.log( resultadoContador.d === 1 );
console.log( resultadoContador['f'] === 1 );
