/*

Vamos a complicar el ejercicio anterior:
Ahora cada vez que calculemos la longitud del string más largo, almacenaremos el resultado en un array de resultados.
Una vez ejecutados varios cálculos de longitud (4 en el ejemplo), vamos a calcular la media de los resultados.

*/

var resultados = [];

var arrayDeTest1 = ["Richie", "Joanie", "Greg", "Marcia", "Bobby"];
var arrayDeTest2 = ["Blanka", "Zangief", "Chun Li", "Guile"];
var arrayDeTest3 = ["Red", "Blue", "Green"];
var arrayDeTest4 = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga"];


calculoLongitudMasLargo(arrayDeTest1);
calculoLongitudMasLargo(arrayDeTest2);
calculoLongitudMasLargo(arrayDeTest3);
calculoLongitudMasLargo(arrayDeTest4);

console.log(resultados);

// resultados = [6, 7, 5, 19];
media(resultados) ==> 9,25

