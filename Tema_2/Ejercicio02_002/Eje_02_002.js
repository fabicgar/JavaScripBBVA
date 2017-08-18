function Zoo(nombre, ubicacion, enfermeria) {
    this._nombre = nombre;
    this._ubicacion = ubicacion;
    this._areas = [];
    this._caja = 0;
    this._enfermeria = enfermeria;

};

Zoo.prototype.agregarAreasToZoo = function(area) {
    this._areas.push(area);
}


/*function Ubicacion(pais,ciudad,direccion){
    this._pais=pais;
    this._ciudad=ciudad;
    this._direccion= direccion;
}*/


function Area(nombre) {
    this._recintos = [];
    this._nombre = nombre;

};

Area.prototype.agregarrecintoToArea = function(recinto, nombre) {
    this._recintos.push(recinto, nombre);
}

function Recinto(nombre, detalle) {
    this._nombre = nombre;
    this._detalle = detalle;
    this._animal = Animal;
    this._persona = persona;
};


function Enfermeria(animales, salud) {
    this._animales = [];
    this._salud = [];

}

function Animal(nombre, especie, salud, hambre, pais, enfermeria, recinto) {
    this._nombre = nombre;
    this._especie = especie;
    this._salud = salud;
    this._hambre = hambre;
    this._pais = pais;
    this._enfermeria = enfermeria;
    this._recinto = recinto;
};

Animal.prototype.ganarPerderSaludAleatorioYMandarEnfermeria = function() {
    var aumentoDeSalud = generarNumeroAleatorioEntre(-10, 10);
    this._salud = this._salud + aumentoDeSalud;

    if (this._salud > 100) {
        this._salud = 100;
    }

    if (this._salud < 0) {
        this._salud = 0;
    }

    if (this._salud < 50) {
        var caso = {
            animal: this,
            recinto: recinto
        }
        this._enfermeria.push(caso);
        var indiceEnRecinto = this._recinto.animales.indexOf(this);
        this._recinto.animales.splice(indiceEnRecinto, 1);
    }
};

Animal.prototype.aumentarHambre = function() {
    this._hambre = this._hambre + 10;
};

Animal.prototype.ejecutarCiclo = function() {
    this.aumentarHambre();
    this.ganarPerderSaludAleatorioYMandarEnfermeria();
};

Animal.prototype.ganarPerderSaludAleatorioYMandarEnfermeria = function() {
    var aumentoDeSalud = generarNumeroAleatorioEntre(-10, 10);
    this._salud = this._salud + aumentoDeSalud;

    if (this._salud > 100) {
        this._salud = 100;
    }

    if (this._salud < 0) {
        this._salud = 0;
    }

    if (this._salud < 50) {
        var caso = {
            animal: this,
            recinto: recinto
        }
        this._enfermeria.push(caso);
        var indiceEnRecinto = this._recinto.animales.indexOf(this);
        this._recinto.animales.splice(indiceEnRecinto, 1);
    }
};

Animal.prototype.aumentarHambre = function() {
    this._hambre = this._hambre + 10;
};

Animal.prototype.ejecutarCiclo = function() {
    this.aumentarHambre();
    this.ganarPerderSaludAleatorioYMandarEnfermeria();
};

function persona(nombre, edad, dinero, labor)
function insertarPersonasAleatoriamente(numeroPersonas) {
    for (var i = 0; i < numeroPersonas; i++) {
        var persona = crearPersonaAleatoria();
        var recintoAleatorio = dameRecintoAleatorio();

        if (recintoAleatorio == null) {
            console.error("El zoo esta lleno");
        } else {
            recintoAleatorio.personas.push(persona);
        }


    }
} */ 





// variables del zoo

var zoo = new Zoo("Maravilla zoo", "av falsa 123");

// Crear areas

var areaMamiferos = new Area("areaMamiferos");
var areaAves = new Area("areaAves");

zoo.agregarAreasToZoo(areaMamiferos);
zoo.agregarAreasToZoo(areaAves);

//Crear ubicación

//var ubicacionZoo = new ubicacion("Colombia","Bog","av falsa 123");

//Crear recintos

var recintoTigres = new Recinto("Jaula de tigres", 50, 30, "Jaula super reforzada con titanium");
var recintoAves = new Recinto("Jaula para aves no voladoras", 100, 80, "Algunas aves se pelean mucho");

Recinto.agregarrecintoToArea(recintoTigres);
Recinto.agregarrecintoToArea(recintoAves);

//crear Animales
var perro = new Animal("Perro Bacco", "Pastor", 100, 0, "Alemania");
var gato = new Animal("Gato Bobby", "Gato Alemán", 90, 0, "Alemania");

// Crear

console.log(zoo);