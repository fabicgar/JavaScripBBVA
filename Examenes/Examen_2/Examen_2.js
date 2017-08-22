// Numeros Aleatorios
class Utilidades {
    static generarNumeroAleatorioEntre(minimo, maximo) {
        var anchoFranjaNumerica = (maximo - minimo) + 1;
        var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

        return numero;
    }

    static asignarPaisAleatoria() {
        var paises = ["Colombia", "España", "Peru", "Mexico", "Italia", "Rusia"];
        var indice = this.generarNumeroAleatorioEntre(0, paises.length - 1);

        return paises[indice];
    }


    static generarNombreAleatorio() {
        var nombresSocios = ["Carlos", "Daniel", "Fabian", "Juan Carlos", "Bryan", "Saul", "Christian", "Marcel", "Ronal", "David", "Fran"];
        var indice = this.generarNumeroAleatorioEntre(0, nombresSocios.length - 1);

        return nombresSocios[indice];
    }
};




class Soldado {
    constructor(potenciaDeAtaque) {
        this._nombre = Utilidades.generarNombreAleatorio();
        this._salud = 100;
        this._potenciaDeAtaque = potenciaDeAtaque;
        this._tipoDeSoldado = [];

        console.log("crear soldado");
    }

    ataca(soldado) {
        soldado.reducirSalud(this._potenciaDeAtaque);
    }

    reducirSalud(salud) {
        this._salud -= salud;

        if (this._salud < 0) {
            this._salud = 0;
        }
    }
}



class SoldadoDeInfanteria extends Soldado {
    constructor() {
        super(Utilidades.generarNumeroAleatorioEntre(1, 25));
    }
}

class SoldadoDeCaballeria extends Soldado {
    constructor() {
        super(Utilidades.generarNumeroAleatorioEntre(25, 50));
    }
}

class SoldadoDeArtilleria extends Soldado {
    constructor() {
        super(Utilidades.generarNumeroAleatorioEntre(50, 75));
    }
}

class SoldadoPilotoF18 extends Soldado {
    constructor() {
        super(Utilidades.generarNumeroAleatorioEntre(75, 100));
    }
}

class Ejercito {
    constructor(pais) {
        this._pais = Utilidades.asignarPaisAleatoria();
        this._soldados = [];
        this._bajas = [];

        this.adicionarTipoSoldados();
    }

    adicionarTipoSoldados() {
        for (let i = 0; i < 500; i++) {
            this._soldados.push(new SoldadoDeInfanteria());
        }

        for (let i = 0; i < 200; i++) {
            this._soldados.push(new SoldadoDeArtilleria());
        }

        for (let i = 0; i < 200; i++) {
            this._soldados.push(new SoldadoDeCaballeria());
        }

        for (let i = 0; i < 100; i++) {
            this._soldados.push(new SoldadoPilotoF18());
        }

    }

    getNumeroDesoldadosVivos() {
        return this._soldados.length;
    }

    getNumeroDeBajas() {
        return this._bajas.length;
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
        this._numeroDeJornadasTranscurridas++;
        
        this.atacaEjercito(1);
        this.atacaEjercito(2);
        this.imprimirEstado();

        if (this._ejercito1.getNumeroDesoldadosVivos() == 0 || this._ejercito2.getNumeroDesoldadosVivos() == 0) {
            window.clearInterval(this._intervalID);
            if (this._ejercito1.getNumeroDesoldadosVivos() == 0) {
                console.log("ha ganado ejercito2");
            } else {
                console.log("ha ganado ejercito 1");
            }
        }

    }


    imprimirEstado() {
        console.log("Numero de jornadas: " + this._numeroDeJornadasTranscurridas);
        console.log("Numero de soldados vivos ejercito1 : " + this._ejercito1.getNumeroDesoldadosVivos());
        console.log("Numero de soldados vivos ejercito2 : " + this._ejercito2.getNumeroDesoldadosVivos());
        console.log("Numero de bajas ejercito1 : " + this._ejercito1.getNumeroDeBajas());
        console.log("Numero de bajas ejercito2 : " + this._ejercito2.getNumeroDeBajas());

    }

    atacaEjercito(turno) {
        let ejercitoAtacante = null;
        let ejercitoAtacado = null;
        if (turno == 1) {
            ejercitoAtacante = this._ejercito1;
            ejercitoAtacado = this._ejercito2;
        } else {
            ejercitoAtacante = this._ejercito2;
            ejercitoAtacado = this._ejercito1;
        }


        for (let i = 0; i < ejercitoAtacante._soldados.length; i++) {
            let soldadoAtacante = ejercitoAtacante._soldados[i];
            let soldadoAtacado = this.getSoldadoAleatoria(ejercitoAtacado);

            if (soldadoAtacado != null) {
                soldadoAtacante.ataca(soldadoAtacado);
                if (soldadoAtacado._salud <= 0) {
                    ejercitoAtacado._bajas.push(ejercitoAtacado.soldado);
                    let posicionSoldadoAtacado = ejercitoAtacado._soldados.indexOf(soldadoAtacado);
                    ejercitoAtacado._soldados.splice(posicionSoldadoAtacado, 1);
                }
            }
        }
    }
    getSoldadoAleatoria(ejercito) {
        let indice = null;
        let resultado = null;
        if (ejercito._soldados.length > 0) {
            indice = Utilidades.generarNumeroAleatorioEntre(0, ejercito._soldados.length - 1);
            resultado = ejercito._soldados[indice];
        }

        return resultado;
    }

}





//Crear Guerra
let estoEsLaGuerra = new Guerra(new Ejercito(), new Ejercito());


console.log(estoEsLaGuerra);

estoEsLaGuerra.iniciarguerra();