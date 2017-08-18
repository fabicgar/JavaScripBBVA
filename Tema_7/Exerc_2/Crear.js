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

function crearElemento(nombre, clases, padre, innerHTML) {
    var elemento = document.createElement(nombre);

    if (clases != null && typeof(clases) != "undefined") {
        elemento.className = clases;
    }
    if (innerHTML != null && typeof(innerHTML) != "undefined") {
        elemento.innerHTML = innerHTML;
    }
    if (padre != null && typeof(padre) != "undefined") {
        padre.appendChild(elemento);
    }

    return elemento;
}


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

    var divVehiculo = document.createElement('div');
    var imgAuto = document.createElement('img');
    imgAuto.setAttribute("id", "imgAuto" + i);
    imgAuto.setAttribute("src", "./images/" + auto._imagen);
    divVehiculo.appendChild(imgAuto);
    pista[0].appendChild(divVehiculo);

    var autoImagen = document.getElementById("imgAuto" + vehiculo);
    autoImagen.setAttribute("style", "margin-left: " + (vehiculo._posicionActual * 900 / 500) + "px");

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
    var mostrarResultados = document.getElementsByClassName("mostrarResultados");
    var tablaResul = document.createElement('table');
    //tablaResul.setAttribute('style', 'border: red 9px solid;');
    mostrarResultados[0].appendChild(tablaResul);

    var tituloHead = crearElemento("thead", null, tablaResul, null);
    var tituloTr = crearElemento("tr", null, tituloHead, null);
    var titulos = ["Posición", "Tiempo (s)", "imagen", "Marca", "Modelo", "Velocidad"];
    for (var i = 0; i < titulos.length; i++) {
        crearElemento("th", null, tituloTr, titulos[i]);
    }
    console.log("fin");
}


Carrera.prototype.mostrarResultados = function() {
    var mostrarResultados = document.getElementsByClassName("mostrarResultados");
    var tablaResul = document.createElement('table');
    //tablaResul.setAttribute('style', 'border: red 9px solid;');
    mostrarResultados[0].appendChild(tablaResul);

    var tituloHead = crearElemento("thead", null, tablaResul, null);
    var tituloTr = crearElemento("tr", null, tituloHead, null);
    var titulos = ["Posición", "Tiempo (s)", "imagen", "Marca", "Modelo", "Velocidad"];
    for (var i = 0; i < titulos.length; i++) {
        crearElemento("th", null, tituloTr, titulos[i]);
    }

    var mostrarResultadosBody = crearElemento("tbody", null, tablaResul, null);

    for (var i = 0; i < this._autos.length; i++) {
        var auto = this._autos[i];

        var rowmostrarResultados = crearElemento("tr", null, mostrarResultadosBody, null);
        var tdmostrarResultados = crearElemento("td", null, rowmostrarResultados, i + 1);
        var tdmostrarResultados = crearElemento("td", null, rowmostrarResultados, auto.tiempoCarrea(500));
        var tdmostrarResultados = crearElemento("td", null, rowmostrarResultados, null);
        var imagenAuti = document.createElement('img');
        imagenAuti.src = './images/' + auto._imagen;
        imagenAuti.setAttribute('style', 'height: 30px; width: 100px');
        tdmostrarResultados.appendChild(imagenAuti);

        var tdmostrarResultados = crearElemento("td", null, rowmostrarResultados, auto._marca);
        var tdmostrarResultados = crearElemento("td", null, rowmostrarResultados, auto._modelo);
        var tdmostrarResultados = crearElemento("td", null, rowmostrarResultados, auto._velocidadMaxima);

    }


}

// miro si han terminado
//console.log(this._vehiculo1);
//console.log(this._vehiculo2);


var miCarrera = new Carrera();
miCarrera.iniciarCarrera();