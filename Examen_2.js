// Numeros Aleatorios
class Utilidades {
    static generarNumeroAleatorioEntre(minimo, maximo) {
        var anchoFranjaNumerica = (maximo - minimo) + 1;
        var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

        return numero;
    }

    static asignarPaisAleatoria() {
        var pais = ["Colombia", "España", "Peru", "Mexico", "Italia", "Rusia"];
        var indice = this.generarNumeroAleatorioEntre(0, tipoSecciones.length - 1);

        return tipoSecciones[indice];
    }


    static generarNombreAleatorio() {
        var nombresSocios = ["Carlos", "Daniel", "Fabian", "Juan Carlos", "Bryan", "Saul", "Christian", "Marcel", "Ronal", "David", "Fran"];
        var indice = this.generarNumeroAleatorioEntre(0, nombresSocios.length - 1);

        return nombresSocios[indice];
    }
};




class Soldado {
    constructor(nombre) {
        this._nombre = Utilidades.generarNombreAleatorio();
        this._salud = 100;
        this._potenciaDeAtaque = 0;
        this._tipoDeSoldado = [];

        this.ataca();
        this.añadeLibrosAleatoriamente(1000);
    }

    ataca(soldado) {
        soldado._salud = soldado._salud - this._potenciaDeAtaque;
    }
}

class SoldadoDeInfanteria extends soldado {
    constructor() {
        super();
        this._potenciaDeAtaque = Utilidades.generarNumeroAleatorioEntre(1, 25);
    }
}

class SoldadoDeCaballeria extends soldado {
    constructor() {
        super();
        this._potenciaDeAtaque = Utilidades.generarNumeroAleatorioEntre(25, 50);
    }
}

class SoldadoDeArtilleria extends soldado {
    constructor() {
        super();
        this._potenciaDeAtaque = Utilidades.generarNumeroAleatorioEntre(50, 75);
    }
}

class SoldadoPilotoF18 extends soldado {
    constructor() {
        super();
        this._potenciaDeAtaque = Utilidades.generarNumeroAleatorioEntre(75, 100);
    }
}


class Ejercito {
    constructor() {
        this._pais = Utilidades.asignarPaisAleatoria();
        this._soldados = [];
        this._Bajas = [];

        this.generarTipoSoldados(1000)
    }

    iniciarGuerra() {

    }

    adicionarTipoSoldados(tipoDeSoldados) {
        this._soldados.push(new Soldado(tipoDeSoldado));
    }

    class Guerra {
        constructor(ejercito1, ejercito2) {
            this._numeroDeJornadasTranscurridas = [];
            this._ejercito1 = ejercito1;
            this._ejercito2 = ejercito2;
        }


        iniciarguerra(numeroJornadas) {}

        ejecutarJornadaDeGuerra() {
            let numeroAtaque = 1;
            let resultadoAtaque = 0
            while (resultadoataque >= 100) {
                resultadoAtaque = this.(this._ejercito1, this._ejercito2);
                this._estado.push("Ejercito1: ")

            }
        }
        this.imprimirEstado();
    }

    imprimirEstado() {
        console.log("Numero de jornadas: ");


    }

}
}

//Crear Guerra
var estoEsLaGuerra = new Guerra("1", "2");

console.log(estoEsLaGuerra);

setInterval(function() {
    estoEsLaGuerra.ejecutarCiclo();
}, 1000);