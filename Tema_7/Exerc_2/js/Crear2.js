/*window.onload = function(){
	mostrarVehiculo();
	mostraImagenPricipal();
} 
*/

function generarNumeroAleatorioEntre(minimo, maximo) {
    var anchoFranjaNumerica = (maximo - minimo) + 1;
    var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

    return numero;
}

function generarMarcaVehiculoAleatorio() {
    var marcaVehiculo = ["Mazda", "Porsche", "Chevrolet", "Hyundai", "BMW", "Mercedes benz", "Jeep", "Hammer", "AKT"];
    var indice = generarNumeroAleatorioEntre(0, marcaVehiculo.length - 1);

    return marcaVehiculo[indice];
}

function generarImagenAleatoria() {
    var imagenVehiculos = ["vehiculo1.png", "vehiculo2.png", "vehiculo3.png", "vehiculo4.png", "vehiculo5.png", "vehiculo6.png", "vehiculo7.png", "vehiculo8.png", "vehiculo9.png", "vehiculo10.png"];
    var indice = generarNumeroAleatorioEntre(0, imagenVehiculos.length - 1);

    return imagenVehiculos[indice];
};


function Vehiculo() {
    this._marca = generarMarcaVehiculoAleatorio();
    this._modelo = generarNumeroAleatorioEntre(1990, 2017);
    this._velocidadMaxima = generarNumeroAleatorioEntre(100, 200);
    this._posicionActual = 0;
    this._imagen = generarImagenAleatoria();
}

Vehiculo.prototype.moverVehiculo = function() {
    var metros = this.getMetrosQueAvanzaCadaSegundo();
    this._posicionActual += metros;

    console.log("se mueve vehiculo " + this._marca);
    console.log("posicion " + this._posicionActual);


    //       if(contadorVehiculos = vehiculo++); 
}

Vehiculo.prototype.getMetrosQueAvanzaCadaSegundo = function() {
    var metros = this._velocidadMaxima * 1000 / 3600;

    return metros;
}


function Carrera() {
    this._vehiculo1 = new Vehiculo();
    this._vehiculo2 = new Vehiculo();
    //    this._distanciaPista = 500;

    console.log("vehiculo1");
    console.log("vehiculo2");
}

var idSetInterval = 0;

Carrera.prototype.iniciarCarrera = function() {
    idSetInterval = setInterval(function() {
        miCarrera.avazarCarrera();
    }, 1000);
}

Carrera.prototype.avazarCarrera = function() {
    console.log("avanza");

    this._vehiculo1.moverVehiculo();
    this._vehiculo2.moverVehiculo();
    this.comprobarFin();
}


Carrera.prototype.comprobarFin = function() {
    if (this._vehiculo1._posicionActual >= 500 && this._vehiculo2._posicionActual >= 500) {
        clearInterval(idSetInterval);
    }
    console.log("fin");
}


Carrera.prototype.mostrarResultador = function() {
    var titulos = ["Posición", "Tiempo (s)", "imagen", "Marca", "Modelo", "Velocidad"];
    for (var i = 0; i < titulos.length; i++) {
        titulos[i];
    
    }


}

// miro si han terminado
//console.log(this._vehiculo1);
//console.log(this._vehiculo2);


var miCarrera = new Carrera();
miCarrera.iniciarCarrera();