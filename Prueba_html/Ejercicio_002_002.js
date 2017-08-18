function generarNumeroAleatorioEntre(minimo, maximo) {
    var anchoFranjaNumerica = (maximo - minimo) + 1;
    var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

    return numero;
}

function generarNombreVikingo(){
	var nombresVikingos = ["Carlos", "Daniel", "Fabian", "Juan Carlos", "Bryan", "Saul", "Christian", "Marcel", "Ronal", "David", "Fran"];
   	var indice = generarNumeroAleatorioEntre(0, nombresVikingos.length - 1);

    return nombresVikingos[indice];
}

function Vikingo(){
	this._nombre = generarNombreVikingo();
	this._salud = 100;
	this._potenciaAtaque = generarNumeroAleatorioEntre(1, 20);
	this._velocidad = generarNumeroAleatorioEntre (-1, 100);
	this.armas = generarArma();
};

Vikingo.prototype.atacaVikingo = function(vikingo){
  	vikingo._salud = vikingo._salud - this._potenciaAtaque;
}

Vikingo.prototype.addArma = function(vikingo, arma){

}

//class
function Batalla(){
	this._vikingo1 = new Vikingo();
	this._vikingo2 = new Vikingo();
};

//Metodo
Batalla.prototype.iniciarPelea = function(){
	var esElTurnoDelVikingoUno = this._vikingo1._velocidad > this._vikingo2._velocidad;

/*	if (this._vikingo1._velocidad > this._vikingo2._velocidad){
		esElTurnoDelVikingoUno = true;
	} else {
		esElTurnoDelVikingoUno = false;
	}
*/
	debugger;

	while (this._vikingo1._salud > 0 && this._vikingo2._salud > 0){
		if(esElTurnoDelVikingoUno){
			this._vikingo1.atacaVikingo(this._vikingo2);
		}else{
			this._vikingo2.atacaVikingo(this._vikingo1);
		}

		esElTurnoDelVikingoUno = !esElTurnoDelVikingoUno;
	}

	console.log(this._vikingo1);
	console.log(this._vikingo2);
}

function ArmaBatalla(arma){
	this._generarTipoArma = generarArmaAleatoria();
	this._potenciaArma = generarNumeroAleatorioEntre(20, 50);
	this._AtaquesRestante = AtaqueRestanteAleatorio(0, 10);
};

function generarNombreArma(){
	var nombresDeArmas = ["Martillo", "Changon", "Chacos", "Tijeras", "Barra", "Botella", "Trinche", "Basuca"];
   	var indice = generarArmaAleatorio(0, nombresDeArmas.length - 1);

    return generarNombresArma[indice];
}

	





//pro

var miBatalla = new Batalla();
miBatalla.iniciarPelea();


