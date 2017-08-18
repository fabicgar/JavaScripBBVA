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

        console.log("crear soldado");

        this.ataca();
    }

    ataca(soldado) {
        soldado._salud = reducirSalud(salud);
        if (this.soldado._salud < 0)

    }
}

reducirSalud(salud) {
    this._salud += 0

}

class SoldadoDeInfanteria extends soldado {
    constructor() {
        super(potenciaDeAtaque = Utilidades.generarNumeroAleatorioEntre(1, 25));

    }
}

class SoldadoDeCaballeria extends soldado {
    constructor() {
        super(potenciaDeAtaque = Utilidades.generarNumeroAleatorioEntre(25, 50));

    }
}

class SoldadoDeArtilleria extends soldado {
    constructor() {
        let nuevaPotencia = this._potenciaDeAtaque(new Utilidades.generarNumeroAleatorioEntre(50, 75));
        super(nuevaPotencia);

    }
}

class SoldadoPilotoF18 extends soldado {
    constructor() {
        super(this._potenciaDeAtaque = Utilidades.generarNumeroAleatorioEntre(75, 100));;
    }
}

}

class Ejercito {
    constructor(pais) {
        this._pais = Utilidades.asignarPaisAleatoria();
        this._soldados = [];
        this._Bajas = [];

        this.adicionarTipoSoldados();


    }

    adicionarTipoSoldados() {
        this.soldado.push(new SoldadoDeInfanteria(500));
        this.soldado.push(new SoldadoDeArtilleria(200));
        this.soldado.push(new SoldadoDeCaballeria(200));
        this.soldado.push(new SoldadoPilotoF18(100));
    }

}

class Guerra {
    constructor(ejercito1, ejercito2) {
        this._numeroDeJornadasTranscurridas = 0;
        this._ejercito1 = ejercito1;
        this._ejercito2 = ejercito2;
        this._intervalID = 0;
    }

    iniciarguerra() {

        this._intervalID = setInterval(() => this.ejecutarJornadaDeGuerra(), 1000);

        console.log("ya");
    }



    ejecutarJornadaDeGuerra() {
        let numeroAtaque = 1;
        let resultadoAtaque = 0
        if (this._ejercito1._soldados = 0 && this._ejercito2._soldados = 0);
        if ()

            this._estado.push("Ejercito1: ")

    }
}

getNumeroDesoldadorVivos() {
    this.ejercito1 = numeroDeSoldadosVivos;
    this.ejercito2 = numeroDeSoldadosVivos;
}

}

imprimirEstado() {
    console.log("Numero de jornadas: " + );


}





imprimirEstado() {
    console.log("Numero dejornadas: ");


}

}
}

//Crear Guerra
var estoEsLaGuerra = new Guerra("1", "2");

console.log(estoEsLaGuerra);

setInterval(function() {
    estoEsLaGuerra.ejecutarCiclo();
}, 1000);