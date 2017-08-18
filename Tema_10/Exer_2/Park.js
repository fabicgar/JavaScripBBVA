// Numeros Aleatorios
class Utilidades {
    static generarNumeroAleatorioEntre(minimo, maximo) {
        var anchoFranjaNumerica = (maximo - minimo) + 1;
        var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

        return numero;
    }

    static asignarNacionalidadAleatoria() {
        var nacionalidad = ["Colombiana", "Española", "Peruana", "Mexicana", "Italiana", "Brasileña"];
        var indice = this.generarNumeroAleatorioEntre(0, tipoSecciones.length - 1);

        return tipoSecciones[indice];
    }

    static generarNombreAleatorio() {
        var nombresSocios = ["Carlos", "Daniel", "Fabian", "Juan Carlos", "Bryan", "Saul", "Christian", "Marcel", "Ronal", "David", "Fran"];
        var indice = this.generarNumeroAleatorioEntre(0, nombresSocios.length - 1);

        return nombresSocios[indice];
    }
};

class Personas{
    constructor(nombre){
        this._nombre = nombre;
        this._edad = [];
        this._nacionalidad = 
        this._altura = 
        this._peso =
        this._Enfermo = 

    }



}












var miCarrera = new Carrera();
miCarrera.iniciarCarrera();